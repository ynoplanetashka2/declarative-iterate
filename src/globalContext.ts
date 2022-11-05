export interface Context {
	operations: any[],
	operationsResults: any[],
	lifecycleStage: LifecycleStage,
}

export function createGlobalContext(): Context {
	return {
		operations: [],
		operationsResults: [],
		lifecycleStage: LifecycleStage.setup
	}
}
export const CONTEXT_REF: {
		ref: Context | null
} = {
	ref: null
}

export enum LifecycleStage {
	setup,
	propagateError,
	complete,
}