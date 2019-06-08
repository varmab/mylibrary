
export interface Author{
    name:string;
    age:number;
}

export interface Book{
    id:number;
    title:string;
    published:number | null;
    instock:boolean;
    authors?:Author[] | null;
}