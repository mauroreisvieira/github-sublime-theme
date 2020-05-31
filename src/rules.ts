import { IRules } from '@meetio/scheme-generator';

export const rules: Array<IRules> = [
    {
        scope: ['comment', 'punctuation.definition.comment', 'string.comment'],
        settings: {
            foreground: 'var(comments)',
        },
    },
    {
        scope: [
            'constant',
            'entity.name.constant',
            'variable.other.constant',
            'variable.language',
        ],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['entity.name.type.class', 'entity, entity.name'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        scope: ['entity.name.tag'],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        scope: ['keyword'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        scope: ['meta.function meta.function-call.method variable.function'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        scope: ['storage', 'storage.type'],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        scope: [
            'storage.modifier.package',
            'storage.modifier.import',
            'storage.type.java',
        ],
        settings: {
            foreground: 'var(gray)',
        },
    },
    {
        scope: [
            'string',
            'punctuation.definition.string',
            'string punctuation.section.embedded source',
        ],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['support'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.property-name'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['variable', 'variable.parameter.function'],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        scope: ['variable.other.object'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['variable.other', 'variable.object.property'],
        settings: {
            foreground: 'var(gray)',
        },
    },
    {
        scope: ['invalid.deprecated'],
        settings: {
            font_style: 'italic',
            foreground: 'var(deprecated)',
        },
    },
    {
        scope: ['invalid.broken'],
        settings: {
            font_style: 'italic',
            foreground: 'var(invalid)',
        },
    },
    {
        scope: ['invalid.illegal'],
        settings: {
            font_style: 'italic',
            foreground: 'var(invalid)',
        },
    },
    {
        scope: ['invalid.unimplemented'],
        settings: {
            font_style: 'italic',
            foreground: 'var(invalid)',
        },
    },
    {
        scope: ['support.constant'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['support.variable'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['support.function.js', 'meta.function-call'],
        settings: {
            foreground: 'var(purple)',
        },
    },
    {
        scope: ['markup.list'],
        settings: {
            foreground: 'var(yellow)',
        },
    },
    {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
            font_style: 'bold',
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['markup.quote'],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        scope: ['markup.italic'],
        settings: {
            font_style: 'italic',
            foreground: 'var(gray)',
        },
    },
    {
        scope: ['markup.bold'],
        settings: {
            font_style: 'bold',
            foreground: 'var(gray)',
        },
    },
    {
        scope: ['markup.raw'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: [
            'markup.deleted',
            'meta.diff.header.from-file',
            'punctuation.definition.deleted',
        ],
        settings: {
            foreground: 'var(red)',
        },
    },
    {
        scope: [
            'markup.inserted',
            'meta.diff.header.to-file',
            'punctuation.definition.inserted',
        ],
        settings: {
            foreground: 'var(green)',
        },
    },
    {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
            foreground: 'var(orange)',
        },
    },
    {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['markup.underline'],
        settings: {
            font_style: 'underline',
            foreground: 'var(purple)',
        },
    },
    {
        scope: ['markup.underline.link'],
        settings: {
            font_style: 'underline',
            foreground: 'var(red)',
        },
    },
    {
        scope: ['meta.diff.range'],
        settings: {
            foreground: 'var(blue)',
            font_style: 'bold',
        },
    },
    {
        scope: ['meta.diff.header'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.separator'],
        settings: {
            font_style: 'bold',
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.output'],
        settings: {
            foreground: 'var(blue)',
        },
    },
    {
        scope: ['meta.function-call.constructor variable.type'],
        settings: {
            foreground: 'var(purple)',
        },
    },
];
