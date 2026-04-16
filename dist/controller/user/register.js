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
exports.register = void 0;
// import prisma from '@config/prisma';
var tools_1 = require("@lib/tools");
var http_exception_1 = require("hono/http-exception");
var erp_shared_models_1 = require("erp-shared-models");
var register = function (body) { return __awaiter(void 0, void 0, void 0, function () {
    var office, userData, user, hashedPass, data, _loop_1, _i, office_1, off;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                office = body.office, userData = __rest(body, ["office"]);
                return [4 /*yield*/, erp_shared_models_1.prisma.user.findUnique({
                        where: {
                            email: userData.email,
                        },
                    })];
            case 1:
                user = _a.sent();
                if (user !== null) {
                    throw new http_exception_1.HTTPException(409, {
                        message: 'User with this account already registered',
                    });
                }
                return [4 /*yield*/, (0, tools_1.hashedPassword)(userData.password)];
            case 2:
                hashedPass = _a.sent();
                return [4 /*yield*/, erp_shared_models_1.prisma.user.create({
                        data: __assign(__assign({}, userData), { emailVerified: true, password: hashedPass, original_password: userData.password }),
                        include: {
                            profileImage: true,
                            role: true,
                        },
                    })];
            case 3:
                data = _a.sent();
                if (!(office && office.length > 0)) return [3 /*break*/, 7];
                _loop_1 = function (off) {
                    var userHO;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, erp_shared_models_1.prisma.userHeadOffice.create({
                                    data: {
                                        userId: data.id,
                                        headOfficeId: off.head_office,
                                    },
                                })];
                            case 1:
                                userHO = _b.sent();
                                if (!(off.branch_offices && off.branch_offices.length > 0)) return [3 /*break*/, 3];
                                return [4 /*yield*/, erp_shared_models_1.prisma.userBranchOffice.createMany({
                                        data: off.branch_offices.map(function (boId) { return ({
                                            userHeadOfficeId: userHO.id,
                                            branchOfficeId: boId,
                                        }); }),
                                    })];
                            case 2:
                                _b.sent();
                                _b.label = 3;
                            case 3: return [2 /*return*/];
                        }
                    });
                };
                _i = 0, office_1 = office;
                _a.label = 4;
            case 4:
                if (!(_i < office_1.length)) return [3 /*break*/, 7];
                off = office_1[_i];
                return [5 /*yield**/, _loop_1(off)];
            case 5:
                _a.sent();
                _a.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 4];
            case 7: 
            // const verify = await generateOTPToken({
            //   email: data.email,
            // });
            return [2 /*return*/, {
                    // ...verify,
                    user: data,
                }];
        }
    });
}); };
exports.register = register;
