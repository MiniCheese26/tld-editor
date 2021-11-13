export type Tld = Record<string, TldType>;

export type TldType = 'generic' | 'sponsored' | 'country-code' | 'infrastructure' | 'generic-restricted';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    fg: string;
    fg1: string;
    font: string;
    placeholder: string;
  }
}
