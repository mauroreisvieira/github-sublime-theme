import { generateScheme, SchemeSetting } from '@meetio/scheme-generator';
import { getScheme } from './scheme';
import { getTheme } from './theme';

interface Scheme {
    name: string;
    author: string;
    variables: SchemeSetting;
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
].map((scheme: Scheme) => {
    const { colors, rules, ui } = scheme.variables;
    generateScheme({
        name: scheme.name,
        author: scheme.author,
        output: {
            filename: scheme.name
        },
        settings: {
            colors,
            ui,
            rules,
        },
    });
});

[
    {
        scheme: getTheme('dark'),
    },
].map((theme) => {
    console.log(theme.scheme);
});
