"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = __importDefault(require("../models/User"));
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
const typeorm_1 = require("typeorm");
const userRouter = express_1.Router();
userRouter.post('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const repo = typeorm_1.getRepository(User_1.default);
        const resp = yield repo.save(request.body);
        return response.status(201).json(resp);
    }
    catch (err) {
        console.log("err.messege: ", err.messege);
    }
}));
userRouter.get('/', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = typeorm_1.getRepository(User_1.default);
    const resp = yield repo.find();
    return response.status(201).json(resp);
}));
// uso do filtro criado em respositories
userRouter.get('/:course', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const repo = typeorm_1.getCustomRepository(UserRepository_1.default);
    const resp = yield repo.findByCourse(request.params.course);
    return response.json(resp);
}));
exports.default = userRouter;
