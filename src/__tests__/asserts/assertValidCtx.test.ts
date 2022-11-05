import { describe, it } from '@jest/globals'

import { assertValidContext } from '../../asserts/assertValid'
import { type Context } from '../../globalContext'

describe('assertValidContext', () => {
	it('should assert if global context is null', () => {
		const ctx = null
		const wrap = () => assertValidContext(ctx)
		expect(wrap).toThrow()
	})
	it(`shouldn't assert if global context is object`, () => {
		const ctx = {} as Context
		const wrap = () => assertValidContext(ctx)
		expect(wrap).not.toThrow()
	})
})