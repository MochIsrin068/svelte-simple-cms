import type { LayoutServerLoad } from "../$types";

export const load = (async({request}) => {
    return {
        currentUrl: request.url
    }
}) satisfies LayoutServerLoad