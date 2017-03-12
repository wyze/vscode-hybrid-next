# Hybrid Next

[![Version][version-image]][marketplace-url]
[![Installs][installs-image]][marketplace-url]
[![Rating][rating-image]][marketplace-url]

> A port of the [Hybrid Next](https://github.com/kaicataldo/hybrid-next-syntax) theme to VS Code.

## Installation

### Extension Marketplace

Launch VS Code Quick Open (⌘+P), paste the following command, and press <kbd>enter</kbd>.

`ext install theme-hybrid-next`

### Download `.vsix` From Releases

Go to the [latest release](https://github.com/wyze/vscode-hybrid-next/releases/latest) and download the `.vsix` file.

Use the VS Code Command Palette (⇧⌘P) and run `Extensions: Install from VSIX...`.

### Clone Repository

Change to your VS Code extensions directory:

```sh
# Windows
$ cd %USERPROFILE%\.vscode\extensions

# Linux & macOS
$ cd ~/.vscode/extensions/
```

Clone this repository as `wyze.theme-hybrid-next`:

```sh
$ git clone https://github.com/wyze/vscode-hybrid-next.git wyze.theme-hybrid-next
```

## Screenshots

> Screenshots are using [Fira Code](https://github.com/tonsky/FiraCode) font.

### Base

![JS](.github/media/js.png)
![HTML](.github/media/html.png)

### Gray Background

![Gray Background JS](.github/media/graybg-js.png)
![Gray Background HTML](.github/media/graybg-html.png)

## Change Log

> [Full Change Log](changelog.md)

### [v1.2.0](https://github.com/wyze/vscode-hybrid-next/releases/tag/v1.2.0) (2017-03-09)

* [[`efd7f4cbc2`](https://github.com/wyze/vscode-hybrid-next/commit/efd7f4cbc2)] - Add color to comma in JS (Neil Kistner)
* [[`47fcb67ead`](https://github.com/wyze/vscode-hybrid-next/commit/47fcb67ead)] - Add color to function parameters (Neil Kistner)
* [[`4c2287a83f`](https://github.com/wyze/vscode-hybrid-next/commit/4c2287a83f)] - Automate release process a bit (Neil Kistner)
* [[`6ad2d4c119`](https://github.com/wyze/vscode-hybrid-next/commit/6ad2d4c119)] - Remove some screenshots (Neil Kistner)
* [[`0890c2c7b4`](https://github.com/wyze/vscode-hybrid-next/commit/0890c2c7b4)] - Change color for YAML tag (Neil Kistner)
* [[`e8f3e74180`](https://github.com/wyze/vscode-hybrid-next/commit/e8f3e74180)] - Add support for JSON files (Neil Kistner)
* [[`4745729304`](https://github.com/wyze/vscode-hybrid-next/commit/4745729304)] - Remove temp fix since it was patched by VSCode (Neil Kistner)

## Build

This will generate the themes to the `themes/` folder.

```sh
$ git clone https://github.com/wyze/vscode-hybrid-next.git
$ cd vscode-hybrid-next
$ npm install
$ npm run build
```

## Credits

Thank you to [Kai Cataldo](//github.com/kaicataldo) for making the Hybrid Next theme for Atom.

## License

MIT © [Neil Kistner](https://neilkistner.com)

[version-image]: http://vsmarketplacebadge.apphb.com/version/wyze.theme-hybrid-next.svg
[installs-image]: http://vsmarketplacebadge.apphb.com/installs/wyze.theme-hybrid-next.svg
[rating-image]: http://vsmarketplacebadge.apphb.com/rating-short/wyze.theme-hybrid-next.svg

[marketplace-url]: https://marketplace.visualstudio.com/items/wyze.theme-hybrid-next
