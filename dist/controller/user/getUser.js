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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getAllUsers = exports.getUserProfile = void 0;
var http_exception_1 = require("hono/http-exception");
var erp_shared_models_1 = require("erp-shared-models");
var getUserProfile = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var user, password, userWithoutPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, erp_shared_models_1.default.user.findUnique({
                    where: { id: userId },
                    include: {
                        profileImage: true,
                        role: {
                            include: {
                                permissions: {
                                    include: {
                                        modules: true,
                                    },
                                },
                            },
                        },
                    },
                })];
            case 1:
                user = _a.sent();
                if (!user) {
                    throw new http_exception_1.HTTPException(404, {
                        message: 'User not found',
                    });
                }
                password = user.password, userWithoutPassword = __rest(user, ["password"]);
                return [2 /*return*/, userWithoutPassword];
        }
    });
}); };
exports.getUserProfile = getUserProfile;
var getAllUsers = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (page, limit, roleId) {
        var skip, where, _a, users, total, usersWithoutPasswords;
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    skip = (page - 1) * limit;
                    where = roleId ? { roleId: roleId } : {};
                    return [4 /*yield*/, Promise.all([
                            erp_shared_models_1.default.user.findMany({
                                where: where,
                                skip: skip,
                                take: limit,
                                include: {
                                    profileImage: true,
                                    role: true,
                                },
                                orderBy: { createdAt: 'desc' },
                            }),
                            erp_shared_models_1.default.user.count({ where: where }),
                        ])];
                case 1:
                    _a = _b.sent(), users = _a[0], total = _a[1];
                    usersWithoutPasswords = users.map(function (_a) {
                        var password = _a.password, user = __rest(_a, ["password"]);
                        return user;
                    });
                    return [2 /*return*/, {
                            users: usersWithoutPasswords,
                            pagination: {
                                page: page,
                                limit: limit,
                                total: total,
                                totalPages: Math.ceil(total / limit),
                            },
                        }];
            }
        });
    });
};
exports.getAllUsers = getAllUsers;
var getUserById = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var user, password, userWithoutPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, erp_shared_models_1.default.user.findUnique({
                    where: { id: userId },
                    include: {
                        profileImage: true,
                        role: true,
                    },
                })];
            case 1:
                user = _a.sent();
                if (!user) {
                    throw new http_exception_1.HTTPException(404, {
                        message: 'User not found',
                    });
                }
                password = user.password, userWithoutPassword = __rest(user, ["password"]);
                return [2 /*return*/, userWithoutPassword];
        }
    });
}); };
exports.getUserById = getUserById;
