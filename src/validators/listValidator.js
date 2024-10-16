const { body, param } = require('express-validator');
const { validateRequest } = require('./validateRequest');

const createListValidation = [
    body('title')
        .notEmpty()
        .withMessage('리스트 이름을 입력해주세요.')
        .isString()
        .trim()
        .isLength({ max: 15 })
        .withMessage('리스트 이름은 최대 15자까지 입력할 수 있습니다.'),
    validateRequest
]

const deleteListValidation = [
    param('id')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    validateRequest
]

const updateListValidation = [
    param('id')
        .notEmpty()
        .withMessage('ID 값을 입력해주세요')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    body('title')
        .notEmpty()
        .withMessage('리스트 이름을 입력해주세요.')
        .isString()
        .trim()
        .isLength({ max: 15 })
        .withMessage('리스트 이름은 최대 15자까지 가능합니다.'),
    body('isVisible')
        .isBoolean()
        .toBoolean()
        .withMessage('올바른 표시 여부 형식이 아닙니다.'),
    validateRequest
]

const createBulkListValidation = [
    body('lists')
        .notEmpty()
        .withMessage('lists를 입력해주세요')
        .isArray()
        .trim()
        .withMessage('lists의 형식이 배열 형식이 아닙니다.'),

    validateRequest
]
module.exports = {
    createListValidation,
    deleteListValidation,
    updateListValidation,
    createBulkListValidation
}
