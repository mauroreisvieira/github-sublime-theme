import {
    generateScheme,
    ISchemeSetting,
    IRules,
    IUi,
    IColors,
} from '@meetio/scheme-generator';

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
            line_diff_width: '3',
            gutter_foreground_highlight: dark.foreground,
            scroll_highlight: dark.yellow,
            scroll_selected_highlight: dark.green,
            selection: '#3392FF44',
            highlight: '#17E5E699',
            inactive_selection: '#3392FF22',
            find_highlight: '#FFD33D22',
            find_highlight_foreground: dark.foreground,
            brackets_options: 'stippled_underline',
        },
        rules,
    },
    {
        name: 'GitHub Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        customeUi: {
            line_diff_width: '3',
            gutter_foreground_highlight: light.foreground,
            scroll_highlight: light.yellow,
            scroll_selected_highlight: light.green,
            selection: '#0366D625',
            highlight: '#24943E99',
            inactive_selection: '#0366D611',
            find_highlight: '#FFDF5D66',
            find_highlight_foreground: light.foreground,
            brackets_options: 'stippled_underline',
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
                line_diff_width: '3'
            },
        },
        useDefaultRules: false,
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
