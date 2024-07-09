
export const actions = {
    draft: async (event: any) => {
        const data = await event.request.formData()
        data.append("createdAt", new Date().toISOString())
        data.append("updatedAt", new Date().toISOString())

        // Example respoonse send into frontend throught export let form;
        let dataUser = {} as { [key: string]: string };
        data.forEach((value: string, key: string) => dataUser[`${key}`] = value);

        return {
            dataUser
        }
    },
    publish: async (event: any) => {
        const data = await event.request.formData()
        data.append("createdAt", new Date().toISOString())
        data.append("updatedAt", new Date().toISOString())
        console.log("publish:", data)
    }
}