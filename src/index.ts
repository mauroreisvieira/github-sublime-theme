import {
    generateScheme,
    ISchemeSetting,
    IRules,
    IColors,
} from '@meetio/scheme-generator';

import { light, dark } from './colors';
import { rules } from './rules';

interface IScheme {
    name: string;
    author: string;
    variables: IColors;
    rules: Array<IRules>;
    useDefaultRules: boolean;
}

[
    {
        name: 'GitHub Dark',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: dark,
        rules,
    },
    {
        name: 'GitHub Light',
        author: 'Mauro Reis Vieira <mauroreisvieira@gmail.com>',
        variables: light,
        rules,
    },
].map((item: IScheme) => {
    const { variables, rules } = item;
    const settings: ISchemeSetting = {
        colors: variables,
        rules,
        ui: {
            line_diff_width: "3"
        },
        useDefaultRules: false
    };
    generateScheme(item.name, item.author, item.name, settings, 'schemes');
});
