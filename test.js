import { actual } from './index.js'
import assert from 'node:assert/strict';

const expected = `import React from "react";export const TestFn = () => "Transpiled";
`

console.table({'Actual': actual.code, 'Expected': expected})

assert(actual.code == expected)
