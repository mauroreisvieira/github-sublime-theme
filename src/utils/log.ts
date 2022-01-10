    import {
    bgGreen,
    yellow,
    red,
    blue,
    bold,
    underline,
} from 'picocolors';

const success = (scheme: string, folder: string) => {
    console.log(
        bgGreen(bold(' SUCCESS ')) +
            ' － Theme ' +
            blue(bold(`${scheme}.sublime-theme`)) +
            ' created in ' +
            yellow(underline(folder)) +
            ' folder'
    );
};

const error = (error: string) => console.log(red(bold(error)));

export const log = { success, error };
