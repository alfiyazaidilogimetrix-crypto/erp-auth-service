"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_openapi_1 = require("@hono/zod-openapi");
var http_exception_1 = require("hono/http-exception");
var erp_shared_models_1 = require("erp-shared-models");
var user_1 = require("@swagger/user");
var register_1 = require("@controller/user/register");
var login_1 = require("@controller/user/login");
var otp_1 = require("@controller/user/otp");
var update_1 = require("@controller/user/update");
var getUser_1 = require("@controller/user/getUser");
var delete_1 = require("@controller/user/delete");
var user_2 = require("@jwt/user");
var user = new zod_openapi_1.OpenAPIHono();
user.use(user_1.getUserProfileDoc.path, user_2.userGuard);
user.use(user_1.updateUserProfileDoc.path, user_2.userGuard);
user.use(user_1.updateUserPasswordDoc.path, user_2.userGuard);
user.use(user_1.removeProfileImageDoc.path, user_2.userGuard);
// user.use(getAllUsersDoc.path, userGuard);
// user.use(getUserByIdDoc.path, userGuard);
user.use(user_1.updateUserByIdDoc.path, user_2.userGuard);
user.use(user_1.deleteUserDoc.path, user_2.userGuard);
// Auth routes
user.openapi(user_1.userRegisterDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var body, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, c.req.json()];
            case 1:
                body = _a.sent();
                return [4 /*yield*/, (0, register_1.register)(body)];
            case 2:
                data = _a.sent();
                return [2 /*return*/, c.json({
                        status: 201,
                        message: 'User registered successfully. Please check your email for verification.',
                        // token: data.token,
                        user: data.user,
                    })];
        }
    });
}); });
user.openapi(user_1.userLoginDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var body, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, c.req.json()];
            case 1:
                body = _a.sent();
                return [4 /*yield*/, (0, login_1.login)(body)];
            case 2:
                data = _a.sent();
                return [2 /*return*/, c.json(__assign({ status: 200, message: 'You are logged in successfully' }, data))];
        }
    });
}); });
user.openapi(user_1.userVerifyDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var body, verify, userData, password, userWithoutPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, c.req.json()];
            case 1:
                body = _a.sent();
                return [4 /*yield*/, (0, otp_1.verifyOTPToken)(body)];
            case 2:
                verify = _a.sent();
                return [4 /*yield*/, erp_shared_models_1.prisma.user.update({
                        where: {
                            email: verify.email,
                        },
                        data: {
                            emailVerified: true,
                        },
                        include: {
                            profileImage: true,
                            role: true,
                        },
                    })];
            case 3:
                userData = _a.sent();
                if (!userData) {
                    throw new http_exception_1.HTTPException(404, {
                        message: 'User with this email does not exist',
                    });
                }
                password = userData.password, userWithoutPassword = __rest(userData, ["password"]);
                return [2 /*return*/, c.json({
                        status: 200,
                        message: 'Your account has been verified. You can log in now.',
                        user: userWithoutPassword,
                    })];
        }
    });
}); });
user.openapi(user_1.userResendOtpDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var body, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, c.req.json()];
            case 1:
                body = _a.sent();
                return [4 /*yield*/, (0, otp_1.resendOTPToken)(body)];
            case 2:
                data = _a.sent();
                return [2 /*return*/, c.json({
                        status: 200,
                        message: 'OTP resent successfully',
                        token: data.token,
                        // email: data.email, // Make sure this matches the schema
                    })];
        }
    });
}); });
// Protected user routes (require authentication)
user.openapi(user_1.getUserProfileDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = c.get('jwtPayload');
                return [4 /*yield*/, (0, getUser_1.getUserProfile)(user.id)];
            case 1:
                userData = _a.sent();
                return [2 /*return*/, c.json({
                        status: 200,
                        user: userData,
                    })];
        }
    });
}); });
user.openapi(user_1.updateUserProfileDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var user, body, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = c.get('jwtPayload');
                return [4 /*yield*/, c.req.json()];
            case 1:
                body = _a.sent();
                return [4 /*yield*/, (0, update_1.updateUserProfile)(user.id, body)];
            case 2:
                userData = _a.sent();
                return [2 /*return*/, c.json({
                        status: 200,
                        message: 'Profile updated successfully',
                        user: userData,
                    })];
        }
    });
}); });
user.openapi(user_1.updateUserPasswordDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var user, body;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = c.get('jwtPayload');
                return [4 /*yield*/, c.req.json()];
            case 1:
                body = _a.sent();
                return [4 /*yield*/, (0, update_1.updateUserPassword)(user.id, body)];
            case 2:
                _a.sent();
                return [2 /*return*/, c.json({
                        status: 200,
                        message: 'Password updated successfully',
                    })];
        }
    });
}); });
user.openapi(user_1.removeProfileImageDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var user, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                user = c.get('jwtPayload');
                return [4 /*yield*/, (0, delete_1.removeProfileImage)(user.id)];
            case 1:
                userData = _a.sent();
                return [2 /*return*/, c.json({
                        status: 200,
                        message: 'Profile image removed successfully',
                        user: userData,
                    })];
        }
    });
}); });
// Admin routes
user.openapi(user_1.getAllUsersDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, page, _c, limit, roleId, result;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _a = c.req.query(), _b = _a.page, page = _b === void 0 ? 1 : _b, _c = _a.limit, limit = _c === void 0 ? 10 : _c, roleId = _a.roleId;
                return [4 /*yield*/, (0, getUser_1.getAllUsers)(Number(page), Number(limit), parseInt(roleId))];
            case 1:
                result = _d.sent();
                return [2 /*return*/, c.json(__assign({ status: 200 }, result))];
        }
    });
}); });
user.openapi(user_1.getUserByIdDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var id, userData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = c.req.param().id;
                return [4 /*yield*/, (0, getUser_1.getUserById)(parseInt(id))];
            case 1:
                userData = _a.sent();
                return [2 /*return*/, c.json({
                        status: 200,
                        user: userData,
                    })];
        }
    });
}); });
user.openapi(user_1.updateUserByIdDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var id, body, userData, userWithProvider;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = c.req.param().id;
                return [4 /*yield*/, c.req.json()];
            case 1:
                body = _a.sent();
                return [4 /*yield*/, (0, update_1.updateUserById)(parseInt(id), body)];
            case 2:
                userData = _a.sent();
                userWithProvider = __assign(__assign({}, userData), { provider: 'credentials' });
                return [2 /*return*/, c.json({
                        status: 200,
                        message: 'User updated successfully',
                        user: userWithProvider,
                    })];
        }
    });
}); });
user.openapi(user_1.deleteUserDoc, function (c) { return __awaiter(void 0, void 0, void 0, function () {
    var id, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = c.req.param().id;
                user = c.get('jwtPayload');
                return [4 /*yield*/, (0, delete_1.deleteUser)(parseInt(id), user.id)];
            case 1:
                _a.sent();
                return [2 /*return*/, c.json({
                        status: 200,
                        message: 'User deleted successfully',
                    })];
        }
    });
}); });
exports.default = user;
