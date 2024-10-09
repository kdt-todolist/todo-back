const express = require('express');
const listValidator = require('../validators/listValidator');
const router = express.Router();
const { createList, updateListTitle, updateListIsVisible, deleteList, getAllList } = require('../controllers/ListController');
router.use(express.json());

router.post('/', listValidator.createListValidation, createList);

router.patch('/:id', listValidator.updateListTitleValidation, updateListTitle);

router.patch('/isVisible/:id', listValidator.updateListIsVisibleValidation, updateListIsVisible);

router.delete('/:id', listValidator.deleteListValidation, deleteList);

router.get('/', getAllList);

module.exports = router;
