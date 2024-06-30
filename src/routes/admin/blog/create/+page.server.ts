
export const actions = {
    draft: async (event: any) => {
        const data = await event.request.formData()
        data.append("createdAt", new Date().toISOString())
        data.append("updatedAt", new Date().toISOString())
        console.log("draft:", data)
    },
    publish: async (event: any) => {
        const data = await event.request.formData()
        data.append("createdAt", new Date().toISOString())
        data.append("updatedAt", new Date().toISOString())
        console.log("publish:", data)
    }
}