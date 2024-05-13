import express from 'express';
import { getUniversityList } from '../controller/universityController.js';
import { getUniversityListByType } from '../controller/universityController.js';
import { getUniversityByCode } from '../controller/universityController.js';
import { getUniversityInfoByProvince } from '../controller/universityController.js';
import { getProvinceList } from '../controller/universityController.js';
import { getUniversityByName } from '../controller/universityController.js';
import { getUniversityListByProvince } from '../controller/universityController.js';
import { getDoubleFirstClassUniversity } from '../controller/universityController.js';
import { getUniversityRank } from '../controller/universityController.js';
const router = express.Router();

// 获取所有大学信息
router.get('/all', getUniversityList);
// 获取指定类型的大学列表
router.get('/type/:type', getUniversityListByType);
// 根据大学编码获取大学信息
router.get('/code/:university_code', getUniversityByCode);
// 获取所有省份列表
router.get('/provinces', getProvinceList);
// 根据省份获取大学信息
router.get('/province_detail/:province', getUniversityInfoByProvince);
// 根据大学名称获取大学信息
router.get('/name/:university_name', getUniversityByName);
// 根据省份获取大学列表
router.get('/province/:province', getUniversityListByProvince);
// 获取双一流大学列表
router.get('/double_first_class', getDoubleFirstClassUniversity);
// 获取大学排名信息
router.get('/rank/:university_name', getUniversityRank);
export default router;