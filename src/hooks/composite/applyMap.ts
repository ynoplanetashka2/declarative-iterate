import { OperationName, applyOperation } from '../primitive/applyOperation'

export function applyMap<T>(fn: (arg: any) => T): T {
	return applyOperation(OperationName.map, fn)
}