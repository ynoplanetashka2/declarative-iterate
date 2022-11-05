import { type Context } from "../globalContext"

export function assertValidContext(ctx: Context | null): asserts ctx is Context {
	if (!ctx) {
		throw new Error(`malformed hooks context`)
	}
}