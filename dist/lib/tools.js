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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePassword = exports.generateOtp = exports.getExpiryTime = exports.validatePassword = exports.hashedPassword = void 0;
var bun_1 = require("bun");
var hashedPassword = function (pass) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bun_1.password.hash(pass, {
                    algorithm: 'bcrypt',
                    cost: 12, // 10-12 is recommended for bcrypt
                })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.hashedPassword = hashedPassword;
var validatePassword = function (pass, hasPass) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, bun_1.password.verify(pass, hasPass)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.validatePassword = validatePassword;
var getExpiryTime = function (expireString) {
    var now = Math.floor(Date.now() / 1000);
    var unit = expireString.slice(-1);
    var value = parseInt(expireString.slice(0, -1), 10);
    var secondsToAdd = unit === 's'
        ? value
        : unit === 'm'
            ? value * 60
            : unit === 'h'
                ? value * 60 * 60
                : unit === 'd'
                    ? value * 60 * 60 * 24
                    : (function () {
                        throw new Error("Invalid time unit in expiration string: ".concat(expireString));
                    })();
    return now + secondsToAdd;
};
exports.getExpiryTime = getExpiryTime;
var generateOtp = function () {
    var digits = '0123456789';
    var otp = '';
    for (var i = 0; i < 6; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp.toString();
};
exports.generateOtp = generateOtp;
var generatePassword = function (length) {
    if (length === void 0) { length = 12; }
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var numbers = '0123456789';
    var symbols = '!@#$%^&*';
    var allChars = lowercase + uppercase + numbers + symbols;
    var generatedPassword = '';
    // Ensure at least one character from each category
    generatedPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
    generatedPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
    generatedPassword += numbers[Math.floor(Math.random() * numbers.length)];
    generatedPassword += symbols[Math.floor(Math.random() * symbols.length)];
    // Fill the rest with random characters from all categories
    for (var i = 4; i < length; i++) {
        generatedPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // Shuffle the password to make it more random
    return generatedPassword
        .split('')
        .sort(function () { return Math.random() - 0.5; })
        .join('');
};
exports.generatePassword = generatePassword;
