//import SymbolObservable from 'symbol-observable'

import { CONTEXT_REF, createGlobalContext, type Context } from "./globalContext"
import { resolveItem } from './resolveItem'

type MarkdownFn = () => (void | (() => void))
type iteratorLikeT<T> =
	| Iterable<T>

export function invokeFnWithHooks(fn: MarkdownFn, ctx: Context) {
	CONTEXT_REF.ref = ctx
	const callback = fn()
	CONTEXT_REF.ref = null
	return callback
}

function iterateInner<T>(iteratorLike: iteratorLikeT<T>, fn: MarkdownFn) {
	const ctx = createGlobalContext()
	invokeFnWithHooks(fn, ctx)
	const operators = ctx.operators
	for (const item of iteratorLike) {
		resolveItem(item, operators)
	}
	const cb = invokeFnWithHooks(fn, ctx)
	if (typeof cb === 'function') {
		cb()
	}
}

export function iterate<T>(iteratorLike: iteratorLikeT<T>, fn: MarkdownFn) {
	iterateInner(iteratorLike, fn)
}