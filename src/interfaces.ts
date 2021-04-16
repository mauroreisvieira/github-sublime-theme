interface Output {
  /** Scheme file name */
  filename: string;
  /** Folder destination */
  path?: string;
  /** Extension file */
  extension?: string;
}

export interface ThemeVariables {
  [key: string]: string | number | boolean | [string ,number] | [number, number] | [number, number, number, number];
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
    output: Output;
}
