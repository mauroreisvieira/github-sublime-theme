/* eslint-disable no-undef */
const lightColors = require('@primer/primitives/dist/json/colors/light.json');
const darkColors = require('@primer/primitives/dist/json/colors/dark.json');
const dimmedColors = require('@primer/primitives/dist/json/colors/dark_dimmed.json');

export type Theme = 'light' | 'dark' | 'dimmed';

export function getColors(theme: Theme) {
    if (theme === 'light') {
        return lightColors;
    } else if (theme === 'dark') {
        return darkColors;
    } else if (theme === 'dimmed') {
        return dimmedColors;
    }
}
