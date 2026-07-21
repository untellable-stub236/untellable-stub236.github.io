export function logInfo(message: string, data?: Record<string, any>) {
  console.log(`INFO: ${message}`, data || {});
}

export function logWarning(message: string, data?: Record<string, any>) {
  console.warn(`WARNING: ${message}`, data || {});
}

export function logError(message: string, error?: any) {
  console.error(`ERROR: ${message}`, error || {});
}
