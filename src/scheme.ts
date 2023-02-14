export { generateScheme } from '@meetio/scheme-generator';
import { Colors, Rules, UI } from '@meetio/scheme-generator';
import { getColors } from './colors';
import { Options, Primer } from './interfaces';

export function colors(theme: Primer): Colors {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;

    return {
        accent: color.primer.border.active,
        cursor: color.accent.fg,
        foreground: color.fg.default,
        background: color.canvas.default,
        comments: themes({
            light: scale.gray[5],
            dark: scale.gray[3],
            dimmed: scale.gray[3],
        }),
        deprecated: color.prettylights.syntax.invalidIllegalText,
        invalid: color.prettylights.syntax.invalidIllegalText,
        diffModified: color.accent.fg,
        diffAdded: color.success.fg,
        diffDeleted: color.danger.fg,
        base: {
            black: color.checks.ansi.black,
            blue: color.checks.ansi.blue,
            gray: color.checks.ansi.gray,
            green: color.checks.ansi.green,
            purple: color.checks.ansi.magenta,
            red: color.checks.ansi.red,
            cyan: color.checks.ansi.cyan,
            white: color.checks.ansi.white,
            yellow: color.checks.ansi.yellow,
        },
    };
}

export function ui(theme: Primer): UI {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;

    return {
        accent: 'var(accent)',
        background: 'var(background)',
        foreground: 'var(foreground)',
        caret: themes({
            light: scale.blue[7],
            dark: scale.blue[2],
            dimmed: scale.blue[2],
        }),
        block_caret: themes({
            light: scale.blue[7],
            dark: scale.blue[2],
            dimmed: scale.blue[2],
        }),
        bracket_contents_foreground: 'var(yellow)',
        bracket_contents_options: 'underline',
        brackets_foreground: 'var(cyan)',
        brackets_options: 'underline',
        fold_marker: 'var(yellow)',
        inactive_selection: 'color(var(cyan) alpha(0.1))',
        inactive_selection_border: 'color(var(cyan) alpha(0.1))',
        invisibles: 'color(var(foreground) alpha(0.3))',
        line_diff_added: 'var(diffAdded)',
        line_diff_deleted: 'var(diffDeleted)',
        line_diff_modified: 'var(diffModified)',
        line_highlight: color.codemirror.activelineBg,
        misspelling: 'var(blue)',
        selection: themes({
            light: '#0366d625',
            dark: '#3392FF44',
            dimmed: '#3392FF44',
        }),
        selection_border: themes({
            light: '#34d05800',
            dark: '#17E5E600',
            dimmed: '#17E5E600',
        }),
        selection_corner_radius: 'cut',
        selection_corner_style: 'square',
        shadow: themes({ light: '#6a737d33', dark: '#0008', dimmed: '#0008' }),
        shadow_width: '1',
        tags_foreground: 'var(cyan)',
        tags_options: 'underline',
        gutter: 'var(background)',
        gutter_foreground: `color(${color.codemirror.linenumberText} alpha(0.3))`,
        gutter_foreground_highlight: color.fg.default,
        find_highlight: themes({
            light: '#ffdf5d66',
            dark: '#ffd33d22',
            dimmed: '#ffd33d22',
        }),
        find_highlight_foreground: color.fg.default,
        highlight: themes({
            light: '#34d05890', // original: #34d05840
            dark: '#17E5E680', // original: #17E5E650
            dimmed: '#17E5E680', // original: #17E5E650
        }),
        guide: color.border.muted,
        stack_guide: color.scale.gray[8],
        active_guide: color.scale.gray[7],
        line_diff_width: '4',
        scroll_highlight: themes({
            light: scale.yellow[1],
            dark: '#a707',
            dimmed: '#a707',
        }),
        scroll_selected_highlight: themes({
            light: scale.yellow[2],
            dark: '#b808',
            dimmed: '#b808',
        }),
    };
}

