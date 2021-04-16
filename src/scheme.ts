import { Colors, Rules, UI, options } from '@meetio/scheme-generator';
import { getColors, Theme } from './colors';

export type Options = {
    light: string;
    dark: string;
    dimmed: string;
};

export function ui(theme: Theme): UI {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;

    return {
        ...options.ui,
        ...{
            caret: themes({
                light: scale.blue[7],
                dark: scale.blue[2],
                dimmed: scale.blue[2],
            }),
            gutter_foreground: color.codemirror.linenumberText,
            line_highlight: color.codemirror.activelineBg,
            find_highlight: themes({
                light: scale.yellow[4],
                dark: '#ffd33d44',
                dimmed: '#ffd33d44',
            }),
            highlight: themes({
                light: '#34d058',
                dark: '#17E5E6',
                dimmed: '#17E5E6',
            }),
            guide: color.border.secondary,
            stack_guide: color.scale.gray[8],
            active_guide: color.scale.gray[7],
            line_diff_width: '4',
        },
    };
}

export function colors(theme: Theme): Colors {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;

    return {
        accent: color.underlinenav.borderActive,
        cursor: color.scale.blue[2],
        foreground: color.text.primary,
        background: color.bg.canvas,
        comments: themes({
            light: scale.gray[5],
            dark: scale.gray[3],
            dimmed: scale.gray[3],
        }),
        deprecated: color.prettylights.syntax.invalidIllegalText,
        invalid: color.prettylights.syntax.invalidIllegalText,
        diffAdded: color.diff.addition.border,
        diffModified: color.diff.change.border,
        diffDeleted: color.diff.deletion.border,
        base: {
            black: color.ansi.black,
            blue: color.ansi.blue,
            gray: color.ansi.gray,
            green: color.ansi.green,
            orange: color.ansi.orange,
            pink: color.ansi.pink,
            purple: color.ansi.purple,
            red: color.ansi.red,
            white: color.ansi.white,
            yellow: color.ansi.yellow,
        },
    };
}

