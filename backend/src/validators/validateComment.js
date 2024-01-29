const Joi = require("joi");

const getCommentSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    avis: Joi.string().max(255).presence("required"),
  });
};

const validateComment = (req, res, next) => {
  const schema = getCommentSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateComment;
