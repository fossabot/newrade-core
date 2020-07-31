// This file was generated with Diez - https://diez.org
// Do not edit this file directly.

export declare class RootComponent {}

export declare class Diez<T extends RootComponent> {
  constructor (baseClass: new () => T);
  readonly component: T;
  static applyHTMLExtensions(): void;
  attach(subscriber: (component: T) => void): void;
}

export declare class DesignLanguage extends RootComponent {
  /**
   * newrade
   */
  name: string;
}
