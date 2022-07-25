import { getCSSVar } from '@newrade/core-react-ui-utilities-iso';

export function getCSSVarValue(name?: string) {
  if (getIsSSR()) {
    return '';
  }

  try {
    return window.getComputedStyle(document.body).getPropertyValue(getCSSVar(name));
  } catch (error) {
    return '';
  }
}

export function getIsSSR() {
  return typeof window === 'undefined';
}
