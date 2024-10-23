/*
 * Migrate the URL first
 */
export type ScreenUrlPath = '/' | '/complete' | '/error/' | '/system-error'
export const ScreenUrlPaths = {
  Root: '/',
  Completed: '/complete',
  BusinessError: '/error/',
  SystemError: '/system-error',
} as const
