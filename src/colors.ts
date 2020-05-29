import { IColors } from '@meetio/scheme-generator';
import { primer } from '@primer/primitives';

const dark: IColors = {
    cursor: primer.blue[2],
    foreground: primer.gray[0],
    background: '#1f2428',
    comments: '#637777',
    black: '#1b1f23',
    white: '#fff',
    gray: primer.gray[0],
    blue: primer.blue[3],
    green: primer.green[3],
    yellow: primer.yellow[0],
    orange: primer.orange[3],
    red: primer.red[3],
    purple: primer.purple[3],
    pink: primer.pink[3],
    deprecated: primer.red[7],
    invalid: primer.red[7],
    diffAdded: '#28a74530',
    diffModified: '#e2b93d',
    diffDeleted: '#d73a4930',
};

const light: IColors = {
    cursor: primer.blue[7],
    foreground: primer.gray[9],
    background: '#fff',
    comments: primer.gray[5],
    black: '#1b1f23',
    white: '#fff',
    gray: primer.gray[9],
    blue: primer.blue[6],
    green: primer.green[6],
    yellow: primer.yellow[9],
    orange: primer.orange[6],
    red: primer.red[5],
    purple: primer.purple[5],
    pink: primer.pink[5],
    deprecated: '#ffc777a1',
    invalid: '#d46c6c66',
    diffAdded: '#34d05822',
    diffModified: '#e2b93d',
    diffDeleted: '#d73a492',
};

export { light, dark };
