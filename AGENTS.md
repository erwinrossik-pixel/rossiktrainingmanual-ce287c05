# Project rules

- Training time is written only by the single app-wide `TrainingTimeAutoTracker` (mounted once in `App`, `useTrainingTimer({ autoTrack: true })`), which tracks only on training pages, heartbeats each minute and pauses on tab hide or other pages; other `useTrainingTimer` instances are display-only. Why: multiple writers double-counted or lost time.
- Running `training_time` rows older than the stale window are treated as paused on load. Why: closed tabs/crashes must not count time away as training.
- A chapter that was completed stays completed on later quiz attempts (no downgrade, no lockout); only the admin reset RPC clears it. Why: weak retakes were un-completing passed chapters.
- Unlocking the next chapter after a pass must never overwrite an existing progress row (`ignoreDuplicates`). Why: retakes reset already-completed next chapters.
- Admin read access to learner data goes through `can_admin_view_user(owner)`: admins see only users of companies they are approved in; only the master-company super admin sees all companies. Why: platform `admin` role previously exposed other tenants' sessions, certificates and discussions.
