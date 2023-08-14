class Controller {
    constructor () {
        return {
            UserController: require('./UserController')
        }
    }
}

module.exports = new Controller()