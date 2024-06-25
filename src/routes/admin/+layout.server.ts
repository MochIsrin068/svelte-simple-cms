import type { LayoutServerLoad } from "../$types";

export const load = (async({request}) => {
    const currentUrl = request.url

    const isActivePageKey = currentUrl.includes("blog") ? "blog" : currentUrl.includes("category") ? "category" : currentUrl.includes("user-access") ? "user-access" : "home"

    return {
        currentUrl,
        isActivePageKey
    }
}) satisfies LayoutServerLoad