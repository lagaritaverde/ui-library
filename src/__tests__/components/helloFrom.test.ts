import { it, describe, expect } from 'vitest'

import { helloFrom } from '../../components/helloFrom'

describe('test', () => {
  it('returns correctly', () => {
    expect(helloFrom()).toBe('hello from La Garita Verde!')
  })
})
