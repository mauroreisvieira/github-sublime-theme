import { schemes } from './scheme';
import { generateScheme } from '@meetio/scheme-generator';
import { generateTheme, themes } from './theme';

schemes.map((scheme) => {
    generateScheme({
        name: scheme.name,
        author: scheme.author,
        output: {
            filename: scheme.name,
        },
        settings: scheme.variables,
    });
});

themes.map(({ output, settings }) => {
    generateTheme({
        output,
        settings,
    });
});
