const { body, param } = require('express-validator');
const { validateRequest } = require('./validateRequest');

const createTaskValidation = [
    body('content')
        .notEmpty()
        .withMessage('Task 이름을 입력해주세요')
        .isString()
        .trim()
        .isLength({ max: 15 })
        .withMessage('Task 이름은0 최대 15자까지 입력할 수 있습니다.'),
    body('listId')
        .notEmpty()
        .withMessage('listID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('리스트 ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]

const deleteTaskValidation = [
    param('id')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]

const updateTaskValidation = [
    param('id')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    body('content')
        .notEmpty()
        .withMessage('Task 이름을 입력해주세요')
        .isString()
        .trim()
        .isLength({ max: 15 })
        .withMessage('Task 이름은 최대 15자까지 가능합니다.'),
    body('done')
        .isBoolean()
        .toBoolean()
        .withMessage('올바른 표시 여부 형식이 아닙니다.'),
    validateRequest
]

const getAllTaskValidation = [
    param('listId')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]
const createBulkTaskValidation = [
    body('listId')
        .notEmpty()
        .withMessage('listID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('리스트 ID 값을 숫자 형식으로 입력해주세요.'),
    body('tasks')
        .notEmpty()
        .withMessage('Tasks를 입력해주세요')
        .isArray()
        .withMessage('tasks의 형식이 배열 형식이 아닙니다.'),

    validateRequest
]
const resetTaskStatusValidation = [
    param('id')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]

module.exports = {
    createTaskValidation,
    deleteTaskValidation,
    updateTaskValidation,
    getAllTaskValidation,
    createBulkTaskValidation,
    resetTaskStatusValidation
}