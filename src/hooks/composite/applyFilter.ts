import { OperationName, applyOperation } from '../primitive/applyOperation'

export function applyFilter(fn: (arg: any) => boolean): void {
	return applyOperation(OperationName.filter, fn)
}