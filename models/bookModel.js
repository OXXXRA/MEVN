const {Schema, model} = require('mongoose')

const bookItemSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 250
        },
        authorBook: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 250
        },
        description: {
            type: String,
            required: true,
            minlength: 2,
            maxlength: 2000
        },
        date: {
            type: Date,
            default: Date.now()
        },

    }
)

const BookItem = model('BookItem', bookItemSchema)
module.exports = BookItem;