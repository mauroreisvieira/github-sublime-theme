import { generateScheme } from '@meetio/scheme-generator';
import { getScheme } from './scheme';
import { getTheme } from './theme';
import { Scheme, Theme } from './interfaces';

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
        name: 'GitHub Theme Dark',
        color: getTheme('dark'),
    },
    {
        name: 'GitHub Theme Light',
        color: getTheme('light'),
    },
    {
        name: 'GitHub Theme Dimmed',
        color: getTheme('dimmed'),
    },
].map((theme: Theme) => {
    console.log(theme.color);
});
