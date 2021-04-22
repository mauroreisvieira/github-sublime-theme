# GitHub Sublime Text theme

**Project inspired on [GitHub VS Code theme](https://github.com/primer/github-vscode-theme).**

![GitHub Sublime Text theme](./assets/screen.png)

<p align="center">
    <a href="https://github.com/mauroreisvieira/github-sublime-theme/releases" title="GitHub tag">
        <img src="https://img.shields.io/github/release/mauroreisvieira/github-sublime-theme.svg?style=for-the-badge"/>
    </a>
    <a href="" title="Sublime Version">
        <img src="https://img.shields.io/badge/built_for_sublimetext-3179-e79330?style=for-the-badge&logo=sublime-text"/>
    </a>
    <a href="https://packagecontrol.io/packages/GitHub%20Theme" title="Package Control">
        <img src="https://img.shields.io/packagecontrol/dt/GitHub%20Theme?style=for-the-badge"/>
    </a>
</p>

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
    "enable_tab_scrolling": false,
    "show_sidebar_disclosure": false
}
```

## What’s Next

-   Support for more language syntax.
-   Support for [A File Icons](https://github.com/SublimeText/AFileIcon).
