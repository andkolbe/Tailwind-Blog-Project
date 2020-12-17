import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:blogid', async (req, res) => {
    const blogid = Number(req.params.blogid);
    try {
        const blogtags = await db.blogtags.one(blogid);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks :(', error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { tagid, blogid } = req.body;
        await db.blogtags.insert(blogid, tagid);
        res.json({  msg: 'blogtag created' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks :(', error: error.message })
    }
})

router.put('/:blogid', async (req, res) => {
    try {
        const tags = req.body;
        const blogid = Number(req.params.blogid);
        await db.blogtags.update(tags.newId, tags.oldId, blogid)
        res.json({ msg: 'blogtag(s) updated' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks :(', error: error.message })
    }
})

router.delete('/:blogid', async (req, res) => {
    try {
        const blogid = Number(req.params.blogid);
        await db.blogtags.destroy(blogid);
        res.json({ msg: 'blogtag(s) obliterated' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks :(', error: error.message })
    }
})

export default router;