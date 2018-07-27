export interface User {
    id: number;
    username: string;
    email: string;
    createDate: Date;
    preName: string;
    lastName: string;
    picturePath: string;

    wishlistCount: number;
    bougtItemsCount: number;
}
