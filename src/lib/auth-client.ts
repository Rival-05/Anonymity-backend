import { createAuthClient } from "better-auth/client"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "http://localhost:5000/api/auth"
})

export const { signIn, signUp, useSession } = createAuthClient()