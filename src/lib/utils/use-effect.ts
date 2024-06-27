import { afterUpdate, onDestroy } from 'svelte';

export function useEffect(cb: Function, deps: Function) {
	let cleanup: Function;
	
	function apply() {
		if (cleanup) cleanup();
		cleanup = cb();
	}
	
	if (deps) {
		let values: unknown[] = [];
		afterUpdate(() => {
			const new_values = deps();
			if (new_values.some((value: unknown, i: number) => value !== values[i])) {
				apply();
				values = new_values;
			}
		});
	} else {
		// no deps = always run
		afterUpdate(apply);
	}
	
	onDestroy(() => {
		if (cleanup) cleanup();
	});
}