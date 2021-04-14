"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// ROTAS DO INDEX
const express_1 = require("express");
const user_router_1 = __importDefault(require("./user.router"));
const router = express_1.Router();
router.use('/user', user_router_1.default);
exports.default = router;
