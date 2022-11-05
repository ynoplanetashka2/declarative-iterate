declare function applyOperation(opName: OperationName, arg: any): void
declare function beforeApplyOperation(): void
declare function afterApplyOperation(): void
enum OperationName {
	filter,
	map,
	reduce,
	scopeStart,
	scopeEnd,
}

export { applyOperation, beforeApplyOperation, afterApplyOperation, OperationName }