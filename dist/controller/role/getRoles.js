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
exports.getRoleById = exports.getRoles = void 0;
var http_exception_1 = require("hono/http-exception");
// import prisma from '@config/prisma';
var erp_shared_models_1 = require("erp-shared-models");
var getRoles = function () {
    var args_1 = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args_1[_i] = arguments[_i];
    }
    return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (page, limit) {
        var skip, _a, roles, total;
        if (page === void 0) { page = 1; }
        if (limit === void 0) { limit = 10; }
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    skip = (page - 1) * limit;
                    return [4 /*yield*/, Promise.all([
                            erp_shared_models_1.prisma.role.findMany({
                                skip: skip,
                                take: limit,
                                include: {
                                    permissions: {
                                        include: {
                                            modules: true,
                                        },
                                    },
                                    users: {
                                        select: {
                                            id: true,
                                            name: true,
                                            email: true,
                                        },
                                    },
                                },
                                orderBy: { createdAt: 'desc' },
                            }),
                            erp_shared_models_1.prisma.role.count(),
                        ])];
                case 1:
                    _a = _b.sent(), roles = _a[0], total = _a[1];
                    return [2 /*return*/, {
                            roles: roles,
                            pagination: {
                                page: page,
                                limit: limit,
                                total: total,
                                pages: Math.ceil(total / limit),
                            },
                        }];
            }
        });
    });
};
exports.getRoles = getRoles;
var getRoleById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var role;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, erp_shared_models_1.prisma.role.findUnique({
                    where: { id: id },
                    include: {
                        permissions: {
                            include: {
                                modules: true,
                            },
                        },
                        users: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            },
                        },
                    },
                })];
            case 1:
                role = _a.sent();
                if (!role) {
                    throw new http_exception_1.HTTPException(404, {
                        message: 'Role not found',
                    });
                }
                return [2 /*return*/, role];
        }
    });
}); };
exports.getRoleById = getRoleById;
