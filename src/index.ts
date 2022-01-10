import { Scheme, Theme } from './interfaces';
import { generateScheme, getScheme } from './scheme';
import { generateTheme, getTheme } from './theme';

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
            filename: scheme.name,
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
        name: 'GitHub Dark',
        settings: getTheme('dark'),
    },
    {
        name: 'GitHub Light',
        settings: getTheme('light'),
    },
    {
        name: 'GitHub Dimmed',
        settings: getTheme('dimmed'),
    },
    {
        name: 'GitHub Adaptive',
        settings: getTheme('adaptive'),
    },
].map((theme: Theme) => {
    generateTheme({
        output: {
            filename: theme.name,
        },
        settings: theme.settings,
    });
});
