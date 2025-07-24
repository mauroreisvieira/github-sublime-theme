import { SchemeSetting } from '@meetio/scheme-generator/dist/types';

export type Primer =
    | 'dark'
    | 'dark_high_contrast'
    | 'dark_colorblind'
    | 'light'
    | 'light_high_contrast'
    | 'light_colorblind'
    | 'dimmed'
    | 'adaptive';

export type Options = Partial<Record<Primer, string>>;

export interface Scheme {
    name: string;
    author: string;
    variables: SchemeSetting;
}

export interface ThemeVariables {
    [key: string]:
        | string
        | number
        | boolean
        | [string, number]
        | [number, number]
        | [number, number, number, number];
}

export interface ThemeSetting {
    extends?: string;
    variables?: ThemeVariables;
    rules?: any;
}

export interface GenerateTheme {
    /** Settings of scheme */
    settings: ThemeSetting;
    /** Output Management */
    output: {
        /** Scheme file name */
        filename: string;
        /** Folder destination */
        path?: string;
        /** Extension file */
        extension?: string;
    };
}
