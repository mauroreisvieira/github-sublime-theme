import path from 'path';
import fs from 'fs';
import glob from 'glob';
import svg2img from 'svg2img';

export interface Settings {
    size: number;
    suffix: string | boolean;
    fill?: string;
}

const defaultOptions: Settings[] = [
    {
        size: 24,
        suffix: false
    },
    {
        size: 48,
        suffix: '@2x'
    },
    {
        size: 72,
        suffix: '@3x'
    },
];

glob('./src/icons/**/*.svg', function (_: Error, files: string[]) {
    files.forEach((icon: string) => {
        // eslint-disable-next-line no-undef
        const iconPath = path.join(__dirname, `../${icon}`);
        icon = iconPath.replace('.svg', '').replace('src/icons', 'textures');
        const distFolder = icon
            .split('/')
            .slice(0, -1)
            .join('/');

        fs.readFile(iconPath, 'utf8', (err: any, data: any) => {
            if (err) throw err;
            // eslint-disable-next-line no-undef
            data = Buffer.from(data, 'utf8');
            defaultOptions.forEach((setting: Settings) => {
                const { size, suffix } = setting;
                fs.mkdir(distFolder, function() {
                    svg2img(
                        data,
                        { width: size, height: size },
                        (_: any, buffer: any) => {
                            fs.writeFileSync(
                                `${suffix ? icon + suffix : icon}.png`,
                                buffer
                            );
                        }
                    );
                });
            });
        });
    })
});
