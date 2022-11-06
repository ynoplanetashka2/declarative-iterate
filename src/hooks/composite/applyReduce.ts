import { OperationName, applyOperation } from '../primitive/applyOperation'

export function applyReduce<T>(fn: (T, any) => T, defaultVal: T): T {
	return applyOperation(OperationName.reduce, fn, defaultVal)
}