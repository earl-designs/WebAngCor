export interface ShopItem {
    id: number;
    name: string;
    description: string;
    price: number;
    exampleImagesId: Array<number>;
    categorys: Array<string>;
    publishDate: Date;
    createDate: Date;
}
