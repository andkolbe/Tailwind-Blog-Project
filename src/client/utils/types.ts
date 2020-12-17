export interface IAuthor {
    id: number;
    name: string;
}

export interface ITag {
    id: number;
    name: string;
    created_at: Date;
}

export interface IBlog {
    id: number;
    title: string;
    content: string;
    authorid: number;
    created_at: Date;
}