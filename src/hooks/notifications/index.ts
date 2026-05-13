/**
 * Unified notifications API.
 *
 * Three concerns kept as separate hooks (each has its own state and lifecycle),
 * exposed under a single import surface to simplify usage and discoverability.
 *
 *  - useInAppNotifications  → DB-backed user_notifications (bell, list, mark read)
 *  - usePushNotifications   → Browser push subscription lifecycle
 *  - useCertificateAlerts   → Admin-only realtime toast on new certificate
 */
export { useNotifications as useInAppNotifications } from '../useNotifications';
export type { UserNotification } from '../useNotifications';
export { usePushNotifications } from '../usePushNotifications';
export { useCertificateNotifications as useCertificateAlerts } from '../useCertificateNotifications';
