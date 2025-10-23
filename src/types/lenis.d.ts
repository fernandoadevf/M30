declare module '@studio-freight/lenis' {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    destroy(): void;
    scrollTo(target: any, options?: any): void;
    stop(): void;
    start(): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
  }
}

declare module 'lenis' {
  export default class Lenis {
    constructor(options?: any);
    raf(time: number): void;
    destroy(): void;
    scrollTo(target: any, options?: any): void;
    stop(): void;
    start(): void;
    on(event: string, callback: Function): void;
    off(event: string, callback: Function): void;
  }
}
