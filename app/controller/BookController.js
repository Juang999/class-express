const {Book} = require(`${__dirname}/../../models`)
const {Op, Sequelize} = require('sequelize')

class BookController {
    getAllBook = (req, res) => {
        let search = (req.query.search) ? req.query.search : ''

        Book.findAll({
            where: {
                name: {
                    [Op.like]: `%${search}%`
                }
            }
        })
        .then(result => {
            res.status(200)
                .json({
                    status: 'success!',
                    data: result,
                    error: null
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    status: 'failed!',
                    data: null,
                    error: err.message
                })
        })
    }

    postBook = (req, res) => {
        Book.create({
            name: req.body.name,
            amount: req.body.amount
        })
        .then(result => {
            res.status(200)
                .json({
                    status: 'success!',
                    data: result,
                    error: null
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    status: 'failed!',
                    data: null,
                    error: err.message
                })
        })
    }

    showDetailBook = (req, res) => {
        Book.findByPk(req.params.id, {
            attributes: [
                'id',
                'name',
                'amount',
                ['createdAt', 'created_at']
            ]
        })
        .then(result => {
            res.status(200)
                .json({
                    status: 'success!',
                    data: result,
                    error: null
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    status: 'failed!',
                    data: null,
                    error: err.message
                })
        })
    }

    updateBook = async (req, res) => {
        try {
            let dataBookPerPrimaryKey = await Book.findByPk(req.params.id)
            
            let updatedDataBook = await Book.update({
                name: (req.body.name) ? req.body.name : dataBookPerPrimaryKey.name,
                amount: (req.body.amount) ? req.body.amount : dataBookPerPrimaryKey.amount
            }, {
                where: {
                    id: req.params.id
                }
            })

            res.status(200)
                .json({
                    status: 'success!',
                    data: updatedDataBook,
                    error: null
                })
        } catch (error) {
            res.status(400)
                .json({
                    status: 'failed!',
                    data: null,
                    error: error.message
                })
        }
    }

    deleteBook = (req, res) => {
        Book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(result => {
            res.status(200)
                .json({
                    status: 'success!',
                    data: result,
                    error: null
                })
        })
        .catch(err => {
            res.status(400)
                .json({
                    status: 'failed!',
                    data: null,
                    error: err.message
                })
        })
    }
}

module.exports = new BookController()