export function rules(theme: Theme): Rules[] {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;

    return [
        {
            scope: [
                'comment',
                'punctuation.definition.comment',
                'string.comment',
            ],
            settings: {
                foreground: themes({
                    light: scale.gray[5],
                    dark: scale.gray[3],
                    dimmed: scale.gray[3],
                }),
            },
        },
        {
            scope: [
                'constant',
                'entity.name.constant',
                'variable.other.constant',
                'variable.other.object',
                'variable.language',
                'entity',
            ],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: [
                'entity.name',
                'variable.parameter.function',
                'entity.name.function variable.other.readwrite',
                'meta.export.default',
                'meta.definition.variable',
            ],
            settings: {
                foreground: themes({
                    light: scale.orange[6],
                    dark: scale.orange[2],
                    dimmed: scale.orange[2],
                }),
            },
        },
        {
            scope: [
                'meta.jsx.children',
                'meta.block',
                'meta.tag.attributes',
                'meta.object.member',
                'meta.embedded.expression',
            ],
            settings: {
                foreground: color.text.primary,
            },
        },
        {
            scope: [
                'entity.name.function',
                'meta.function-call support.function',
            ],
            settings: {
                foreground: themes({
                    light: scale.purple[5],
                    dark: scale.purple[2],
                    dimmed: scale.purple[2],
                }),
            },
        },
        {
            scope: ['entity.name.tag', 'support.class.component'],
            settings: {
                foreground: themes({
                    light: scale.green[6],
                    dark: scale.green[1],
                    dimmed: scale.green[1],
                }),
            },
        },
        {
            scope: ['keyword'],
            settings: {
                foreground: themes({
                    light: scale.red[5],
                    dark: scale.red[3],
                    dimmed: scale.red[3],
                }),
            },
        },
        {
            scope: ['storage', 'storage.type'],
            settings: {
                foreground: themes({
                    light: scale.red[5],
                    dark: scale.red[3],
                    dimmed: scale.red[3],
                }),
            },
        },
        {
            scope: [
                'storage.modifier.package',
                'storage.modifier.import',
                'storage.type.java',
            ],
            settings: {
                foreground: color.text.primary,
            },
        },
        {
            scope: [
                'string',
                'punctuation.definition.string',
                'string punctuation.section.embedded source',
            ],
            settings: {
                foreground: themes({
                    light: scale.blue[8],
                    dark: scale.blue[1],
                    dimmed: scale.blue[1],
                }),
            },
        },
        {
            scope: ['support'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: [
                'meta.property-name',
                'meta.mapping.key string.quoted.double',
            ],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['variable'],
            settings: {
                foreground: themes({
                    light: scale.orange[6],
                    dark: scale.orange[2],
                    dimmed: scale.orange[2],
                }),
            },
        },
        {
            scope: ['variable.other'],
            settings: {
                foreground: color.text.primary,
            },
        },
        {
            scope: ['invalid.broken'],
            settings: {
                font_style: 'italic',
                foreground: themes({
                    light: scale.red[7],
                    dark: scale.red[2],
                    dimmed: scale.red[2],
                }),
            },
        },
        {
            scope: ['invalid.deprecated'],
            settings: {
                font_style: 'italic',
                foreground: themes({
                    light: scale.red[7],
                    dark: scale.red[2],
                    dimmed: scale.red[2],
                }),
            },
        },
        {
            scope: ['invalid.illegal'],
            settings: {
                font_style: 'italic',
                foreground: themes({
                    light: scale.red[7],
                    dark: scale.red[2],
                    dimmed: scale.red[2],
                }),
            },
        },
        {
            scope: ['invalid.unimplemented'],
            settings: {
                font_style: 'italic',
                foreground: themes({
                    light: scale.red[7],
                    dark: scale.red[2],
                    dimmed: scale.red[2],
                }),
            },
        },
        {
            scope: ['carriage-return'],
            settings: {
                font_style: 'italic underline',
                background: themes({
                    light: scale.red[5],
                    dark: scale.red[3],
                    dimmed: scale.red[3],
                }),
                foreground: themes({
                    light: scale.gray[0],
                    dark: scale.gray[9],
                    dimmed: scale.gray[9],
                }),
            },
        },
        {
            scope: ['message.error'],
            settings: {
                foreground: themes({
                    light: scale.red[7],
                    dark: scale.red[2],
                    dimmed: scale.red[2],
                }),
            },
        },
        {
            scope: ['string source'],
            settings: {
                foreground: color.text.primary,
            },
        },
        {
            scope: ['string variable'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['source.regexp', 'string.regexp'],
            settings: {
                foreground: themes({
                    light: scale.blue[8],
                    dark: scale.blue[1],
                    dimmed: scale.blue[1],
                }),
            },
        },
        {
            scope: [
                'string.regexp.character-class',
                'string.regexp source.ruby.embedded',
                'string.regexp string.regexp.arbitrary-repitition',
            ],
            settings: {
                foreground: themes({
                    light: scale.blue[8],
                    dark: scale.blue[1],
                    dimmed: scale.blue[1],
                }),
            },
        },
        {
            scope: ['string.regexp constant.character.escape'],
            settings: {
                font_style: 'bold',
                foreground: themes({
                    light: scale.green[6],
                    dark: scale.green[1],
                    dimmed: scale.green[1],
                }),
            },
        },
        {
            scope: ['support.constant'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['support.variable'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['meta.module-reference'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['punctuation.definition.list.begin.markdown'],
            settings: {
                foreground: themes({
                    light: scale.orange[6],
                    dark: scale.orange[2],
                    dimmed: scale.orange[2],
                }),
            },
        },
        {
            scope: ['markup.heading', 'markup.heading entity.name'],
            settings: {
                font_style: 'bold',
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['markup.quote'],
            settings: {
                foreground: themes({
                    light: scale.green[6],
                    dark: scale.green[1],
                    dimmed: scale.green[1],
                }),
            },
        },
        {
            scope: ['markup.italic'],
            settings: {
                font_style: 'italic',
                foreground: color.text.primary,
            },
        },
        {
            scope: ['markup.bold'],
            settings: {
                font_style: 'bold',
                foreground: color.text.primary,
            },
        },
        {
            scope: ['markup.raw'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: [
                'markup.deleted',
                'meta.diff.header.from-file',
                'punctuation.definition.deleted',
            ],
            settings: {
                background: themes({
                    light: scale.red[0],
                    dark: scale.red[9],
                    dimmed: scale.red[9],
                }),
                foreground: themes({
                    light: scale.red[7],
                    dark: scale.red[2],
                    dimmed: scale.red[2],
                }),
            },
        },
        {
            scope: [
                'markup.inserted',
                'meta.diff.header.to-file',
                'punctuation.definition.inserted',
            ],
            settings: {
                background: themes({
                    light: scale.green[0],
                    dark: scale.green[9],
                    dimmed: scale.green[9],
                }),
                foreground: themes({
                    light: scale.green[6],
                    dark: scale.green[1],
                    dimmed: scale.green[1],
                }),
            },
        },
        {
            scope: ['markup.changed', 'punctuation.definition.changed'],
            settings: {
                background: themes({
                    light: scale.orange[1],
                    dark: scale.orange[8],
                    dimmed: scale.orange[8],
                }),
                foreground: themes({
                    light: scale.orange[6],
                    dark: scale.orange[2],
                    dimmed: scale.orange[2],
                }),
            },
        },
        {
            scope: ['markup.ignored', 'markup.untracked'],
            settings: {
                foreground: themes({
                    light: scale.gray[1],
                    dark: scale.gray[8],
                    dimmed: scale.gray[8],
                }),
                background: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['meta.diff.range'],
            settings: {
                foreground: themes({
                    light: scale.purple[5],
                    dark: scale.purple[2],
                    dimmed: scale.purple[2],
                }),
                font_style: 'bold',
            },
        },
        {
            scope: ['meta.diff.header'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['meta.separator'],
            settings: {
                font_style: 'bold',
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: ['meta.output'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            scope: [
                'brackethighlighter.tag',
                'brackethighlighter.curly',
                'brackethighlighter.round',
                'brackethighlighter.square',
                'brackethighlighter.angle',
                'brackethighlighter.quote',
            ],
            settings: {
                foreground: themes({
                    light: scale.gray[6],
                    dark: scale.gray[3],
                    dimmed: scale.gray[3],
                }),
            },
        },
        {
            scope: ['brackethighlighter.unmatched'],
            settings: {
                foreground: themes({
                    light: scale.red[7],
                    dark: scale.red[2],
                    dimmed: scale.red[2],
                }),
            },
        },
        {
            scope: ['constant.other.reference.link', 'string.other.link'],
            settings: {
                foreground: themes({
                    light: scale.blue[8],
                    dark: scale.blue[1],
                    dimmed: scale.blue[1],
                }),
                font_style: 'underline',
            },
        },
    ];
}

export function getScheme(theme: Theme) {
    return {
        colors: colors(theme),
        ui: ui(theme),
        rules: rules(theme),
    };
}
