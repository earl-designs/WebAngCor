export interface User {
    id: number;
    username: string;
    email: string;
    createDate: Date;
    preName: string;
    lastName: string;
    profilePicPath: string;

    wishlistCount: number;
    bougtItemsCount: number;
}
