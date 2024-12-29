declare module '#auth-utils' {
    interface User {
        username: string,
        id: number
    }

    interface UserSession {
        loggedInAt: Date
    }
}

export { }