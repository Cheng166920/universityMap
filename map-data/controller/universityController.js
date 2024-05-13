import { pool } from '../config/database.js';
import { sendResponse } from '../config/sendResponse.js';

/** 
* 文档生成命令
* apidoc -i controller/ -o apidoc/
* 文档查看地址
* http://localhost:3000/api-docs/index.html
 */


/**
 * @api {get} /university/all 获取所有大学信息，按大学名称首字母排序
 * @apiName GetUniversityList
 * @apiGroup University
 * 
 */
export const getUniversityList = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT * FROM university ORDER BY university_name');
    sendResponse(res, rows);
  } catch (error) {
    next(error);
  }
};

/**
 * @api {get} /university/type/:type 获取指定类型的大学列表
 * @apiName GetUniversityListByType
 * @apiGroup University
 *
 * @apiParam {String} type 大学类型.
 *
 * @apiSuccess {Object[]} rows 大学列表数组.
 * @apiSuccess {String} rows.university_code 大学编码.
 * @apiSuccess {String} rows.university_name 大学名称.
 * @apiSuccess {String} rows.type 大学类型.
 */

export const getUniversityListByType = async (req, res, next) => {
  try {
    const { type } = req.params;
    const { rows } = await pool.query('SELECT * FROM university WHERE type = $1', [type]);
    sendResponse(res,rows);
  } catch (error) {
    next(error);
  }
}

/**
 * @api {get} /university/code/:university_code 根据大学编码获取大学信息
 * @apiName GetUniversityByCode
 * @apiGroup University
 *
 * @apiParam {String} university_code 大学编码.
 *
 * @apiSuccess {Object} rows 大学信息对象.
 * @apiSuccess {String} rows.university_code 大学编码.
 * @apiSuccess {String} rows.university_name 大学名称.
 * @apiSuccess {String} rows.type 大学类型.
 */
export const getUniversityByCode = async (req, res, next) => {
  try {
    const { university_code } = req.params;
    const { rows } = await pool.query('SELECT * FROM university WHERE university_code = $1', [university_code]);
    sendResponse(res,rows);
  } catch (error) {
    next(error);
  }
}

// 根据大学名称获取大学信息
/**
 * @api {get} /university/name/:university_name 根据大学名称获取大学信息
 * @apiName GetUniversityByName
 * @apiGroup University
 *
 * @apiParam {String} university_name 大学名称.
 *
 * @apiSuccess {Object} rows 大学信息对象.
 * @apiSuccess {String} rows.university_code 大学编码.
 * @apiSuccess {String} rows.university_name 大学名称.
 * @apiSuccess {String} rows.type 大学类型.
 */
export const getUniversityByName = async (req, res, next) => {
  try {
    const { university_name } = req.params;
    const { rows } = await pool.query('SELECT * FROM university WHERE university_name = $1', [university_name]);
    sendResponse(res,rows);
  } catch (error) {
    next(error);
  }
}



/**
 * @api {get} /university/provinces 获取省份列表
 * @apiName GetProvinceList
 * @apiGroup University
 * 
 * @apiSuccess {String[]} provinces 省份列表.
 */
export const getProvinceList = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT province_name FROM province');
    const provinces = rows.map(row => row.province_name);
    sendResponse(res, provinces);
  } catch (error) {
    next(error);
  }
}


/**
 * 
 * @api {get} /university/province_detail/:province 根据省份获取大学信息
 * @apiName GetUniversityInfoByProvince
 * @apiGroup University
 *
 * @apiParam {String} province 省份.
 *
 * @apiSuccess {Object[]} rows 大学信息数组.
 * @apiSuccess {String} rows.university_code 大学编码.
 * @apiSuccess {String} rows.university_name 大学名称.
 * @apiSuccess {String} rows.province 省份.
 * @apiSuccess {String} rows.university_level 办学层次.
 */
export const getUniversityInfoByProvince = async (req, res, next) => {
  try {
    const { province } = req.params;
    const { rows } = await pool.query('SELECT * FROM university WHERE province = $1 AND university_level = $2', [province, '本科']);
    sendResponse(res,rows);
  } catch (error) {
    next(error);
  }
}

/**
 * @api {get} /university/province/:province 根据省份获取大学列表
 * @apiName GetUniversityListByProvince
 * @apiGroup University
 *
 * @apiParam {String} province 省份.
 *
 * @apiSuccess {String[]} universityNames 大学名称数组.
 */
export const getUniversityListByProvince = async (req, res, next) => {
  try {
    const { province } = req.params;
    const { rows } = await pool.query('SELECT university_name FROM university WHERE province = $1', [province]);
    const universityNames = rows.map(row => row.university_name);
    sendResponse(res, universityNames);
  } catch (error) {
    next(error);
  }
}


/**
 * @api {get} /university/double_first_class 获取所有双一流大学
 * @apiName GetDoubleFirstClassUniversity
 * @apiGroup University
 * 
 * @apiSuccess {Object[]} rows 大学信息数组.
 * @apiSuccess {String} rows.university_code 大学编码.
 * @apiSuccess {String} rows.university_name 大学名称.
 * @apiSuccess {String} rows.type 大学类型.
 * @apiSuccess {String} rows.construction_discipline 建设学科.
 */
export const getDoubleFirstClassUniversity = async (req, res, next) => {
  try {
    const { rows } = await pool.query('SELECT university_code, university_name, province, type, construction_discipline FROM university WHERE type IS NOT NULL');
    sendResponse(res, rows);
  } catch (error) {
    next(error);
  }
}


// 获取大学排名信息
/**
 * @api {get} /university/rank 获取大学排名信息
 * @apiName GetUniversityRank
 * @apiGroup University
 * 
 * @apiParam {String} university_name 大学名称.
 * 
 * @apiSuccess {Object[]} rows 大学排名信息数组.
 * @apiSuccess {Number} rows.times_2024 2024年泰晤士高等教育排名.
 * @apiSuccess {Number} rows.us_news 美国新闻与世界报道排名.
 * @apiSuccess {Number} rows.qs QS世界大学排名.
 */

export const getUniversityRank = async (req, res, next) => {
  try {
    const { university_name} = req.params;
    const { rows } = await pool.query('SELECT times_2024, us_news, qs FROM university_rank WHERE university_name = $1', [university_name]);
    sendResponse(res, rows);
  } catch (error) {
    next(error);
  }
}