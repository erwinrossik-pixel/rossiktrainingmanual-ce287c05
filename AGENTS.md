# Project rules

- Training time is written only by the single `TrainingTimeAutoTracker` (`useTrainingTimer({ autoTrack: true })`), which heartbeats each minute and pauses on tab hide; other `useTrainingTimer` instances are display-only. Why: multiple writers double-counted or lost time.
- Running `training_time` rows older than the stale window are treated as paused on load. Why: closed tabs/crashes must not count time away as training.
- A chapter that was completed stays completed on later quiz attempts (no downgrade, no lockout); only the admin reset RPC clears it. Why: weak retakes were un-completing passed chapters.
- Unlocking the next chapter after a pass must never overwrite an existing progress row (`ignoreDuplicates`). Why: retakes reset already-completed next chapters.
