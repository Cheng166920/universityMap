import express from 'express';
import { getUniversityList } from '../../controller/university/universityController.js';
const router = express.Router();

// 获取所有大学信息
router.get('/all', getUniversityList);
export default router;