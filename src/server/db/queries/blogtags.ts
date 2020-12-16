import { Query } from '../';

const one = (blogid: number) => Query('', []);
const insert = () => Query('', []);
const update = () => Query('', []);
const destroy = () => Query('', []);

export default {
    one,
    insert,
    update,
    destroy
}