import db from '../../models/index'

class SignUpController {
    static createUser (req, res) {
        return db.UserAccount
        .create({
            firstName: req.body.firstName,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role
        }).then((userDetails) => {
            return res.status(200).json({
                user: userDetails
            })
        })
        .catch((err) => {
            console.log(err);
        })

    }
};

export default SignUpController;

