class Route {
    constructor () {
        return {
            book: {
                create: '/books',
                read: '/books',
                show: '/:id/books',
                update: '/:id/books',
                delete: '/:id/books'
            },
            category: {
                create: '/categories',
                read: '/categories',
                show: '/:id/categories',
                update: '/:id/categories',
                delete: '/:id/categories'
            }
        }
    }
}

module.exports = new Route()