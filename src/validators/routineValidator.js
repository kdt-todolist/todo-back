const { body, param } = require('express-validator');
const { validateRequest } = require('./validateRequest');

const createRoutineValidation = [
    body('taskId')
        .notEmpty()
        .withMessage('리스트 ID를 입력해주세요.')
        .isInt()
        .toInt
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    body('week')
        .notEmpty()
        .withMessage('요일을 선택해주세요')
        .isArray()
        .toArray()
        .withMessage('week의 형태가 배열의 형태가 아닙니다'),
    body('resetTime')
        .notEmpty()
        .trim()
        .withMessage('resetTime을 입력해주세요')
        .isString()
        .toString()
        .withMessage('resetTime을 String 형식으로 보내주세요'),
    validateRequest
]

const updateRoutineValidation = [
    param('id')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    body('week')
        .notEmpty()
        .withMessage('요일을 선택해주세요')
        .isArray()
        .toArray()
        .withMessage('week의 형태가 배열의 형태가 아닙니다'),
    body('resetTime')
        .notEmpty()
        .trim()
        .withMessage('resetTime을 입력해주세요')
        .isString()
        .toString()
        .withMessage('resetTime을 String 형식으로 보내주세요'),
    validateRequest
]
const deleteRoutineValidation = [
    param('id')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    body('taskId')
        .notEmpty()
        .withMessage('taskID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('taskID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]

const getRoutineValidation = [
    param('listId')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]


module.exports = {
    createRoutineValidation,
    updateRoutineValidation,
    deleteRoutineValidation,
    getRoutineValidation
}
