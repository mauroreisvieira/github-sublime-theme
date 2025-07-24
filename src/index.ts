import { getScheme } from './scheme';
import { generateTheme, getRules, getVariables } from './theme';
import { generateScheme } from '@meetio/scheme-generator';
// Types
import type { GenerateTheme, Scheme } from './interfaces';

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

const themes: GenerateTheme[] = [
    {
        output: {
            filename: 'GitHub',
            extension: '.hidden-theme',
        },
        settings: {
            rules: getRules(),
        },
    },
    {
        output: {
            filename: 'GitHub Dark',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('dark'),
            rules: [],
        },
    },
    {
        output: {
            filename: 'GitHub Dark High Contrast',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('dark_high_contrast'),
            rules: [],
        },
    },
    {
        output: {
            filename: 'GitHub Dark Colorblind',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('dark_colorblind'),
            rules: [],
        },
    },
    {
        output: {
            filename: 'GitHub Light',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('light'),
            rules: [],
        },
    },
    {
        output: {
            filename: 'GitHub Light High Contrast',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('light_high_contrast'),
            rules: [],
        },
    },
    {
        output: {
            filename: 'GitHub Light Colorblind',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('light_colorblind'),
            rules: [],
        },
    },
    {
        output: {
            filename: 'GitHub Dimmed',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('dimmed'),
            rules: [],
        },
    },
    {
        output: {
            filename: 'GitHub Adaptive',
            extension: '.sublime-theme',
        },
        settings: {
            extends: 'Github.hidden-theme',
            variables: getVariables('adaptive'),
            rules: [],
        },
    },
];

themes.map(({ output, settings }) => {
    generateTheme({
        output,
        settings,
    });
});
