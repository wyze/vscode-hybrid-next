import { base, grayBackground } from './themes'
import { writeFileSync } from 'fs'
import createColors from './createColors'
import createTokenColors from './createTokenColors'

const create = (name: string, filename: string, theme: typeof base) => {
  const colors = createColors(theme)
  const tokenColors = createTokenColors(theme)
  const output = {
    name,
    type: 'dark',
    colors,
    tokenColors,
  }

  writeFileSync(`themes/${filename}.json`, JSON.stringify(output, null, 2))
}

create('Hybrid Next', 'hybrid-next', base)
create('Hybrid Next (Gray Background)', 'hybrid-next-graybg', grayBackground)
