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

### [v2.0.1](https://github.com/wyze/vscode-hybrid-next/releases/tag/v2.0.1) (2017-03-12)



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

[marketplace-url]: https://vsm.li/wyze.theme-hybrid-next
