import isObject from 'src/is-object';
import curry from 'src/curry';

interface ConcatOptions {
  separator?: string;
}

export function concat(...args: Array<string | undefined>): string;
export function concat(options: ConcatOptions, ...args: string[]): string;
export function concat(...args: any[]): string {
  const defaultOptions = {
    separator: '-',
  };
  let options = args[0];
  if (isObject(options)) {
    options = Object.assign(defaultOptions, options);
    args.shift();
  } else {
    options = defaultOptions;
  }
  return args.filter(item => !!item).join(options.separator);
}

export const createCurriedConcat = (...args: any[]) => curry(concat, ...args);
