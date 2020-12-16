import { Router } from 'express';
import db from '../db';

const router = Router();

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [blog] = await db.blogs.one(id);
            res.json(blog);
        } else {
            const blogs = await db.blogs.all();
            res.json(blogs);
        }
        
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const blogDTO = req.body;
        blogDTO.authorid = 1;
        const result = await db.blogs.insert(blogDTO);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

router.put('/id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const blogDTO = req.body;
        const result = await db.blogs.update(id, blogDTO);
        res.json(result);
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        await db.blogs.destroy(id);
        res.json({ msg: 'You have been banished to the shadow realm!' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: 'my code sucks', error: error.message })
    }
})

export default router;