import express from 'express';
import { getSubjectList, getSubjectByCode, getSubjectListByDiscipline, getSubjectListByDisciplineDetail } from '../controller/subjectController.js';

const router = express.Router();

// 获取所有专业信息
router.get('/all', getSubjectList);

// 根据专业编码获取专业信息
router.get('/code/:subject_code', getSubjectByCode);

// 根据学科获取专业列表
router.get('/discipline/:discipline', getSubjectListByDiscipline);

// 根据学科获取专业列表详细信息
router.get('/discipline_detail/:discipline', getSubjectListByDisciplineDetail);
export default router;