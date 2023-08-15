const express = require('express')
const router = express.Router()
const {book} = require('./route')
const {BookController} = require('../app/controller/Controller')

router.get(book.read, BookController.getAllBook)
router.post(book.create, BookController.postBook)
router.get(book.show, BookController.showDetailBook)
router.put(book.update, BookController.updateBook)
router.delete(book.delete, BookController.deleteBook)

module.exports = router