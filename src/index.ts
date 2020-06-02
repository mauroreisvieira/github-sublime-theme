import {
    generateScheme,
    ISchemeSetting,
    IRules,
    IUi,
    IColors,
} from '@meetio/scheme-generator';

import { primer } from './primer';
import { light, dark } from './colors';
import { rules } from './rules';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    rules: Array<IRules>;
    customeUi?: IUi;
}

[
    {
        name: 'GitHub Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: dark,
        customeUi: {
            guide: primer.gray[8],
            stack_guide: primer.gray[8],
            active_guide: primer.gray[7],
            selection: '#3392FF44',
            highlight: '#17E5E699',
            inactive_selection: '#3392FF22',
            find_highlight: '#FFD33D22',
        },
        rules,
    },
    {
        name: 'GitHub Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        customeUi: {
            guide: '#eff2f6',
            stack_guide: '#eff2f6',
            active_guide: '#d7dbe0',
            selection: '#0366D625',
            highlight: '#24943E99',
            inactive_selection: '#0366D611',
            find_highlight: '#FFDF5D66',
        },
        rules,
    },
].map((item: IScheme) => {
    const { variables, customeUi, rules } = item;
    const settings: ISchemeSetting = {
        colors: variables,
        rules,
        ui: {
            ...customeUi,
            ...{
                accent: 'var(accent)',
                bracket_contents_foreground: 'var(yellow)',
                bracket_contents_options: 'underline',
                brackets_foreground: 'var(yellow)',
                tags_options: 'underline',
                tags_foreground: 'var(yellow)',
                brackets_options: 'underline',
                line_diff_width: '3',
                gutter_foreground_highlight: 'var(foreground)',
                scroll_highlight: 'var(yellow)',
                scroll_selected_highlight: 'var(green)',
                find_highlight_foreground: 'var(foreground)'
            },
        },
        useDefaultRules: false,
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
