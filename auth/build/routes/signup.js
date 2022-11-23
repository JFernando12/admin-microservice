"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupRouter = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const validate_request_1 = require("../middlewares/validate-request");
const router = (0, express_1.Router)();
exports.signupRouter = router;
router.post('/users/signup', [
    (0, express_validator_1.body)('email').isEmail().withMessage('Email is required'),
    (0, express_validator_1.body)('username').notEmpty().withMessage('Username is required'),
    (0, express_validator_1.body)('password')
        .trim()
        .isLength({ min: 4, max: 20 })
        .withMessage('Password must be between 4 and 20 characters'),
], validate_request_1.validateRequest, (req, res) => {
    console.log(req.body);
    res.send({ created: 'success' });
});
