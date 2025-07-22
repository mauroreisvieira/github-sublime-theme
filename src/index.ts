import { getScheme } from './scheme';
import { generateTheme, getTheme } from './theme';
import { generateScheme } from '@meetio/scheme-generator';
// Types
import { Scheme, Theme } from './interfaces';

[
    {
        name: 'GitHub Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('dark'),
    },
    {
        name: 'GitHub Dark High Contrast',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('dark_high_contrast'),
    },
    {
        name: 'GitHub Dark Colorblind',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('dark_colorblind'),
    },
    {
        name: 'GitHub Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('light'),
    },
    {
        name: 'GitHub Light High Contrast',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('light_high_contrast'),
    },
    {
        name: 'GitHub Light Colorblind',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: getScheme('light_colorblind'),
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
        name: 'GitHub Dark High Contrast',
        settings: getTheme('dark_high_contrast'),
    },
    {
        name: 'GitHub Dark Colorblind',
        settings: getTheme('dark_colorblind'),
    },
    {
        name: 'GitHub Light',
        settings: getTheme('light'),
    },
    {
        name: 'GitHub Light High Contrast',
        settings: getTheme('light_high_contrast'),
    },
    {
        name: 'GitHub Light Colorblind',
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
