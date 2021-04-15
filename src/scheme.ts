import { generateScheme, ISchemeSetting } from '@meetio/scheme-generator';

import { getScheme } from './colors';

interface IScheme {
    name: string;
    author: string;
    variables: ISchemeSetting;
}

[
    {
        name: 'GitHub Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('dark'),
    },
    {
        name: 'GitHub Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('light'),
    },
    {
        name: 'GitHub Dimmed',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('dimmed'),
    },
].map((scheme: IScheme) => {
    const { colors, rules, ui } = scheme.variables;
    generateScheme({
        name: scheme.name,
        author: scheme.author,
        schemeName: scheme.name,
        settings: {
            colors,
            ui,
            rules,
            useDefaultRules: false,
        },

    });
});
