import { writable } from 'svelte/store'

export function storable(data) {
    const store = writable(data);
    const { subscribe, set, update } = store;
    const isBrowser = typeof window !== 'undefined';

    isBrowser &&
        localStorage.storable &&
        set(JSON.parse(localStorage.storable));

    return {
        subscribe,
        set: n => {
            isBrowser && (localStorage.storable = JSON.stringify(n));
            set(n);
        },
        update: (key, value) => {
            const updatedStore = {
                [`${key}`]: value
            }

            isBrowser && (localStorage.storable = JSON.stringify(updatedStore));
            // set(updatedStore);
            update(() => updatedStore)
        }
    };
}