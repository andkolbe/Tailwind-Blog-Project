import { Query } from '../';
import { CannedResponse, TAuthors } from '../models';

const all = () => Query<TAuthors[]>('SELECT id, name FROM authors');

const insert = (newAuthor: any) => Query<CannedResponse>('INSERT INTO authors SET ?', newAuthor);

export default {
    all,
    insert
}