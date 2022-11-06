export enum OperationName {
	filter,
	map,
	reduce,
	scopeStart,
	scopeEnd,
}

declare function applyOperation<T>(opName: OperationName.map, arg: (arg: any) => T): T
declare function applyOperation(opName: OperationName.filter, arg: (arg: any) => boolean): void
declare function applyOperation<T>(opName: OperationName.reduce, arg: (acc: T, item: any) => T, defaultVal: T): T
declare function applyOperation(opName: OperationName.scopeStart): void
declare function applyOperation(opName: OperationName.scopeEnd): void
declare function beforeApplyOperation(): void
declare function afterApplyOperation(): void

export { applyOperation, beforeApplyOperation, afterApplyOperation }