import { readFileSync } from 'fs'
import { transformSync } from 'esbuild'

const example = readFileSync('./example.ts')

export const actual = transformSync(example.toString(), { loader: 'ts', treeShaking: false })
