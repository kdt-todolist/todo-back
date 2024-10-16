const express = require('express');
const { createListValidation, updateListValidation, deleteListValidation, createBulkListValidation } = require('../validators/listValidator');
const router = express.Router();
const { createList, updateList, deleteList, getAllList, createBulkList } = require('../controllers/listController');
const { verfyToken } = require('../middlewares/jwtMiddleware');

router.use(express.json());
router.use(verfyToken);

router.post('/', createListValidation, createList);

router.put('/:id', updateListValidation, updateList);

router.delete('/:id', deleteListValidation, deleteList);

router.get('/', getAllList);

router.post('/bulk', createBulkListValidation, createBulkList);


module.exports = router;
