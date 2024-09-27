import { fakerApiClient } from "@/config/httpClients";

export const getUsers = async ()=> {
    try {
        // Add Zod Schemas...
        return await fakerApiClient('users').json();
    } catch (error) {
        console.log('error from getUsers', error)
    }
}