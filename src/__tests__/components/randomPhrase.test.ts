import { it, describe, expect } from 'vitest'

import { randomPhrase } from '../../components/randomPhrase'

describe('test', () => {
  it('returns correctly', () => {
    expect(randomPhrase()).toBe('Hello there, capitain!')
  })
})
