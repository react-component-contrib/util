export default function curry(handler: (...args: any[]) => any, ...curryArgs: any[]) {
  return (...args: any[]) => {
    return handler(...curryArgs, ...args);
  };
}
