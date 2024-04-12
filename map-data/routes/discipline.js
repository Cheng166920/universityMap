import express from 'express';
import { getDisciplineList } from '../controller/disciplineController.js';

const router = express.Router();

// 获取所有学科信息
router.get('/all', getDisciplineList);

export default router;