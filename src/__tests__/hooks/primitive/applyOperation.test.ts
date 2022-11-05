import { describe, it, jest } from '@jest/globals'

import { CONTEXT_REF, createGlobalContext, LifecycleStage } from '../../../globalContext'
import { applyOperation, OperationName, beforeApplyOperation, afterApplyOperation } from '../../../hooks/primitive/applyOperation'

jest.mock('../../../globalContext', () => {
	const originalModule = jest.requireActual('../../../globalContext') as object
	return {
		...originalModule,
		CONTEXT_REF: { ref: null }
	}
})

function assertNotNull<T>(arg: T): asserts arg is NonNullable<T> {
	if (!arg) {
		throw new TypeError(`argument is null`)
	}
}

describe('applyPoperation module', () => {
	beforeEach(() => {
		CONTEXT_REF.ref = createGlobalContext()
	})
	afterEach(() => {
		CONTEXT_REF.ref = null
	})
	describe('applyOperation', () => {
		it('should add operations to context when called in setup lifecylcle stage', () => {
			assertNotNull(CONTEXT_REF.ref)
			CONTEXT_REF.ref.lifecycleStage = LifecycleStage.setup
			const opList: OperationName[] = []
			for (const opName in OperationName) {
				const op = OperationName[opName] as unknown as OperationName
				opList.push(op)
				applyOperation(op, () => 0)
			}
			expect(CONTEXT_REF.ref.operations).toBe(opList)
		})
		it('should return operations results when called in complete lifecylcle stage', () => {
			assertNotNull(CONTEXT_REF.ref)
			CONTEXT_REF.ref.lifecycleStage = LifecycleStage.complete
			for (let i = 0; i < 3; ++i) {
				applyOperation(OperationName.map, () => 0)
			}
			CONTEXT_REF.ref.operationsResults = ['a', 3, {}]
			const result: unknown[] = []
			for (let i = 0; i < 3; ++i) {
				result[i] = applyOperation(OperationName.map, () => 0)
			}
			expect(CONTEXT_REF.ref.operationsResults).toBe(result)
		})
		it('should throw if context is malformed', () => {
			CONTEXT_REF.ref = null
			const wrap = () => applyOperation(OperationName.map, () => 0)
			expect(wrap).toThrow()
		})
	})
	describe('beforeApplyOperation', () => {
		it('should', () => void 0)
	})
})