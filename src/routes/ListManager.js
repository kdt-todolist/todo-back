const express = require('express');
const router = express.Router();
const { createList, updateListTitle, updateListIsVisible, deleteList, getAllList } = require('../controllers/ListController');
router.use(express.json());

router.post('/', createList);

router.patch('/:id', updateListTitle);

router.patch('/:id', updateListIsVisible);

router.delete('/:id', deleteList);

router.get('/', getAllList);

module.exports = router;
