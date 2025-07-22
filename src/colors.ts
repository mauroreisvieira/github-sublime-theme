import lightColors from '@primer/primitives/dist/json/colors/light.json';
import lightHighContrastColors from '@primer/primitives/dist/json/colors/light_high_contrast.json';
import lightColorblindColors from '@primer/primitives/dist/json/colors/light_colorblind.json';
import darkColors from '@primer/primitives/dist/json/colors/dark.json';
import darkHighContrastColors from '@primer/primitives/dist/json/colors/dark_high_contrast.json';
import darkColorblindColors from '@primer/primitives/dist/json/colors/dark_colorblind.json';
import dimmedColors from '@primer/primitives/dist/json/colors/dark_dimmed.json';
import adaptiveColors from './colors/adaptive.json';
// Types
import { Primer } from './interfaces';

export function getColors(theme: Primer | 'adaptive'): typeof lightColors {
    switch (theme) {
        case 'light':
            // Temp override until Primitives are updated
            lightColors.success.emphasis = '#1f883d';
            lightColors.btn.primary.bg = lightColors.success.emphasis;
            lightColors.btn.primary.hoverBg = lightColors.scale.green[5];
            lightColors.fg.default = '#1f2328';
            lightColors.fg.muted = '#656d76';

            return lightColors;
        case 'light_high_contrast':
            return lightHighContrastColors;
        case 'light_colorblind':
            return lightColorblindColors;
        case 'dark':
            // Temp override until Primitives are updated
            darkColors.fg.default = '#e6edf3';
            darkColors.fg.muted = '#7d8590';
            darkColors.accent.fg = '#2f81f7';
            darkColors.severe.subtle = 'rgba(219, 109, 40, 0.1)';
            darkColors.danger.subtle = 'rgba(248, 81, 73, 0.1)';
            darkColors.done.subtle = 'rgba(163, 113, 247, 0.1)';
            darkColors.sponsors.subtle = 'rgba(219, 97, 162, 0.1)';

            return darkColors;
        case 'dark_high_contrast':
            return darkHighContrastColors;
        case 'dark_colorblind':
            return darkColorblindColors;
        case 'dimmed':
            return dimmedColors;
        case 'adaptive':
            return { ...dimmedColors, ...adaptiveColors } as typeof lightColors;
        default:
            throw new Error(`Colors are missing for value: ${theme}`);
    }
}
