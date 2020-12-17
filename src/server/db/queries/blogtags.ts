import { Query } from '../';

const one = (blogid: number) => Query('CALL spBlogTags(?)', [blogid]);
const insert = (blogid: number, tagid: number) => Query('INSERT INTO blogtags (blogid, tagid) VALUE (?, ?)', [blogid, tagid]);
const update = (newTagid: number, oldTagid: number, blogid: number) => Query('UPDATE blogtags SET tagid = ? WHERE blogid = ? AND tagid = ?', [newTagid, oldTagid, blogid]);
const destroy = (blogid: number) => Query('DELETE FROM blogtags WHERE blogid = ?', [blogid]);

export default {
    one,
    insert,
    update,
    destroy
}