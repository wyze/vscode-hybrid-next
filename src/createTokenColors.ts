import { base } from './themes'

const createTokenColors = ({
  ansiBlue,
  ansiBrightBlue,
  ansiBrightCyan,
  ansiBrightGreen,
  ansiBrightMagenta,
  ansiBrightRed,
  ansiBrightYellow,
  ansiMagenta,
  ansiRed,
  ansiYellow,
  background,
  brightGreen,
  comment,
  foreground,
  invalid,
}: typeof base) => [
  {
    name: 'Global settings',
    settings: {
      background,
      foreground,
    },
  },
  {
    name: 'Comment',
    scope: 'comment',
    settings: {
      foreground: comment,
      fontStyle: 'italic',
    },
  },
  {
    name: 'String',
    scope: 'string',
    settings: {
      foreground: ansiBrightGreen,
    },
  },
  {
    name: 'Number',
    scope: 'constant.numeric',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Language Constant',
    scope: 'constant.language',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Other Constant',
    scope: ['constant.character', 'constant.other'],
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Keyword',
    scope: ['keyword', 'storage.modifier.async'],
    settings: {
      foreground: ansiBrightMagenta,
    },
  },
  {
    name: 'Storage',
    scope: 'storage',
    settings: {
      foreground,
    },
  },
  {
    name: 'Parens',
    scope: 'meta.brace.round',
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Operators',
    scope: 'keyword.operator',
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Storage Type',
    scope: 'storage.type',
    settings: {
      foreground: ansiBrightMagenta,
    },
  },
  {
    name: 'Function Storage Type',
    scope: 'storage.type.function',
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Class Name',
    scope: 'entity.name.class',
    settings: {
      foreground: brightGreen,
    },
  },
  {
    name: 'Inherited Class',
    scope: ['entity.other.inherited-class', 'entity.name.type.module'],
    settings: {
      fontStyle: 'italic',
      foreground: ansiBlue,
    },
  },
  {
    name: 'Function Name',
    scope: 'entity.name.function',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    name: 'Function Argument',
    scope: 'variable.parameter',
    settings: {
      foreground: `${ansiYellow}bb`,
    },
  },
  {
    name: 'Tag Name',
    scope: 'entity.name.tag',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Tag Attribute',
    scope: 'entity.other.attribute-name',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    name: 'Library Function',
    scope: 'support.function',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    name: 'Library Constant',
    scope: 'support.constant',
    settings: {
      foreground: '',
    },
  },
  {
    name: 'Library Class',
    scope: 'support.class',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Library Variable (DOM)',
    scope: 'support.variable.dom',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Invalid',
    scope: 'invalid',
    settings: {
      fontStyle: '',
      foreground: invalid,
    },
  },
  {
    name: 'Invalid Deprecated',
    scope: 'invalid.deprecated',
    settings: {
      foreground: invalid,
    },
  },
  {
    name: 'Built-Ins [e.g. __dirname, process.env] (JS)',
    scope: ['support.variable.object', 'support.variable.property'],
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Punctuation [e.g. [, `, {] (JS)',
    scope: [
      'meta.brace.square',
      'punctuation.definition.block',
      'punctuation.definition.template-expression',
      'punctuation.definition.typeparameters',
      'punctuation.definition.string.template',
      'punctuation.section.embedded',
      'punctuation.definition.binding-pattern',
    ],
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Storage Modifier [e.g. class, extends, static] (JS)',
    scope: ['storage.modifier', 'storage.type.class.js'],
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'This (JS)',
    scope: 'variable.language.this.js',
    settings: {
      fontStyle: 'italic',
      foreground: comment,
    },
  },
  {
    name: 'Super (JS)',
    scope: 'variable.language.super.js',
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Arrow Function Parens (JS)',
    scope: 'punctuation.definition.parameters',
    settings: {
      foreground: ansiBrightGreen,
    },
  },
  {
    name: 'Flow (JS)',
    scope: ['meta.type.annotation', 'meta.return.type', 'meta.type.parameters'],
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'String Template (JS)',
    scope: [
      'string.template variable.other',
      'string.template punctuation.accessor',
    ],
    settings: {
      foreground: `${foreground}bb`,
    },
  },
  {
    name: 'Regex Punctuation (JS)',
    scope: 'string.regexp punctuation.definition',
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Regex Group/Back Reference (JS)',
    scope: [
      'string.regexp meta.group',
      'string.regexp keyword.other.back-reference',
    ],
    settings: {
      foreground: `${foreground}bb`,
    },
  },
  {
    name: 'Regex Assertions/Keywords (JS)',
    scope: ['string.regexp meta.assertion', 'string.regexp keyword.operator'],
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Regex Constant Other (JS)',
    scope: 'string.regexp constant.other',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    name: 'Regex Constant Character (JS)',
    scope: 'string.regexp constant.character',
    settings: {
      foreground: ansiBrightBlue,
    },
  },
  {
    name: 'Regex Anchor (JS)',
    scope: 'string.regexp keyword.control.anchor',
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Overall (Properties)',
    scope: 'source.properties',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Title (Properties)',
    scope: 'entity.name.section.group-title.properties',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    name: 'Separator (Properties/(S)CSS/JSON/YAML)',
    scope: [
      'punctuation.separator.key-value',
      'punctuation.separator.dictionary.key-value',
    ],
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Tag (YAML)',
    scope: 'entity.name.tag.yaml',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    name: 'Attribute Selector (S/CSS)',
    scope: ['meta.attribute-selector', 'punctuation.section.property-list'],
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Seperator Operator (S/CSS)',
    scope: 'punctuation.separator.operator',
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Punctuation Terminator (S/CSS/JS)',
    scope: ['punctuation.terminator.rule', 'punctuation.terminator.statement'],
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Selector (S/CSS)',
    scope: 'meta.selector',
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Keyword Unit (S/CSS)',
    scope: 'keyword.other.unit',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Property Value (S/CSS)',
    scope: 'meta.property-value',
    settings: {
      foreground: comment,
    },
  },
  {
    name: 'Important (S/CSS)',
    scope: 'keyword.other.important',
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Media Query (S/CSS)',
    scope: 'meta.at-rule.media',
    settings: {
      foreground: comment,
    },
  },
  {
    name: 'Media Query Selector (S/CSS)',
    scope: 'support.type.property-name.media',
    settings: {
      foreground: '',
    },
  },
  {
    name: 'Doctype (HTML)',
    scope: 'meta.tag.sgml.html',
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Key Value Seperator (HTML)',
    scope: [
      'meta.tag.inline.any.html',
      'meta.tag.structure.any.html',
      'meta.tag.block.any.html',
      'meta.tag.any.html',
    ],
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Open/Close Tag (HTML/JSX/XML)',
    scope: [
      'punctuation.definition.tag.html',
      'punctuation.definition.tag.begin',
      'punctuation.definition.tag.end',
      'punctuation.definition.tag.xml',
    ],
    settings: {
      foreground: comment,
    },
  },
  {
    name: 'Heading (Markdown)',
    scope: 'entity.name.section.markdown',
    settings: {
      foreground: ansiBrightMagenta,
    },
  },
  {
    name: 'Heading Punctuation (Markdown)',
    scope: 'punctuation.definition.heading.markdown',
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Punctuation (Markdown)',
    scope: [
      'punctuation.definition.heading.markdown',
      'beginning.punctuation.definition.quote.markdown',
      'punctuation.definition.markdown',
      'punctuation.definition.italic.markdown',
      'punctuation.definition.bold.markdown',
      'beginning.punctuation.definition.list.markdown',
      'punctuation.definition.raw.markdown',
    ],
    settings: {
      foreground: comment,
    },
  },
  {
    name: 'Punctuation Continued (Markdown)',
    scope: [
      'punctuation.definition.constant.markdown',
      'punctuation.definition.string.begin.markdown',
      'punctuation.definition.string.end.markdown',
      'punctuation.definition.metadata.markdown',
      'punctuation.definition.constant.begin.markdown',
      'punctuation.definition.constant.end.markdown',
    ],
    settings: {
      fontStyle: '',
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Fenced Code Block (Markdown)',
    scope: 'fenced_code.block.language',
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Italic (Markdown)',
    scope: 'markup.italic.markdown',
    settings: {
      fontStyle: 'italic',
      foreground: foreground,
    },
  },
  {
    name: 'Bold (Markdown)',
    scope: 'markup.bold.markdown',
    settings: {
      fontStyle: 'bold',
      foreground: foreground,
    },
  },
  {
    name: 'Link (Markdown)',
    scope: ['meta.link.inline.markdown', 'markup.underline.link.markdown'],
    settings: {
      fontStyle: '',
      foreground: ansiBlue,
    },
  },
  {
    name: 'Quote (Markdown)',
    scope: 'markup.quote.markdown',
    settings: {
      fontStyle: '',
      foreground: `${ansiBrightGreen}88`,
    },
  },
  {
    name: 'Unordered Lists (Markdown)',
    scope: 'markup.list.unnumbered.markdown',
    settings: {
      fontStyle: '',
      foreground: `${ansiBrightGreen}dd`,
    },
  },
  {
    name: 'Ordered Lists (Markdown)',
    scope: 'markup.list.numbered.markdown',
    settings: {
      fontStyle: '',
      foreground: `${ansiBrightGreen}aa`,
    },
  },
  {
    name: 'Constant (Markdown)',
    scope: 'constant.other.reference.link.markdown',
    settings: {
      fontStyle: '',
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Punctuation (XML)',
    scope: ['meta.tag.preprocessor.xml', 'meta.tag.xml'],
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Punctuation (JSON)',
    scope: 'punctuation.definition.dictionary',
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Quotes (JSON)',
    scope: [
      'punctuation.support.type.property-name',
      'punctuation.definition.string',
    ],
    settings: {
      foreground: comment,
    },
  },
  {
    name: 'Constants (JSON)',
    scope: 'support.type.property-name.json',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    name: 'Comma (JS/JSON)',
    scope: [
      'punctuation.separator.dictionary.pair.json',
      'punctuation.separator.parameter.js',
      'punctuation.separator.comma.js',
    ],
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Array (JSON)',
    scope: [
      'punctuation.definition.array.begin.json',
      'punctuation.definition.array.end.json',
    ],
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Variables (GraphQL)',
    scope: ['source.graphql meta.variables', 'source.graphql meta.arguments'],
    settings: {
      foreground: `${foreground}bb`,
    },
  },
  {
    name: 'Variable Arguments (GraphQL)',
    scope: 'source.graphql variable.arguments',
    settings: {
      foreground: `${ansiYellow}bb`,
    },
  },
  {
    name: 'Constants (GraphQL)',
    scope: 'source.graphql constant',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'Fragment Name (GraphQL)',
    scope: [
      'source.graphql variable.fragment',
      'source.graphql entity.name.fragment',
    ],
    settings: {
      foreground: ansiBrightBlue,
    },
  },
  {
    name: 'Directives (GraphQL)',
    scope: 'source.graphql entity.name.function.directive',
    settings: {
      foreground: `${ansiBrightGreen}aa`,
    },
  },
  {
    name: 'Types (GraphQL)',
    scope: 'source.graphql support.type',
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Braces (GraphQL)',
    scope: [
      'source.graphql punctuation.operation',
      'source.graphql meta.brace.round',
    ],
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Operator (GraphQL)',
    scope: 'source.graphql keyword.operator',
    settings: {
      foreground: ansiBrightYellow,
    },
  },
  {
    name: 'Punctuation (GraphQL)',
    scope: [
      'source.graphql punctuation.colon',
      'source.graphql punctuation.comma',
    ],
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Class/JSX Components (Reason)',
    scope: 'source.reason entity.name.class',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    name: 'JSX Tags (Reason)',
    scope: 'source.reason entity.name.tag.inline.any',
    settings: {
      foreground: `${ansiYellow}bb`,
    },
  },
  {
    name: 'JSX Props (Reason)',
    scope: 'source.reason markup.inserted constant.language',
    settings: {
      foreground: `${foreground}bb`,
    },
  },
  {
    name: 'Types (Reason)',
    scope: 'source.reason support.type string.regexp',
    settings: {
      foreground: ansiBrightRed,
    },
  },
  {
    name: 'Control (Reason)',
    scope: 'source.reason keyword.control',
    settings: {
      foreground: ansiBrightCyan,
    },
  },
  {
    name: 'Constant (Reason)',
    scope: 'source.reason constant.numeric',
    settings: {
      foreground: ansiBrightBlue,
    },
  },
  {
    name: 'C# String Interpolation',
    scope: [
      'meta.interpolation.cs variable.other.object.cs',
      'meta.interpolation.cs variable.other.object.property.cs',
      'meta.interpolation.cs variable.other.readwrite.cs',
    ],
    settings: {
      foreground: foreground,
    },
  },
  {
    scope: 'token.info-token',
    settings: {
      foreground: ansiBlue,
    },
  },
  {
    scope: 'token.warn-token',
    settings: {
      foreground: ansiYellow,
    },
  },
  {
    scope: 'token.error-token',
    settings: {
      foreground: ansiRed,
    },
  },
  {
    scope: 'token.debug-token',
    settings: {
      foreground: ansiMagenta,
    },
  },
]

export default createTokenColors
