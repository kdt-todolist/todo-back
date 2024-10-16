const { body, param } = require('express-validator');
const { validateRequest } = require('./validateRequest');

const createRoutineValidation = [
    body('taskId')
        .notEmpty()
        .withMessage('리스트 ID를 입력해주세요.')
        .isInt()
        .toInt()
        .withMessage('ID 값을 숫자 형식으로 입력해주세요.'),
    body('week')
        .notEmpty()
        .withMessage('요일을 선택해주세요')
        .custom(value => {
            if (typeof value !== 'object' || Array.isArray(value)) {
                throw new Error('week는 객체 형태여야 합니다');
            }

            const days = Object.values(value);
            const atLeastOneDaySelected = days.some(day => day === true);
            if (!atLeastOneDaySelected) {
                throw new Error('적어도 하나의 요일을 선택해주세요');
            }

            const allBooleans = days.every(day => typeof day === 'boolean');
            if (!allBooleans) {
                throw new Error('모든 요일의 값은 boolean이어야 합니다');
            }

            return true;
        }),
    body('resetTime')
        .notEmpty()
        .trim()
        .withMessage('resetTime을 입력해주세요')
        .isString()
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
        .custom(value => {
            if (typeof value !== 'object' || Array.isArray(value)) {
                throw new Error('week는 객체 형태여야 합니다');
            }

            const days = Object.values(value);
            const atLeastOneDaySelected = days.some(day => day === true);
            if (!atLeastOneDaySelected) {
                throw new Error('적어도 하나의 요일을 선택해주세요');
            }

            const allBooleans = days.every(day => typeof day === 'boolean');
            if (!allBooleans) {
                throw new Error('모든 요일의 값은 boolean이어야 합니다');
            }

            return true;
        }),
    body('resetTime')
        .notEmpty()
        .trim()
        .withMessage('resetTime을 입력해주세요')
        .isString()
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
