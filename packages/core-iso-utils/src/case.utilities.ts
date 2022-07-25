import { camelCase, kebabCase, lowerCase, startCase, upperFirst } from 'lodash-es';

export function pascal(str: string): string {
  return upperFirst(camelCase(str));
}

export function camel(str: string): string {
  return camelCase(camelCase(str));
}

export function title(str: string): string {
  return startCase(lowerCase(str));
}

export function kebab(str: string): string {
  return kebabCase(str);
}
