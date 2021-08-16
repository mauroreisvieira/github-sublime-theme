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
        accent: color.underlinenav.borderActive,
        background: 'var(--background)',
        foreground: color.text.primary,
        fontSizeSm: 11,
        fontSizeMd: 12,
        fontSizeLg: 14,
        fontSizeHuge: 24,
        fontFace: 'system',

        titleBarBackground: color.bg.canvas,
        titleBarForeground: color.text.secondary,

        tooltipBackground: themes({
            light: scale.blue[6],
            dark: scale.blue[2],
            dimmed: scale.blue[2],
        }),
        tooltipForeground: themes({
            light: scale.blue[1],
            dark: scale.blue[7],
            dimmed: scale.blue[7],
        }),

        sidebarBackground: color.bg.canvasInset,
        sidebarBorder: color.border.primary,
        sidebarHeadingForeground: color.text.primary,

        sidebarLabelForeground: color.text.primary,
        sidebarLabelHoverForeground: color.text.primary,
        sidebarLabelSelectedForeground: color.text.primary,

        sidebarFolderForeground: color.text.secondary,
        sidebarFolderExpandedForeground: 'var(accent)',

        treeActiveSelectionBackground: themes({
            light: '#e2e5e9',
            dark: scale.gray[7],
            dimmed: scale.gray[7],
        }),

        tabInactiveBackground: color.bg.canvasInset,
        tabBorder: color.border.primary,
        tabActiveForeground: color.text.primary,
        tabActiveBackground: color.bg.canvas,
        tabSelectedBorderBorder: 'var(accent)',
        tabButtonForeground: color.text.primary,

        gridBorder: color.border.primary,
        overlayBorder: color.border.overlay,

        panelControlBackground: color.bg.canvasInset,
        panelControlBorder: color.border.primary,

        panelRowBackground: color.bg.canvasInset,
        panelRowForeground: color.text.primary,
        panelRowLabelForeground: color.text.tertiary,
        panelRowSelectedBackground: color.bg.overlay,
        panelRowSelectedForeground: color.text.primary,
        panelRowMatchForeground: themes({
            light: scale.blue[5],
            dark: scale.blue[4],
            dimmed: scale.blue[4],
        }),
        panelRowSelectedMatchForeground: themes({
            light: scale.blue[5],
            dark: scale.blue[4],
            dimmed: scale.blue[4],
        }),
        panelRowLinkForeground: color.text.link,

        autoCompleteBackground: color.bg.canvasInset,
        autoCompleteForeground: color.text.primary,
        autoCompleteSelectedBackground: color.text.tertiary,
        autoCompleteSelectedForeground: color.bg.canvasInset,
        autoCompleteMatchForeground: 'var(accent)',
        autoCompleteSelectedMatchForeground: 'var(accent)',

        inputBackground: color.input.bg,
        inputBorder: color.input.border,
        inputForeground: color.text.primary,

        buttonForeground: color.text.primary,
        buttonBackground: `color(${color.text.primary} alpha(0.02))`,
        buttonBorder: color.input.border,
        buttonHoverBackground: `color(${color.text.primary} alpha(0.1))`,
        buttonPressedBackground: `color(${color.text.primary} alpha(0.2))`,
        buttonSelecteddBackground: `color(${color.text.primary} alpha(0.08))`,

        buttonIconForeground: 'var(foreground)',
        buttonIconSelecteddForeground: 'var(accent)',

        statusBarForeground: color.text.secondary,
        statusBarHoverForeground: color.text.primary,
        statusBarBackground: color.bg.canvas,
        statusBarBorder: color.border.primary,

        progressBarBackground: themes({
            light: scale.blue[4],
            dark: scale.blue[5],
            dimmed: scale.blue[5],
        }),

        scrollBar: themes({
            light: '#959da533',
            dark: '#484F5833',
            dimmed: '#484F5833',
        }),
        scrollTrack: themes({
            light: '#959da588',
            dark: '#484F5888',
            dimmed: '#484F5888',
        }),

        vcsAnnotationBorder: color.border.primary,
        vcsUntracked: color.diff.addition.text,
        vcsModified: color.diff.change.text,
        vcsDeleted: color.diff.deletion.text,
        vcsIgnored: themes({
            light: scale.gray[4],
            dark: color.text.disabled,
            dimmed: color.text.disabled,
        }),
        vcsUnmerged: color.text.warning,
        vcsStaged: 'var(--cyanish)',
        vcsMissing: color.text.warning,
    };
}

