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
        },
        rules,
    },
    {
        name: 'GitHub Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        customeUi: {
            line_diff_width: '3',
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
