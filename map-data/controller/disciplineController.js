import { pool } from '../config/database.js';
import { sendResponse } from '../config/sendResponse.js';

/**
 * @api {get} /discipline/all 获取所有学科信息
 * @apiName GetDisciplineList
 * @apiGroup Discipline
 * @apiSuccess {Object} rows 学科信息对象.
 * @apiSuccess {String} rows.discipline_name 学科名称.
 * @apiSuccess {String} rows.discipline_description 学科描述.
 *  
 */
export const getDisciplineList = async (req, res, next) => {
    try {
      const { rows } = await pool.query('SELECT * FROM discipline');
      sendResponse(res, rows);
    } catch (error) {
      next(error);
    }
  };