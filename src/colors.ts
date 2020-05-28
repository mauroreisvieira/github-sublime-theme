import { IColors } from '@meetio/scheme-generator';
import { colors } from '@primer/primitives';

const dark: IColors = {
    cursor: colors.blue[2],
    foreground: '#fafbfc',
    background: '#1f2428',
    comments: '#637777',
    black: '#1b1f23',
    white: '#fff',
    gray: "#fafbfc",
    blue: '#79b8ff',
    green: '#85E89D',
    yellow: '#FFFDEF',
    orange: '#ffab70',
    red: '#F97583',
    purple: '#b392f0',
    deprecated: '#b31d28',
    invalid: '#b31d28',
    diffAdded: '#addb67',
    diffModified: '#e2b93d',
    diffDeleted: '#ef5350',
};

const light: IColors = {
    cursor: colors.blue[7],
    foreground: '#24292E',
    background: "#fff",
    comments: '#6A737D',
    black: '#1b1f23',
    white: '#fff',
    gray: "#24292e",
    blue: '#005CC5',
    green: '#22863A',
    yellow: '#735C0F',
    orange: '#E36209',
    red: '#D73A49',
    purple: '#6F42C1',
    deprecated: '#b31d28',
    invalid: '#b31d28',
    diffAdded: '#addb67',
    diffModified: '#e2b93d',
    diffDeleted: '#ef5350',
};

export { light, dark };
