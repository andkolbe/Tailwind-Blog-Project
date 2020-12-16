import { Query } from '../';
import type { CannedResponse, TBlogs } from '../models';

const all = () => Query<TBlogs[]>('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id = blogs.authorid ORDER BY blogs.created_at DESC');
const one = (id: number) => Query<TBlogs[]>('SELECT blogs.*, authors.name FROM blogs JOIN authors ON authors.id WHERE blogs.id = ?', [id]);
const insert = (newBlog: any) => Query<CannedResponse>('INSERT INTO blogs SET ?', [newBlog]);
const update = (id: number, editedBlog: any) => Query<CannedResponse>('UPDATE blogs SET ? WHERE id = ?', [editedBlog, id]);
const destroy = (id: number) => Query('DELETE FROM blogs WHERE id = ?', [id]);

export default {
    all,
    one,
    insert,
    update,
    destroy
}