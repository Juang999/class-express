class UserController {
    listMembershipPremium = [
        {
            name: "Bangkit Juang Raharjo",
            age: 24,
            country: "Indonesia"
        }, {
            name: "Ismail Kalashnikov",
            age: 22,
            country: "Russia"
        }, {
            name: "Derrahman",
            age: 26,
            country: "Pakistan"
        }
    ]

    getMembershipUser = (req, res) => {
        res.status(200)
            .json({
                data_membership_premium: this.listMembershipPremium
            })
    }
}

module.exports = new UserController()