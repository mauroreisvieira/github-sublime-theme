import { IColors } from '@meetio/scheme-generator';
import { colors } from '@primer/primitives';

const dark: IColors = {
    cursor: colors.blue[2],
    foreground: colors.gray[0],
    background: '#1f2428',
    comments: '#637777',
    black: '#1b1f23',
    white: '#fff',
    gray: colors.gray[0],
    blue: colors.blue[3],
    green: colors.green[3],
    yellow: colors.yellow[0],
    orange: colors.orange[3],
    red: colors.red[3],
    purple: colors.red[3],
    pink: colors.red[3]
};

const light: IColors = {
    cursor: colors.blue[7],
    foreground: colors.gray[9],
    background: "#fff",
    comments: colors.gray[5],
    black: '#1b1f23',
    white: '#fff',
    gray: colors.gray[9],
    blue: colors.blue[6],
    green: '#22863A',
    yellow: '#735C0F',
    orange: '#E36209',
    red: '#D73A49',
    purple: '#6F42C1'
};

export { light, dark };
