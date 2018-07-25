export interface ShopItem {
    id: number;
    name: string;
    description: string;
    price: number;
    exampleImages: Array<string>;
    categorys: Array<string>;
    publishDate: Date;
    createDate: Date;
}