export const rules = [
    // TITLE BAR
    {
        class: 'title_bar',
        bg: 'var(titleBarBackground)',
        fg: 'var(titleBarForeground)',
    },
    {
        class: 'title_label_control',
        fg: ['foreground', 1],
        'font.size': 'var(fontSizeHuge)',
    },

    // TOOLTIP
    {
        class: 'tool_tip_control',
        'layer0.tint': 'var(tooltipBackground)',
        'layer0.opacity': 1.0,
        content_margin: [12, 8],
    },
    {
        class: 'tool_tip_label_control',
        fg: 'var(tooltipForeground)',
    },

    // TABS
    {
        class: 'scroll_tabs_left_button',
        'layer0.texture':
            'GitHub Theme/textures/navigation/arrow-small-left.png',
        'layer0.opacity': {
            target: 0.5,
            speed: 4.0,
            interpolation: 'smoothstep',
        },
        'layer0.tint': 'var(tabButtonForeground)',
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
        'layer0.tint': 'var(tabButtonForeground)',
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
        class: 'new_tab_button',
        'layer0.texture': 'Theme - Default/common/new_tab.png',
        'layer0.tint': 'var(tabButtonForeground)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        'layer0.inner_margin': [21, 0, 0, 0],
        content_margin: [12, 12, 10, 12],
    },
    {
        class: 'new_tab_button',
        settings: ['!enable_tab_scrolling'],
        content_margin: [15, 12],
    },
    {
        class: 'new_tab_button',
        settings: ['hide_new_tab_button'],
        content_margin: 0,
    },
    {
        class: 'new_tab_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },

    {
        class: 'show_tabs_dropdown_button',
        'layer0.texture': 'GitHub Theme/textures/navigation/more.png',
        'layer0.tint': 'var(tabButtonForeground)',
        'layer0.opacity': {
            target: 0.5,
            speed: 5,
            interpolation: 'smoothstep',
        },
        content_margin: [15, 12],
    },
    {
        class: 'show_tabs_dropdown_button',
        attributes: ['hover'],
        'layer0.opacity': {
            target: 1,
            speed: 5,
            interpolation: 'smoothstep',
        },
    },
    {
        class: 'tabset_control',
        'layer0.tint': 'var(tabInactiveBackground)',
        'layer0.opacity': 1.0,

        'layer1.draw_center': false,
        'layer1.inner_margin': [0, 1, 1, 1],
        'layer1.tint': 'var(tabBorder)',
        'layer1.opacity': 1.0,

        content_margin: [0, 0, 8, 0],
        connector_height: 0,
        tint_index: 0,
        tab_overlap: 0,
        tab_width: 80,
        tab_height: 40,
        mouse_wheel_switch: false,
        tint_modifier: 'var(tabInactiveBackground)',
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
        class: 'tab_label',
        'font.face': 'var(fontFace)',
        'font.size': 'var(fontSizeSm)',
        fg: 'var(tabActiveForeground)',
    },

    {
        class: 'tab_close_button',
        'layer0.tint': 'var(tabActiveForeground)',
    },

    // GRID
    {
        class: 'grid_layout_control',
        border_color: 'var(gridBorder)',
        border_size: 2,
    },

    // SIDEBAR LABEL
    {
        class: 'sidebar_container',
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(sidebarBackground)',
        'layer1.opacity': 1.0,
        'layer1.inner_margin': [0, 1, 1, 0],
        'layer1.draw_center': false,
        'layer1.tint': 'var(sidebarBorder)',
        content_margin: [0, 6, 0, 0],
    },
    {
        class: 'sidebar_heading',
        fg: 'var(sidebarHeadingForeground)',
        'font.size': 'var(fontSizeSm)',
        'font.bold': false,
    },
    {
        class: 'sidebar_tree',
        row_padding: [14, 3],
        indent: 20,
        indent_offset: 14,
        indent_top_level: false,
        dark_content: false,
        spacer_rows: true,
    },
    {
        class: 'sidebar_label',
        fg: 'var(sidebarLabelForeground)',
    },
    {
        class: 'sidebar_label',
        fg: 'var(sidebarLabelHoverForeground)',
        parents: [{ class: 'tree_row', attributes: ['hover'] }],
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
        parents: [{ class: 'file_system_entry', attributes: ['untracked'] }],
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

    // SIDEBAR ICONS
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
        'layer0.texture': 'GitHub Theme/textures/navigation/chevron-right.png',
        'layer0.opacity': 1.0,
        'layer0.tint': ['foreground', 1],
        content_margin: 8,
    },
    {
        class: 'fold_button_control',
        attributes: ['expanded'],
        'layer0.texture': 'GitHub Theme/textures/navigation/chevron-down.png',
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

    // SCROLL BAR
    {
        class: 'scroll_area_control',
        settings: ['overlay_scroll_bars'],
        overlay: true,
    },
    {
        class: 'scroll_area_control',
        settings: ['!overlay_scroll_bars'],
        overlay: false,
    },
    {
        class: 'scroll_area_control',
        parents: [
            {
                class: 'sidebar_container',
            },
        ],
        content_margin: [0, 10, 0, 10],
    },
    {
        class: 'scroll_bar_control',
        'layer0.opacity': 1,
        content_margin: 4,
        tint_index: 0,
    },
    {
        class: 'scroll_bar_control',
        settings: ['overlay_scroll_bars'],
        'layer0.opacity': 0,
    },
    {
        class: 'scroll_bar_control',
        settings: ['!overlay_scroll_bars'],
        'layer0.opacity': 1,
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'popup_control auto_complete_popup',
            },
        ],
        tint_modifier: [0, 0, 0, 0.05],
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'switch_project_window',
            },
        ],
        'layer0.tint': [235, 237, 239],
        tint_index: -1,
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'sidebar_container',
            },
        ],
        'layer0.opacity': 0,
    },
    {
        class: 'scroll_corner_control',
        parents: [
            {
                class: 'sidebar_container',
            },
        ],
        'layer0.opacity': 0,
    },
    {
        class: 'scroll_bar_control',
        parents: [
            {
                class: 'overlay_control',
            },
        ],
        'layer0.opacity': 0,
        content_margin: [4, 0, 0, 0],
    },
    {
        class: 'scroll_track_control',
        'layer0.tint': 'var(scrollBar)',
        'layer0.opacity': 1,
        'layer0.inner_margin': 2,
        content_margin: [4, 4, 3, 4],
    },
    {
        class: 'puck_control',
        'layer0.tint': 'var(scrollTrack)',
        'layer0.opacity': 1,
    },
    {
        class: 'scroll_corner_control',
        'layer0.opacity': 1,
        tint_index: 0,
    },
    {
        class: 'scroll_track_control',
        attributes: ['horizontal'],
        'layer0.tint': 'var(scrollBar)',
        content_margin: [4, 4, 4, 3],
    },
    {
        class: 'puck_control',
        attributes: ['horizontal'],
        'layer0.tint': 'var(scrollTrack)',
    },
    {
        class: 'progress_bar_control',
        'layer0.tint': ['background', 0.94],
        'layer0.opacity': 1,
    },

    // PROGRESS BAR
    {
        class: 'progress_gauge_control',
        'layer0.tint': 'var(progressBarBackground)',
        'layer0.opacity': 1.0,
        content_margin: [0, 8],
    },

    // STATUS BAR
    {
        class: 'status_bar',
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(statusBarBackground)',
        'layer1.inner_margin': [0, 1, 0, 0],
        'layer1.opacity': 1.0,
        'layer1.tint': 'var(statusBarBorder)',
        content_margin: [8, 5, 0, 3],
    },
    {
        class: 'status_bar',
        attributes: ['panel_visible'],
        'layer1.opacity': 0.0,
    },
    {
        class: 'status_bar',
        attributes: ['!panel_visible'],
        'layer1.opacity': 1.0,
    },
    {
        class: 'label_control',
        parents: [{ class: 'status_bar' }],
        'font.size': 'var(fontSizeMd)',
        fg: 'var(statusBarForeground)',
    },
    {
        class: 'label_control',
        parents: [
            { class: 'window' },
            { class: 'status_button', attributes: ['hover'] },
        ],
        fg: 'var(statusBarHoverForeground)',
    },
    {
        class: 'label_control',
        parents: [
            {
                class: 'panel_grid_control',
            },
        ],
        'font.size': 'var(fontSizeSm)',
        'font.bold': true,
        fg: 'var(buttonForeground)',
    },
    {
        class: 'overlay_control',
        'layer0.tint': 'var(overlayBorder)',
        'layer0.opacity': 1.0,
        content_margin: 1,
    },

    // DIALOG
    {
        class: 'dialog',
        'layer0.tint': 'var(panelControlBackground)',
        'layer0.opacity': 1.0,
    },

    // QUICK PANEL
    {
        class: 'mini_quick_panel_row',
        'layer0.tint': 'var(panelRowBackground)',
        'layer0.inner_margin': [2, 2, 2, 2],
        'layer0.opacity': 1.0,
    },
    {
        class: 'mini_quick_panel_row',
        attributes: ['selected'],
        'layer0.tint': 'var(panelRowSelectedBackground)',
    },
    {
        class: 'quick_panel',
        row_padding: [12, 6],
        'layer0.tint': ['background', 1],
        'layer0.opacity': 1.0,
    },
    {
        class: 'quick_panel',
        parents: [
            {
                class: 'overlay_control goto_symbol',
            },
        ],
        row_padding: [0, 0, 0, 0],
    },
    {
        class: 'quick_panel',
        parents: [
            {
                class: 'overlay_control goto_symbol_in_project',
            },
        ],
        row_padding: [0, 0, 0, 0],
    },
    {
        class: 'quick_panel_row',
        'layer0.opacity': 1.0,
    },
    {
        class: 'quick_panel_row',
        'layer0.tint': 'var(panelRowBackground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'quick_panel_row',
        attributes: ['selected'],
        'layer0.tint': 'var(panelRowSelectedBackground)',
    },
    {
        class: 'quick_panel_entry',
        spacing: 1,
    },
    {
        class: 'quick_panel_label',
        'font.face': 'var(fontFace)',
        'font.size': 'var(fontSizeMd)',
        fg: 'var(panelRowForeground)',
        match_fg: 'var(panelRowMatchForeground)',
        selected_fg: 'var(panelRowSelectedForeground)',
        selected_match_fg: 'var(panelRowSelectedMatchForeground)',
    },
    {
        class: 'quick_panel_path_label',
        'font.face': 'var(fontFace)',
        'font.size': 'var(fontSizeSm)',
        fg: 'var(panelRowLabelForeground)',
        match_fg: 'var(panelRowMatchForeground)',
        selected_fg: 'var(panelRowSelectedForeground)',
        selected_match_fg: 'var(panelRowSelectedMatchForeground)',
    },
    {
        'font.face': 'var(fontFace)',
        'font.size': 'var(fontSizeSm)',
        fg: 'var(panelRowForeground)',
        class: 'quick_panel_detail_label',
        link_color: 'var(panelRowLinkForeground)',
    },
    {
        class: 'quick_panel_label hint',
        'font.size': 'var(fontSizeSm)',
        'font.italic': true,
    },
    {
        class: 'quick_panel_label key_binding',
        'font.size': 'var(fontSizeSm)',
    },

    // PANEL CONTROL
    {
        class: 'panel_control',
        'layer0.tint': 'var(panelControlBackground)',
        'layer0.opacity': 1.0,
        'layer1.draw_center': false,
        'layer1.inner_margin': [0, 1, 0, 1],
        'layer1.tint': 'var(panelControlBorder)',
        'layer1.opacity': 1.0,
        content_margin: [12, 12],
    },
    {
        class: 'panel_control',
        parents: [{ class: 'switch_project_window' }],
        'layer0.tint': 'var(panelControlBackground)',
        content_margin: 2,
    },
    {
        class: 'panel_grid_control',
        inside_spacing: 4,
        outside_hspacing: 4,
        outside_vspacing: 4,
    },
    {
        class: 'panel_close_button',
        content_margin: 0,
    },

    // INPUT
    {
        class: 'text_line_control',
        'layer0.opacity': 1.0,
        'layer0.inner_margin': [2, 2],
        'layer0.tint': 'var(background)',
        'layer1.tint': 'var(inputBorder)',
        'layer1.opacity': 1.0,
        'layer1.inner_margin': 1,
        'layer1.draw_center': false,
        content_margin: [4, 2],
        color_scheme_tint: 'var(background)',
    },

    // DROPDOWN
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

    // AUTO COMPLETE
    {
        class: 'auto_complete_info',
        spacing: 8,
    },
    {
        class: 'auto_complete',
        row_padding: 0,
        tint_index: 0,
        tint_modifier: 'var(autoCompleteBackground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'auto_complete_label',
        'font.face': 'var(fontFace)',
        'font.size': 'var(fontSizeSm)',
        'font.italic': true,
        fg: 'var(autoCompleteForeground)',
        match_fg: 'var(autoCompleteMatchForeground)',
        selected_fg: 'var(autoCompleteSelectedForeground)',
        selected_match_fg: 'var(autoCompleteSelectedMatchForeground)',
        fg_blend: true,
    },
    {
        class: 'auto_complete_kind_name_label',
        'font.italic': true,
        border_color: 'color(var(accent) a(0.8))',
    },
    {
        class: 'auto_complete_description_label',
        'font.italic': true,
    },
    {
        class: 'auto_complete_hint',
        opacity: 0.7,
        'font.italic': true,
    },
    {
        class: 'table_row',
        'layer0.tint': 'var(autoCompleteSelectedBackground)',
        'layer0.opacity': 0,
    },
    {
        class: 'table_row',
        attributes: ['selected'],
        'layer0.opacity': 1.0,
    },

    // BUTTON CONTROL
    {
        class: 'button_control',
        content_margin: [10, 10],
        min_size: [80, 26],
        'layer0.tint': 'var(buttonBackground)',
        'layer0.opacity': 1.0,
        'layer0.inner_margin': [5, 6],
        'layer1.draw_center': false,
        'layer1.inner_margin': 1,
        'layer1.tint': 'var(buttonBorder)',
        'layer1.opacity': 1.0,
    },
    {
        class: 'button_control',
        attributes: ['hover'],
        'layer0.tint': 'var(buttonHoverBackground)',
    },
    {
        class: 'button_control',
        attributes: ['pressed'],
        'layer0.tint': 'var(buttonPressedBackground)',
    },

    // CLOSE BUTTON
    {
        class: 'close_button',
        'layer0.texture': 'GitHub Theme/textures/actions/close.png',
        'layer0.tint': 'var(accent)',
        'layer0.opacity': 1,
        'layer0.inner_margin': [3, 3],
        content_margin: [8, 8],
    },
    {
        class: 'close_button',
        parents: [
            {
                class: 'tree_row',
                attributes: ['hover'],
            },
        ],
        'layer0.opacity': 1,
    },

    // ICON BUTTON GROUP
    {
        class: 'icon_button_group',
        spacing: 0,
    },
    // ICON BUTTON CONTROL
    {
        class: 'icon_button_control',
        'layer0.tint': 'var(buttonBackground)',
        'layer0.inner_margin': [5, 6],
        'layer0.opacity': 1.0,
        'layer1.draw_center': false,
        'layer1.inner_margin': [0, 1, 0, 1],
        'layer1.tint': 'var(buttonBorder)',
        'layer1.opacity': 1.0,
        content_margin: [12, 8],
    },
    {
        class: 'icon_button_control',
        attributes: ['left'],
        'layer1.inner_margin': [1, 1, 0, 1],
    },
    {
        class: 'icon_button_control',
        attributes: ['right'],
        'layer1.inner_margin': [0, 1, 1, 1],
    },
    {
        class: 'icon_button_control',
        attributes: ['left', 'right'],
        'layer1.inner_margin': 1,
    },
    {
        class: 'icon_button_control',
        attributes: ['hover'],
        'layer0.tint': 'var(buttonHoverBackground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_button_control',
        attributes: ['pressed'],
        'layer0.tint': 'var(buttonPressedBackground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_button_control',
        attributes: ['selected'],
        'layer0.tint': 'var(buttonSelecteddBackground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_regex',
        'layer0.texture': 'GitHub Theme/textures/find/regex.png',
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(buttonIconForeground)',
        content_margin: [8, 8],
    },
    {
        class: 'icon_regex',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
        'layer0.tint': 'var(buttonIconForeground)',
    },
    {
        class: 'icon_regex',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_regex',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_case',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/case-sensitive.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_case',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_case',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_case',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_whole_word',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/whole-word.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_whole_word',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_whole_word',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_whole_word',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_wrap',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/wrap.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_wrap',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_wrap',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_wrap',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_in_selection',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/selection.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_in_selection',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_in_selection',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_in_selection',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_highlight',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/matches.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_highlight',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_highlight',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_highlight',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_preserve_case',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/preserve-case.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_preserve_case',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_preserve_case',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_preserve_case',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_context',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/context.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_context',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_context',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_context',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_buffer',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/buffer.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_buffer',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_buffer',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_buffer',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_gitignore',
        content_margin: [8, 8],
        'layer0.texture': 'GitHub Theme/textures/find/gitignore.png',
        'layer0.tint': 'var(buttonIconForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_gitignore',
        parents: [{ class: 'icon_button_control', attributes: ['hover'] }],
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_gitignore',
        parents: [{ class: 'icon_button_control', attributes: ['pressed'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'icon_use_gitignore',
        parents: [{ class: 'icon_button_control', attributes: ['selected'] }],
        'layer0.tint': 'var(buttonIconSelecteddForeground)',
        'layer0.opacity': 1.0,
    },

    {
        class: 'vcs_status_badge',
        parents: [{ class: 'file_system_entry', attributes: ['untracked'] }],
        'layer0.texture': 'GitHub Theme/textures/vcs/diff_untracked.png',
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
    //  SIDEBAR BUTTON
    {
        class: 'sidebar_button_control',
        settings: ['show_sidebar_button'],
        'layer0.tint': 'var(statusBarForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'sidebar_button_control',
        settings: ['!show_sidebar_button'],
        content_margin: 0,
        'layer0.tint': 'var(statusBarForeground)',
        'layer0.opacity': 0.0,
    },
    {
        class: 'sidebar_button_control',
        settings: ['show_sidebar_button'],
        attributes: ['hover'],
        'layer0.tint': 'var(statusBarHoverForeground)',
        'layer0.opacity': 1.0,
    },
    {
        class: 'status_button',
        content_margin: [10, 0],
        min_size: [40, 22],
    },

    // VCS STATUS

    {
        class: 'vcs_status',
        spacing: 4,
    },
    // VCS ICON
    {
        class: 'vcs_branch_icon',
        'layer0.texture': 'GitHub Theme/textures/vcs/branch.png',
        'layer0.tint': 'var(statusBarForeground)',
        content_margin: 6,
    },
    {
        class: 'vcs_changes_annotation',
        border_color: 'var(vcsAnnotationBorder)',
        color: 'var(statusBarForeground)',
        content_margin: [3, 1],
    },
];

export function getTheme(theme: Primer): ThemeSetting {
    return {
        extends: 'Adaptive.sublime-theme',
        variables: variables(theme),
        rules,
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
        } catch (e) {
            console.error(e);
        }
    });
}
