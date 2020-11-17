# GitHub Sublime Text theme

![GitHub Sublime Text theme](./assets/screen.png)

> Project inspired on [GitHub VS Code theme](https://github.com/primer/github-vscode-theme).

## Install

**Package Control:**

1. Open `Command Palette` using menu item `Tools → Command Palette` or `CMD/CTRL` + `SHIFT` +`P`.
2. Choose `Package Control: Install Package`.
3. Type `GitHub Theme` and press `ENTER`.

**Manually:**

1. Download latest release and unzip. it into your Packages folder.
2. Go to `Sublime Text → Preferences → Browse Packages`.
3. Move folder to inside and rename the folder to `GitHub Theme`.

## Activate the Theme

**You can active this theme from:**

1. Command Palette `Tools → Command Palette` or `CMD/CTRL` + `SHIFT` + `P`
2. Typing `UI: Select Theme` next find for `GitHub Theme` and press `ENTER`
3. Same process for scheme go to the Command Palette.
4. Typing `UI: Select Color Scheme` choose you favorite scheme and press `ENTER`

Manually you can go to (**Preferences → Settings - User**) and paste the following code:

```json
{
    "color_scheme": "Packages/GitHub Theme/schemes/GitHub Light.sublime-color-scheme",
    "theme": "GitHub-Theme.sublime-theme"
}
```

## Theme Settings
This theme provide a visual configuration tool that allow you to configure the theme by activating the available options from an inline pop-up.

Just click in `Sublime Text` → `Preferences` → `Packages Settings` → `GitHub Theme` → `Edit Settings`.
You can also open the settings from the Command Palette by searching `GitHub Theme: Edit Settings`.

```json
{
    // show tab navigation buttons left and right
    "show_tab_navigation": false
}
```

## Recommended Settings

To enjoy a better experience of using the GitHub Theme in your Sublime Text, please check the following settings.

```json
{
    "font_face": "Fira Code",
    "highlight_line": true,
    "font_options": ["gray_antialias", "subpixel_antialias"], 
    "indent_guide_options": ["draw_normal", "draw_active"], 
    "margin": 20,
    "line_padding_bottom": 7,
    "line_padding_top": 7,
    "show_tab_navigation": "false",
    "show_sidebar_disclosure": "false"
}
```

## What’s Next

-   Support for more language syntax.
-   Support for [A File Icons](https://github.com/SublimeText/AFileIcon).
