import { primer } from './primer';
import { rules } from './rules';

export default {
    colors: {
        accent: primer.orange[6],
        cursor: primer.blue[2],
        foreground: primer.gray[0],
        background: primer.gray[9],
        comments: '#637777',
        deprecated: primer.red[7],
        invalid: primer.red[7],
        diffAdded: primer.green[5],
        diffModified: primer.blue[5],
        diffDeleted: primer.red[5],
        base: {
            black: primer.black,
            blue: primer.blue[3],
            gray: primer.gray[0],
            green: primer.green[3],
            orange: primer.orange[3],
            palenight: '#9ECBFF',
            pink: primer.pink[3],
            purple: primer.purple[3],
            red: primer.red[3],
            white: primer.white,
            yellow: primer.yellow[2],
        },
    },
    ui: {
        line_highlight: '#2b3036',
        guide: primer.gray[8],
        stack_guide: primer.gray[8],
        active_guide: primer.gray[7],
        highlight: '#17E5E699',
        selection: '#3392FF44',
        selection_border: '#3392FF44',
        inactive_selection: '#3392FF22',
        inactive_selection_border: '#3392FF22',
        find_highlight: '#FFD33D22',
    },
    rules,
    useDefaultRules: false
};
