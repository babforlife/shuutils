
/**
 * Debounce any function
 * @param func the function to debounce
 * @param waitFor time before executing function
 * @returns promise with a resolve type of the original function's return type
 */
export function debounce<F extends (...parameters: any[]) => any>(function_: F, waitFor: number): (...parameters: Parameters<F>) => Promise<ReturnType<F>> {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  let timeout = setTimeout(/* istanbul ignore next */() => {}, waitFor)
  // eslint-disable-next-line @typescript-eslint/promise-function-async
  return (...parameters: Parameters<F>) => new Promise(resolve => {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      resolve(function_(...parameters))
    }, waitFor)
  })
}

/* istanbul ignore next */
/**
 * Sleep let you "pause" or delay processes
 * @param ms the time to wait in milliseconds, default 1000ms / 1 sec
 * @returns promise that resolve in the provided time
 */
export async function sleep(ms = 1000): Promise<number> {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise(resolve => setTimeout(() => resolve(ms), ms))
}
