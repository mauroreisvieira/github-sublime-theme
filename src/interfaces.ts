import { SchemeSetting } from '@meetio/scheme-generator';

export interface Scheme {
    name: string;
    author: string;
    variables: SchemeSetting;
}

export interface Theme {
    name: string;
    color: {
        varibles: any;
        rules: any;
    };
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
    variables: ThemeVariables;
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
