import { it, describe, expect } from 'vitest'

import { helloNPM } from '../../components/helloNPM'

describe('test', () => {
  it('returns correctly', () => {
    expect(helloNPM()).toBe('hello NPM finally!')
  })
})
