const palette = {
  ansiBlue: '#81a2be',
  ansiBrightBlack: '#7a7a7a',
  ansiBrightBlue: '#99dbff',
  ansiBrightCyan: '#8abeb7',
  ansiBrightGreen: '#b5bd68',
  ansiBrightMagenta: '#b294bb',
  ansiBrightRed: '#cc6666',
  ansiBrightYellow: '#f0c674',
  ansiCyan: '#5e8d87',
  ansiGreen: '#8c9440',
  ansiMagenta: '#85678f',
  ansiRed: '#a54242',
  ansiWhite: '#6c7a80',
  ansiYellow: '#de935f',
  brightGreen: '#a6e22e',
  lightGray: '#c5c8c6',
} as const

const base = {
  background: '#242e33',
  comment: '#6c7a80',
  foreground: palette.lightGray,
  invalid: '#f8f8f0',
  invisibles: `${palette.lightGray}26`,
  ...palette,
}

const grayBackground = {
  ...base,
  background: '#333333',
  comment: '#818181',
  invisibles: `${palette.lightGray}46`,
}

export { base, grayBackground }