export function rules(theme: Primer): Rules[] {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;

    return [
        {
            scope: [
                'comment',
                'comment.block',
                'comment.line',
                'comment.block.documentation',
                'punctuation.definition.comment',
                'meta.toc-list',
            ],
            settings: {
                foreground: 'var(comments)',
                font_style: 'italic',
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
                'variable.other.readwrite',
                'variable.parameter.function',
                'meta.export.default',
                'meta.definition.variable',
                'entity.name.type',
                'entity.name.type.module',
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
            scope: ['entity.name.type.class'],
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
                'variable.function',
                'entity.name.function',
                'meta.export.default variable.other.readwrite',
                'meta.tag.attributes variable.other.readwrite',
                'entity.name',
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
            scope: [
                'meta.jsx.children',
                'meta.block',
                'meta.object.member',
                'meta.embedded.expression',
            ],
            settings: {
                foreground: color.fg.default,
            },
        },
        {
            scope: ['entity.name.tag'],
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
                foreground: color.fg.default,
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
            scope: [
                'variable.other',
                'meta.import variable.other.readwrite.alias',
                'meta.import variable.other.readwrite',
            ],
            settings: {
                foreground: color.fg.default,
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
                foreground: color.fg.default,
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
                'string.regexp constant.character.escape',
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
            scope: [
                'punctuation.definition.list.begin.markdown',
                'markup.list.numbered.bullet.markdown',
                'markup.list.unnumbered.bullet.markdown punctuation.definition.list_item.markdown',
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
                foreground: color.fg.default,
            },
        },
        {
            scope: ['markup.bold'],
            settings: {
                font_style: 'bold',
                foreground: color.fg.default,
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
            scope: [
                'constant.other.reference.link',
                'string.other.link',
                'markup.underline.link',
            ],
            settings: {
                foreground: themes({
                    light: scale.blue[8],
                    dark: scale.blue[1],
                    dimmed: scale.blue[1],
                }),
                font_style: 'underline',
            },
        },
        {
            name: 'DIFF - Deleted',
            scope: ['diff.deleted'],
            settings: {
                background: 'color(var(diffDeleted) alpha(0.20))',
            },
        },
        {
            name: 'DIFF - Deleted Char',
            scope: ['diff.deleted.char'],
            settings: {
                background: 'color(var(diffDeleted) alpha(0.20))',
            },
        },
        {
            name: 'DIFF - Inserted',
            scope: ['diff.inserted'],
            settings: {
                background: 'color(var(diffAdded) alpha(0.20))',
            },
        },
        {
            name: 'DIFF - Inserted Char',
            scope: ['diff.inserted.char'],
            settings: {
                background: 'color(var(diffAdded) alpha(0.20))',
            },
        },
        {
            name: 'YAML - Key',
            scope: ['entity.name.tag.yaml'],
            settings: {
                foreground: themes({
                    light: scale.green[6],
                    dark: scale.green[1],
                    dimmed: scale.green[1],
                }),
            },
        },
        {
            name: 'YAML - String',
            scope: ['source.yaml string.unquoted'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
            },
        },
        {
            name: 'Better Find Buffer - Total Files Count',
            scope: ['variable.total_files_count.find-in-files'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
                font_style: 'bold',
            },
        },
        {
            name: 'Better Find Buffer - Query Files Count',
            scope: ['string.query.find-in-files'],
            settings: {
                foreground: themes({
                    light: scale.green[6],
                    dark: scale.green[1],
                    dimmed: scale.green[1],
                }),
                font_style: 'bold',
            },
        },
        {
            name: 'Better Find Buffer - Match Count',
            scope: ['variable.matched_count.find-in-files'],
            settings: {
                foreground: themes({
                    light: scale.green[6],
                    dark: scale.green[1],
                    dimmed: scale.green[1],
                }),
                font_style: 'bold',
            },
        },
        {
            name: 'Better Find Buffer - Match Files Count',
            scope: ['variable.matched_files_count.find-in-files'],
            settings: {
                foreground: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
                font_style: 'bold',
            },
        },
        {
            name: 'Better Find Buffer - No Match',
            scope: ['variable.no_matches.find-in-files'],
            settings: {
                foreground: themes({
                    light: scale.red[5],
                    dark: scale.red[3],
                    dimmed: scale.red[3],
                }),
                font_style: 'bold',
            },
        },
        {
            name: 'Better Find Buffer - Line Number',
            scope: ['constant.numeric.line-number.find-in-files'],
            settings: {
                foreground: 'color(var(blue) alpha(0.2))',
            },
        },
        {
            name: 'Better Find Buffer - Match',
            scope: ['match.find-in-files'],
            settings: {
                background: 'color(var(blue) alpha(0.2))',
            },
        },
        {
            name: 'Better Find Buffer - Line Number Match',
            scope: ['constant.numeric.line-number.match.find-in-files'],
            settings: {
                foreground: 'var(accent)',
                background: 'color(var(blue) alpha(0.1))',
            },
        },
        {
            name: 'Better Find Buffer - Punctuation Line Number Match',
            scope: ['punctuation.line-number.match.find-in-files'],
            settings: {
                foreground: 'color(var(blue) alpha(0.1))',
                background: 'color(var(blue) alpha(0.1))',
            },
        },
        {
            name: 'Better Find Buffer - File name',
            scope: ['entity.name.filename.find-in-files'],
            settings: {
                foreground: scale.white,
                background: themes({
                    light: scale.blue[6],
                    dark: scale.blue[2],
                    dimmed: scale.blue[2],
                }),
                font_style: 'bold',
            },
        },
        {
            name: 'Better Find Buffer - Footer',
            scope: ['footer.find-in-files'],
            settings: {
                background: 'var(background)',
            },
        },
    ];
}

export function getScheme(theme: Primer) {
    return {
        colors: colors(theme),
        ui: ui(theme),
        rules: rules(theme),
    };
}
