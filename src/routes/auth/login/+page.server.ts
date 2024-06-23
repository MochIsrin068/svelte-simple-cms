import type { PageServerLoad } from "../../$types";

export const load = (({params, request}) => {
    return {
        currentUrl: request.url
    }
}) satisfies PageServerLoad