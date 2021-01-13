import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';

import { light, dark } from './settings';

interface IScheme {
    name: string;
    author: string;
    variables: ISchemeSetting;
}

[
    {
        name: 'GitHub Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: dark,
    },
    {
        name: 'GitHub Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
    },
].map((scheme: IScheme) => {
    const { colors, rules, ui, useDefaultRules } = scheme.variables;
    generateScheme({
        name: scheme.name,
        author: scheme.author,
        schemeName: scheme.name,
        settings: {
            colors,
            rules,
            ui,
            useDefaultRules
        },
    });
});
