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
        .isInt()
        .toInt()
        .withMessage('유효한 리스트 ID가 아닙니다.'),
    validateRequest
]

const updateListTitleValidation = [
    param('id')
        .isInt()
        .toInt()
        .withMessage('유효한 리스트 ID가 아닙니다.'),
    body('title')
        .notEmpty()
        .withMessage('리스트 이름을 입력해주세요.')
        .isString()
        .trim()
        .isLength({ max: 15 })
        .withMessage('리스트 이름은 최대 15자까지 가능합니다.'),
    validateRequest
]

const updateListIsVisibleValidation = [
    param('id')
        .isInt()
        .toInt()
        .withMessage('유효한 리스트 ID가 아닙니다.'),
    body('isVisible')
        .isBoolean()
        .toBoolean()
        .withMessage('올바른 표시 여부 형식이 아닙니다.'),
    validateRequest
]

module.exports = {
    createListValidation,
    deleteListValidation,
    updateListTitleValidation,
    updateListIsVisibleValidation
}
