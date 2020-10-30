const _ = require('lodash');
const Joi = require('joi');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

const validateSchema = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().allow([null, '']).optional(),
  email: Joi.string().allow([null, '']).optional(),
  subject: Joi.number().allow([null, '']).optional(),
});

exports.create = asyncHandler(async (req, res, next) => {
  const { firstName, lastName } = req.body;
  const validate = Joi.validate(req.body, validateSchema);
  if (validate.error) {
    return next(new ErrorResponse(`validation error`, 404));
  }
  res.status(200).json({
    success: true,
    data: {
      message: `Hi ${firstName} ${lastName}, your message have been sent correctly`,
    },
  });
});
