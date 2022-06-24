export interface ICategory {
    id: number;
    name: string;
}

export class Category implements ICategory {
    id!: number;
    name!: string;
}

export class CategoryModal  {
    trivia_categories : Category[]=[];
}