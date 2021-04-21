import * as fs from 'fs';
import * as path from 'path';
import { getColors } from './colors';
import {
    GenerateTheme,
    ThemeSetting,
    ThemeVariables,
    Primer,
    Options,
} from './interfaces';

export function variables(theme: Primer): ThemeVariables {
    const color = getColors(theme);
    const themes = (options: Options) => options[theme];
    const scale = color.scale;
    return {
        titleBarBackground: color.bg.canvas,
        titleBarForeground: color.text.secondary,

        sidebarBackground: color.bg.canvasInset,
        sidebarBorder: color.border.primary,
        sidebarHeadingForeground: color.text.primary,

        sidebarLabelForeground: color.text.secondary,
        sidebarLabelSelectedForeground: color.text.secondary,

        sidebarFolderForeground: color.text.secondary,
        sidebarFolderExpandedForeground: color.underlinenav.borderActive,

        treeActiveSelectionBackground: themes({
            light: '#e2e5e9',
            dark: scale.gray[7],
            dimmed: scale.gray[7],
        }),

        tabInactiveBackground: color.bg.canvasInset,
        tabBorder: color.border.primary,
        tabActiveForeground: color.text.primary,
        tabActiveBackground: color.bg.canvas,
        tabSelectedBorderBorder: color.underlinenav.borderActive,
        tabsButtonScrollForeground: color.text.primary,

        gridBorder: color.border.primary,
        overlayBorder: color.border.primary,

        panelControlBackground: color.bg.canvasInset,
        panelControlBorder: color.border.primary,

        buttonBackground: color.btn.primary.bg,
        buttonHoverBackground: color.btn.primary.hoverBg,
        buttonForeground: color.btn.primary.text,

        iconButtonBackground: color.btn.primary.bg,
        iconButtonHoverBackground: color.btn.primary.hoverBg,
        iconButtonPressedBackground: color.btn.primary.hoverBg,
        iconButtonActiveBackground: color.btn.primary.hoverBg,

        statusBarForeground: color.text.secondary,
        statusBarBackground: color.bg.canvas,
        statusBarBorder: color.border.primary,

        progressBarBackground: themes({
            light: scale.blue[4],
            dark: scale.blue[5],
            dimmed: scale.blue[5],
        }),

        vcsAnnotationBorder: color.border.primary,
        vcsIgnored: themes({
            light: scale.gray[4],
            dark: color.text.disabled,
            dimmed: color.text.disabled,
        }),
        vcsModified: 'var(--bluish)',
        vcsUnmerged: 'var(--redish)',
        vcsDeleted: 'var(--pinkish)',
        vcsStaged: 'var(--yellowish)',
        vcsUntracked: 'var(--greenish)',
        vcsMissing: 'var(--orangish)',
    };
}

