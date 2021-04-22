import darkColors from '@primer/primitives/dist/json/colors/dark.json';
import dimmedColors from '@primer/primitives/dist/json/colors/dark_dimmed.json';
import lightColors from '@primer/primitives/dist/json/colors/light.json';
import { Primer } from './interfaces';

export function getColors(theme: Primer) {
    if (theme === 'light') {
        return lightColors;
    } else if (theme === 'dark') {
        return darkColors;
    } else if (theme === 'dimmed') {
        return dimmedColors;
    }
}
