export {};

declare global {
  interface Window {
    plausible: (
      name: string,
      options: { callback?: () => void; props?: { [key: string]: string } }
    ) => void;
  }
}