export function rules(theme: Primer) {
    const color = getColors(theme);
    console.log(color);
    return [
        {
            class: 'title_bar',
            bg: 'var(titleBarBackground)',
            fg: 'var(titleBarForeground)',
        },
        {
            class: 'scroll_tabs_left_button',
            'layer0.texture':
                'GitHub Theme/textures/navigation/arrow-small-left.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': 'var(tabsButtonScrollForeground)',
            content_margin: [10, 10],
        },
        {
            class: 'scroll_tabs_left_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'scroll_tabs_left_button',
            settings: ['hide_tab_scrolling_buttons'],
            content_margin: 0,
        },

        {
            class: 'scroll_tabs_right_button',
            'layer0.texture':
                'GitHub Theme/textures/navigation/arrow-small-right.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            'layer0.tint': 'var(tabsButtonScrollForeground)',
            content_margin: [10, 10],
        },
        {
            class: 'scroll_tabs_right_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'scroll_tabs_right_button',
            settings: ['hide_tab_scrolling_buttons'],
            content_margin: 0,
        },
        {
            class: 'show_tabs_dropdown_button',
            'layer0.texture': 'GitHub Theme/textures/navigation/more.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            content_margin: [10, 10],
        },
        {
            class: 'show_tabs_dropdown_button',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'tabset_control',
            'layer0.tint': 'var(tabInactiveBackground)',
            'layer1.draw_center': false,
            'layer1.inner_margin': [0, 1, 1, 1],
            'layer1.tint': 'var(tabBorder)',
            'layer1.opacity': 1,
            content_margin: [0, 0, 8, 0],
        },
        {
            class: 'tabset_control',
            'layer0.opacity': 1,
            tint_index: 1,
            tab_overlap: 0,
            tab_width: 90,
            tab_height: 40,
            mouse_wheel_switch: false,
        },
        {
            class: 'tab_control',
            'layer0.texture': '',
            'layer0.tint': 'var(tabInactiveBackground)',
            'layer0.opacity': 1,
            'layer1.texture': '',
            'layer1.tint': 'var(tabInactiveBackground)',
            'layer1.opacity': 1,
            'layer2.draw_center': false,
            'layer2.texture': '',
            'layer2.tint': 'var(tabBorder)',
            'layer2.inner_margin': [0, 1, 1, 1],
            'layer2.opacity': 1,
            'layer3.draw_center': false,
            'layer3.texture': '',
            'layer3.tint': 'var(tabBorder)',
            'layer3.inner_margin': [0, 0, 1, 1],
            'layer3.opacity': 1,
            tint_modifier: 'var(tabInactiveBackground)',
        },
        {
            class: 'tab_control',
            attributes: ['selected'],
            'layer1.tint': 'var(tabActiveBackground)',
            'layer2.inner_margin': [0, 1, 1, 0],
            'layer3.inner_margin': [0, 1, 0, 0],
            'layer3.tint': 'var(tabSelectedBorderBorder)',
            tint_modifier: 'var(tabActiveBackground)',
        },

        {
            class: 'tab_close_button',
            settings: ['show_tab_close_buttons'],
            'layer0.tint': 'var(tabActiveForeground)',
            content_margin: [10, 9],
        },

        {
            class: 'tab_label',
            fg: 'var(tabActiveForeground)',
        },

        {
            class: 'grid_layout_control',
            border_color: 'var(gridBorder)',
            border_size: 1,
        },
        {
            class: 'sidebar_container',
            'layer0.opacity': 1,
            'layer0.tint': 'var(sidebarBackground)',
            'layer1.opacity': 1,
            'layer1.inner_margin': [0, 1, 1, 0],
            'layer1.draw_center': false,
            'layer1.tint': 'var(sidebarBorder)',
            content_margin: [0, 6, 0, 0],
        },
        {
            class: 'sidebar_heading',
            fg: 'var(sidebarHeadingForeground)',
            'font.size': 'var(font_size_sm)',
        },
        {
            class: 'disclosure_button_control',
            content_margin: [0, 0, 0, 0],
        },
        {
            class: 'disclosure_button_control',
            settings: ['show_sidebar_disclosure'],
            content_margin: [8, 8],
        },
        {
            class: 'fold_button_control',
            'layer0.texture':
                'GitHub Theme/textures/navigation/chevron-right.png',
            'layer0.opacity': 1.0,
            'layer0.tint': ['foreground', 1],
            content_margin: 8,
        },
        {
            class: 'fold_button_control',
            attributes: ['expanded'],
            'layer0.texture':
                'GitHub Theme/textures/navigation/chevron-down.png',
        },
        {
            class: 'fold_button_control',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },
        {
            class: 'progress_gauge_control',
            'layer0.tint': 'var(progressBarBackground)',
            'layer0.opacity': 1,
            content_margin: [0, 8],
        },
        {
            class: 'status_bar',
            'layer0.opacity': 1,
            'layer0.tint': 'var(statusBarBackground)',
            'layer1.opacity': 1,
            'layer1.tint': 'var(statusBarBorder)',
            content_margin: [8, 5, 0, 3],
        },
        {
            class: 'label_control',
            parents: [{ class: 'status_bar' }],
            fg: 'var(statusBarForeground)',
        },
        {
            class: 'overlay_control',
            'layer0.tint': 'var(overlayBorder)',
            'layer0.opacity': 1.0,
            content_margin: 1,
        },
        {
            class: 'dialog',
            'layer0.tint': ['background', 1],
            'layer0.opacity': 1.0,
        },
        {
            class: 'quick_panel',
            row_padding: [6, 4],
            'layer0.tint': ['background', 1],
            'layer0.opacity': 1.0,
        },
        {
            class: 'quick_panel',
            parents: [{ class: 'overlay_control goto_symbol' }],
            row_padding: 0,
        },
        {
            class: 'quick_panel',
            parents: [{ class: 'overlay_control goto_symbol_in_project' }],
            row_padding: 0,
        },
        {
            class: 'quick_panel_row',
            attributes: ['selected'],
            'layer0.tint': ['foreground', 0.1],
            'layer0.opacity': 1,
        },
        {
            class: 'mini_quick_panel_row',
            attributes: ['selected'],
            'layer0.tint': ['foreground', 0.1],
            'layer0.opacity': 1,
        },
        {
            class: 'panel_control',
            'layer0.tint': 'var(panelControlBackground)',
            'layer1.opacity': 1,
            'layer1.draw_center': false,
            'layer1.inner_margin': [0, 1, 0, 1],
            'layer1.tint': 'var(panelControlBorder)',
            content_margin: [12, 12],
        },
        {
            class: 'panel_close_button',
            'layer0.texture': '',
            content_margin: 0,
        },
        {
            class: 'text_line_control',
            'layer0.opacity': 1.0,
            'layer0.inner_margin': 2,
            content_margin: 4,
        },
        {
            class: 'panel_control',
            parents: [{ class: 'switch_project_window' }],
            'layer0.tint': 'var(panelControlBackground)',
            content_margin: 0,
        },
        {
            class: 'dropdown_button_control',
            'layer0.texture': 'GitHub Theme/textures/find/history.png',
            'layer0.opacity': {
                target: 0.5,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
            content_margin: [8, 8],
        },
        {
            class: 'dropdown_button_control',
            attributes: ['hover'],
            'layer0.opacity': {
                target: 1.0,
                speed: 4.0,
                interpolation: 'smoothstep',
            },
        },

        // Buttons
        {
            class: 'button_control',
            content_margin: [10, 10],
            min_size: [80, 38],
            'layer0.tint': 'var(buttonBackground)',
            'layer0.inner_margin': [5, 6],
            'layer0.opacity': 1.0,
        },
        {
            class: 'button_control',
            attributes: ['hover'],
            'layer0.tint': 'var(buttonHoverBackground)',
        },
        {
            class: 'button_control',
            attributes: ['pressed'],
            'layer0.tint': 'var(buttonHoverBackground)',
        },
        {
            "class": "button_control",
            "parents": [{"class": "dialog"}],
            "layer0.tint": "var(buttonBackground)",
        },

         {
            "class": "icon_button_control",
            "layer0.tint": "var(iconButtonBackground)",
            "layer1.tint": 'var(iconButtonHoverBackground)',
            "layer2.tint": 'var(iconButtonPressedBackground)',
            "layer3.tint": 'var(iconButtonActiveBackground)',
            "layer0.inner_margin": [5, 6],
            "layer1.inner_margin": [5, 6],
            "layer2.inner_margin": [5, 6],
            "layer3.inner_margin": [5, 6],
            "layer0.opacity": 1.0,
            "layer1.opacity": 0.0,
            "layer2.opacity": 0.0,
            "layer3.opacity": 0.0,
            "content_margin": [12, 8, 12, 8]
        },
        {
            "class": "icon_button_control",
            "attributes": ["hover"],
            "layer1.opacity": 1.0
        },
        {
            "class": "icon_button_control",
            "attributes": ["pressed"],
            "layer2.opacity": 1.0
        },
        {
            "class": "icon_button_control",
            "attributes": ["selected"],
            "layer3.opacity": 1.0
        },
        {
            "class": "icon_regex",
            "layer0.texture": "GitHub Theme/textures/find/regex.png",
            "layer0.opacity": 1,
            "content_margin": [8, 8]
        },
        {
            "class": "icon_regex",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_regex",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_regex",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0,
            "layer0.tint": "#fff"
        },
        {
            "class": "icon_case",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/case-sensitive.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_case",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_case",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_case",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_whole_word",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/whole-word.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_whole_word",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_whole_word",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_whole_word",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_wrap",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/wrap.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_wrap",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_wrap",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_wrap",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_in_selection",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/selection.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_in_selection",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_in_selection",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_in_selection",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_highlight",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/matches.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_highlight",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_highlight",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_highlight",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_preserve_case",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/preserve-case.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_preserve_case",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_preserve_case",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_preserve_case",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_context",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/context.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_context",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_context",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_context",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_use_buffer",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/buffer.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_use_buffer",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_use_buffer",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_use_buffer",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_use_gitignore",
            "content_margin": [8, 8],
            "layer0.texture": "GitHub Theme/textures/find/gitignore.png",
            "layer0.opacity": 1
        },
        {
            "class": "icon_use_gitignore",
            "parents": [
                { "class": "icon_button_control", "attributes": ["hover"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_use_gitignore",
            "parents": [
                { "class": "icon_button_control", "attributes": ["pressed"] }
            ],
            "layer0.opacity": 1.0
        },
        {
            "class": "icon_use_gitignore",
            "parents": [
                { "class": "icon_button_control", "attributes": ["selected"] }
            ],
            "layer0.opacity": 1.0
        },

        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'file_system_entry', attributes: ['untracked'] },
            ],
            'layer0.texture': 'Meetio Theme/textures/vcs/vcs_untracked.png',
            'layer0.tint': 'var(vcsUntracked)',
            content_margin: 5,
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'file_system_entry', attributes: ['modified'] }],
            'layer0.texture': 'GitHub Theme/textures/vcs/diff_modified.png',
            'layer0.tint': 'var(vcsModified)',
            content_margin: 5,
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'file_system_entry', attributes: ['added'] }],
            'layer0.texture': 'GitHub Theme/textures/vcs/diff_added.png',
            'layer0.tint': 'var(vcsUntracked)',
            content_margin: 5,
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'file_system_entry', attributes: ['unmerged'] }],
            'layer0.texture': 'Theme - Default/common/status_unmerged.png',
            'layer0.tint': 'var(vcsUnmerged)',
            content_margin: 5,
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'file_system_entry', attributes: ['staged'] }],
            'layer0.texture': 'GitHub Theme/textures/vcs/diff_staged.png',
            'layer0.tint': 'var(vcsStaged)',
            content_margin: 5,
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'file_system_entry', attributes: ['deleted'] }],
            'layer0.tint': 'var(vcsDeleted)',
            content_margin: 5,
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'file_system_entry', attributes: ['missing'] }],
            'layer0.tint': 'var(vcsMissing)',
            content_margin: 5,
        },
        {
            class: 'vcs_status_badge',
            parents: [{ class: 'tree_row', attributes: ['expandable'] }],
            'layer0.texture': 'Theme - Default/common/status_modified.png',
        },
        {
            class: 'vcs_status_badge',
            parents: [
                { class: 'tree_row', attributes: ['expandable'] },
                { class: 'file_system_entry', attributes: ['unmerged'] },
            ],
            'layer0.texture': 'Theme - Default/common/status_unmerged.png',
        },

        {
            class: 'sidebar_label',
            fg: 'var(sidebarLabelForeground)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'tree_row', attributes: ['highlighted'] }],
            fg: 'var(sidebarLabelSelectedForeground)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'tree_row', attributes: ['expandable'] }],
            settings: ['bold_folder_labels'],
            'font.bold': true,
        },

        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['ignored'] }],
            color: 'color(var(vcsIgnored)',
        },
        {
            class: 'sidebar_label',
            parents: [
                { class: 'file_system_entry', attributes: ['untracked'] },
            ],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['modified'] }],
            color: 'var(vcsModified)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['added'] }],
            color: 'var(vcsUntracked)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['unmerged'] }],
            color: 'var(vcsUnmerged)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['missing'] }],
            color: 'var(vcsMissing)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['deleted'] }],
            color: 'var(vcsDeleted)',
        },
        {
            class: 'sidebar_label',
            parents: [{ class: 'file_system_entry', attributes: ['staged'] }],
            color: 'var(vcsStaged)',
        },
        {
            class: 'icon_folder',
            'layer0.texture': 'GitHub Theme/textures/tree/folder-closed.png',
            'layer0.tint': 'var(sidebarFolderForeground)',
            'layer0.opacity': 1.0,
            content_margin: [8, 8],
        },
        {
            class: 'icon_folder',
            parents: [{ class: 'tree_row', attributes: ['expanded'] }],
            'layer0.texture': 'GitHub Theme/textures/tree/folder-opened.png',
            'layer0.tint': 'var(sidebarFolderExpandedForeground)',
            content_margin: [8, 8],
        },
        {
            class: 'icon_folder_dup',
            'layer0.texture': 'GitHub Theme/textures/tree/folder-dup.png',
            'layer0.tint': 'var(sidebarFolderForeground)',
            content_margin: [8, 8],
        },

        {
            class: 'tree_row',
            attributes: ['!hover'],
            'layer0.opacity': 0.0,
        },
        {
            class: 'tree_row',
            attributes: ['selectable', 'hover'],
            'layer0.tint': 'var(treeActiveSelectionBackground)',
            'layer0.opacity': 0.3,
        },
        {
            class: 'tree_row',
            attributes: ['selected'],
            'layer0.tint': 'var(treeActiveSelectionBackground)',
            'layer0.opacity': 0.6,
        },
        {
            class: 'tree_row',
            attributes: ['highlighted'],
            'layer0.tint': 'var(treeActiveSelectionBackground)',
            'layer0.opacity': 1.0,
        },

        {
            class: 'vcs_branch_icon',
            'layer0.texture': 'GitHub Theme/textures/vcs/branch.png',
            'layer0.tint': 'var(statusBarForeground)',
            content_margin: [5, 5],
        },
        {
            class: 'vcs_changes_annotation',
            border_color: 'var(vcsAnnotationBorder)',
            'font.face': 'var(font_face)',
            color: 'var(statusBarForeground)',
            content_margin: [3, 1],
        },
    ];
}

export function getTheme(theme: Primer): ThemeSetting {
    return {
        extends: 'Adaptive.sublime-theme',
        variables: variables(theme),
        rules: rules(theme),
    };
}

export function generateTheme(options: GenerateTheme) {
    const { settings, output } = options;

    // eslint-disable-next-line no-undef
    const dist = output.path || path.resolve(__dirname, '../');

    fs.mkdir(dist, () => {
        try {
            fs.writeFileSync(
                `${dist}/${output.filename}${
                    output.extension || '.sublime-theme'
                }`,
                JSON.stringify(
                    {
                        extends: settings.extends,
                        variables: settings.variables || [],
                        rules: settings.rules,
                    },
                    null,
                    4
                )
            );
            console.log(output.filename, dist);
        } catch (e) {
            console.error(e);
        }
    });
}
