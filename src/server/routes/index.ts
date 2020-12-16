import { Router } from 'express';
//import apiRouter from './api';
import authRouter from './auth';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import blogstagsRouter from './blogtags';
import tagsRouter from './tags';

const router = Router();

//router.use('/api', apiRouter);
router.use('/auth', authRouter);
router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter);
router.use('/blogtags', blogstagsRouter);
router.use('/tags', tagsRouter);

export default router;