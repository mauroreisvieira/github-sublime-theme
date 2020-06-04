import { IColors } from '@meetio/scheme-generator';
import { primer } from './primer';

const dark: IColors = {
    accent: primer.orange[6],
    cursor: primer.blue[2],
    foreground: primer.gray[0],
    background: primer.gray[9],
    comments: '#637777',
    black: primer.black,
    white: primer.white,
    gray: primer.gray[0],
    blue: primer.blue[3],
    green: primer.green[3],
    yellow: primer.yellow[2],
    orange: primer.orange[3],
    red: primer.red[3],
    purple: primer.purple[3],
    pink: primer.pink[3],
    deprecated: primer.red[7],
    invalid: primer.red[7],
    diffAdded: primer.green[5],
    diffModified: primer.blue[5],
    diffDeleted: primer.red[5]
};

const light: IColors = {
    accent: primer.orange[6],
    cursor: primer.orange[6],
    foreground: primer.gray[9],
    background: primer.white,
    comments: primer.gray[5],
    black: primer.black,
    white: primer.white,
    gray: primer.gray[9],
    blue: primer.blue[6],
    green: primer.green[6],
    yellow: primer.yellow[7],
    orange: primer.orange[6],
    red: primer.red[5],
    purple: primer.purple[5],
    pink: primer.pink[5],
    deprecated: primer.red[7],
    invalid: primer.red[7],
    diffAdded: primer.green[5],
    diffModified: primer.blue[5],
    diffDeleted: primer.red[5]
};

export { light, dark };
