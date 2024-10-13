const express = require('express');
const listValidator = require('../validators/listValidator');
const router = express.Router();
const { createList, updateList, deleteList, getAllList, createBulkList } = require('../controllers/listController');
const { verfyToken } = require('../middlewares/jwtMiddleware');

router.use(express.json());
router.use(verfyToken);

router.post('/', listValidator.createListValidation, createList);

router.put('/:id', listValidator.updateListValidation, updateList);

router.delete('/:id', listValidator.deleteListValidation, deleteList);

router.get('/', getAllList);

router.post('/bulk', createBulkList);


module.exports = router;
