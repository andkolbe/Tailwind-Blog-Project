import { Query } from '../';
import { CannedResponse, TTags } from '../models';

const all = () => Query<TTags[]>('');

const insert = (newTag: any) => Query<CannedResponse>('INSERT INTO tags SET ?', [newTag]);


export default {
    all,
    insert
}