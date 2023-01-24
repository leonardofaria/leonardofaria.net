/* eslint-disable no-unused-vars */
export {};

declare module 'puppeteer-core';

declare global {
  interface Window {
    iframely: any;
  }
}
