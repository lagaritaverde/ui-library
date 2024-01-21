import { it, describe, expect } from 'vitest'

import { helloTo } from '../../components/helloTo'

describe('test', () => {
  it('returns correctly', () => {
    expect(helloTo()).toBe('hello to you!!')
  })
})
