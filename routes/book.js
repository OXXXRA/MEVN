const {Router} = require('express')
const BookItem = require('../models/bookModel')

router = Router()

router.get('/', async (req, res) =>{
    try{
        const bookList = await BookItem.find()
        if(!bookList) throw new Error('Книг нет...')
        res.status(200).json(bookList)

    } catch (err) {
        res.status(500).json({message: err.message})
    }});
router.post('/', async (req, res) => {
    const newBook = BookItem(req.body)
    try {
        const book = await newBook.save()
        if(!book) throw new Error('Не удалось сохранить запись.')
        res.status(200).json(book)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    try {
        book = await BookItem.findById(id, (err, result) => {
            if (err) return err
            else return result
        })
        res.status(200).json(book)
    } catch (err){
        res.status(500).json({message: err.message})
    }

});

router.put('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await BookItem.findByIdAndUpdate(id, req.body)
        if (!response) throw Error('Что-то произошло не так...')
        const updated =  {... response._doc, ...req.body}
        res.status(200).json(updated)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        const response = await BookItem.findByIdAndDelete(id, req.body)
        if (!response) throw new Error('Что-то произошло не так...')
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
module.exports = router