const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().min(3).max(25).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).max(25).required(),
});

const validateUsers = (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(422).json(error);
  } else {
    next();
  }
};

module.exports = validateUsers;
