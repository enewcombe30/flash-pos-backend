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
exports.logoutUser = exports.loginUser = void 0;
const authService_1 = __importDefault(require("../services/authService")); // ✅ Import default export correctly
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { code } = req.body;
        const token = yield authService_1.default.authenticateUser(code); // ✅ Call the function correctly
        res.json({ token });
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
});
exports.loginUser = loginUser;
const logoutUser = (req, res) => {
    res.json({ message: "Logout successful" });
};
exports.logoutUser = logoutUser;
