class Controller {
    constructor () {
        return {
            UserController: require('./UserController'),
            BookController: require('./BookController')
        }
    }
}

module.exports = new Controller()