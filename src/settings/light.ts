import { primer } from './primer';
import { rules } from './rules';

export default {
    colors: {
        accent: primer.orange[6],
        cursor: primer.orange[6],
        foreground: primer.gray[9],
        background: primer.white,
        comments: primer.gray[5],
        deprecated: primer.red[7],
        invalid: primer.red[7],
        diffAdded: primer.green[5],
        diffModified: primer.blue[5],
        diffDeleted: primer.red[5],
        base: {
            black: primer.black,
            blue: primer.blue[6],
            gray: primer.gray[9],
            green: primer.green[6],
            orange: primer.orange[6],
            palenight: primer.blue[8],
            pink: primer.pink[5],
            purple: primer.purple[5],
            red: primer.red[5],
            white: primer.white,
            yellow: primer.yellow[7],
        },
    },
    ui: {
        line_highlight: primer.gray[1],
        guide: '#eff2f6',
        stack_guide: '#eff2f6',
        active_guide: '#d7dbe0',
        highlight: '#24943E99',
        selection: '#0366D625',
        selection_border: '#0366D625',
        inactive_selection: '#0366D611',
        inactive_selection_border: '#0366D611',
        find_highlight: '#FFDF5D66',
    },
    rules,
    useDefaultRules: false
};
