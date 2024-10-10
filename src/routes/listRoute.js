const express = require('express');
const listValidator = require('../validators/listValidator');
const router = express.Router();
const { createList, updateList,  deleteList, getAllList } = require('../controllers/listController');
router.use(express.json());

router.post('/', listValidator.createListValidation, createList);

router.put('/:id', listValidator.updateListValidation, updateList);

router.delete('/:id', listValidator.deleteListValidation, deleteList);

router.get('/', getAllList);

module.exports = router;
