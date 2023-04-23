export interface WindowWithCounters {
  set numberOfFunctionCalls(value: string);
  get numberOfFunctionCalls();

  set numberOfPipeCalls(value: string);
  get numberOfPipeCalls();
}

// Note: Create a chrome live expression to monitor
// numberOfFunctionCalls and numberOfPipeCalls.
export const windowWithCounters = window as unknown as WindowWithCounters;
