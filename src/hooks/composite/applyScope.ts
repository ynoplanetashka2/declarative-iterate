import { OperationName, applyOperation } from '../primitive/applyOperation'

export function applyScope(fn: () => void): void {
	applyOperation(OperationName.scopeStart)
	fn()
	applyOperation(OperationName.scopeEnd)
}