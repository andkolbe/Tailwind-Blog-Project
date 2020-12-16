import * as mysql from 'mysql';
import config from '../config';
import authors from './queries/authors';
import blogs from './queries/blogs';
import blogtags from './queries/blogtags';
import tags from './queries/tags';

const pool = mysql.createPool(config.mysql);

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values); // debugging utility. Formats the query and values into one string
        // console.log(sql);

        pool.query(sql, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

export default {
    authors,
    blogs,
    blogtags,
    tags
}