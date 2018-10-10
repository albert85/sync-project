
class Validator {
    static validateSignup (req, res, next) {
        req.checkBody('firstName', 'Please supllied a valid first name')
        .isEmpty()
        .isLength({ min: 1, max: 5 });

        if (!req.validationErrors()) {
            return next();
          }
          return req.getValidationResult()
            .then(result => res.status(400).json({ validation: false, result: result.mapped() }));
    }

};

export default Validator;