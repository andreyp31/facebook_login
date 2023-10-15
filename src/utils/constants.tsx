
/**
 * Interface for a user's profile information.
 * It defines the structure for the user's name, email, and profile picture URL.
 */
export interface Profile {
    name: string,
    email: string,
    picture: {
        data: {
            url: string
        }
    }
}



