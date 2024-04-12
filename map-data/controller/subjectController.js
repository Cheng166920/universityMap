import { pool } from '../config/database.js';
import { sendResponse } from '../config/sendResponse.js';

/**
 * @api {get} /subject/all 获取所有专业信息，按首字母排序
 * @apiName GetSubjectList
 * @apiGroup Subject
 * @apiSuccess {Object} rows 专业信息对象.
 * @apiSuccess {String} rows.subject_code 专业编码.
 * @apiSuccess {String} rows.subject_name 专业名称.
 * @apiSuccess {String} rows.discipline 所属学科.
 * @apiSuccess {String} rows.category 专业类别.
 * @apiSuccess {String} rows.high_school_relation 涉及高中学科.
 * @apiSuccess {String} rows.subject_description 专业描述.
 * 
 */
export const getSubjectList = async (req, res, next) => {
    try {
      const { rows } = await pool.query('SELECT * FROM subject ORDER BY subject_name');
      sendResponse(res, rows);
    } catch (error) {
      next(error);
    }
  };


/**
 * @api {get} /subject/code/:subject_code 根据专业编码获取专业信息
 * @apiName GetSubjectByCode
 * @apiGroup Subject
 * 
 * @apiParam {String} subject_code 专业编码.
 *  
 * @apiSuccess {Object} rows 专业信息对象.
 * @apiSuccess {String} rows.subject_code 专业编码.
 * @apiSuccess {String} rows.subject_name 专业名称.
 * @apiSuccess {String} rows.discipline 所属学科.
 * @apiSuccess {String} rows.category 专业类别.
 * @apiSuccess {String} rows.high_school_relation 涉及高中学科.
 * @apiSuccess {String} rows.subject_description 专业描述.
 * 
 */
export const getSubjectByCode = async (req, res, next) => {
    try {
      const { subject_code } = req.params;
      const { rows } = await pool.query('SELECT * FROM subject WHERE subject_code = $1', [subject_code]);
      sendResponse(res, rows);
    } catch (error) {
      next(error);
    }
  };


/**
 * @api {get} /subject/discipline/:discipline 获取指定学科的专业列表
 * @apiName GetSubjectListByDiscipline
 * @apiGroup Subject
 * 
 * @apiParam {String} discipline 学科名称.
 * 
 * @apiSuccess {String[]} subjectNames 专业名称数组.
 * 
 */
export const getSubjectListByDiscipline = async (req, res, next) => {
    try {
      const { discipline } = req.params;
      const { rows } = await pool.query('SELECT subject_name FROM subject WHERE discipline = $1', [discipline]);
      const subjectNames = rows.map(row => row.subject_name);
      sendResponse(res, subjectNames);
    } catch (error) {
      next(error);
    }
  };

  // 获取所有专业信息，查询两个表（subject_rank， subject）合并结果
export const getSubjectRankList = async (req, res, next) => {
    try {
      const { rows } = await pool.query('SELECT * FROM subject_rank');
      sendResponse(res, rows);
    } catch (error) {
      next(error);
    }
  };

  // 根据学科获取专业详细信息
  /**
   * @api {get} /subject/discipline_detail/:discipline 获取指定学科的专业详细信息
   * @apiName SubjectListByDisciplineDetail
   * @apiGroup Subject
   * 
   * @apiParam {String} discipline 学科名称.
   * 
   * @apiSuccess {Object[]} subjectList 专业信息数组.
   * @apiSuccess {String} subjectList.subject_code 专业编码.
   * @apiSuccess {String} subjectList.subject_name 专业名称.
   * @apiSuccess {String} subjectList.discipline 所属学科.
   * @apiSuccess {String} subjectList.category 专业类别.
   * @apiSuccess {String} subjectList.high_school_relation 涉及高中学科.
   * @apiSuccess {String} subjectList.subject_description 专业描述.
   * 
   */
  export const getSubjectListByDisciplineDetail = async (req, res, next) => {
    try {
      const { discipline } = req.params;
      const { rows } = await pool.query('SELECT * FROM subject WHERE discipline = $1', [discipline]);
      sendResponse(res, rows);
    } catch (error) {
      next(error);
    }
  }