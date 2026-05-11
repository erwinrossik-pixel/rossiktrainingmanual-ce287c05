-- Backfill estimated training time for users where the timer was paused due to forced tab close
-- Estimation: sum of page_view gaps < 30min + 60s per first-in-session view
WITH pv AS (
  SELECT user_id, created_at,
    LAG(created_at) OVER (PARTITION BY user_id ORDER BY created_at) AS prev
  FROM page_views
  WHERE user_id IN ('acaafe92-2fe3-408e-ac7a-ce7a66f16eaf','ec276f71-5c86-41f6-a668-3ef79650a85d')
),
gaps AS (
  SELECT user_id,
    CASE
      WHEN prev IS NULL THEN 60
      WHEN EXTRACT(EPOCH FROM (created_at - prev)) > 1800 THEN 60
      ELSE EXTRACT(EPOCH FROM (created_at - prev))
    END AS sec
  FROM pv
),
totals AS (
  SELECT user_id, FLOOR(SUM(sec))::int AS est_sec FROM gaps GROUP BY user_id
)
INSERT INTO training_time (user_id, day_number, total_seconds, is_running, last_start_time, training_started_at)
SELECT t.user_id, 1, GREATEST(t.est_sec, COALESCE((SELECT total_seconds FROM training_time tt WHERE tt.user_id=t.user_id AND tt.day_number=1),0)),
  false, NULL, (SELECT MIN(created_at) FROM page_views pv WHERE pv.user_id = t.user_id)
FROM totals t
ON CONFLICT (user_id, day_number) DO UPDATE
  SET total_seconds = GREATEST(EXCLUDED.total_seconds, training_time.total_seconds),
      updated_at = NOW();