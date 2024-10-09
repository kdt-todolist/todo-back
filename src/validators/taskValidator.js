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
    body('list_id')
        .isInt()
        .toInt()
        .withMessage('리스트 ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]

const deleteTaskValidation = [
    param('id')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]

const updateTaskContentValidation = [
    param('id')
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
    validateRequest
]

const updateTaskDoneValidation = [
    param('id')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    body('done')
        .isBoolean()
        .toBoolean()
        .withMessage('올바른 표시 여부 형식이 아닙니다.'),
    validateRequest
]

module.exports = {
    createTaskValidation,
    deleteTaskValidation,
    updateTaskContentValidation,
    updateTaskDoneValidation
}