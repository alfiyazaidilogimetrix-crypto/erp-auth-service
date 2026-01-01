"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("@controller/role/create");
var getRoles_1 = require("@controller/role/getRoles");
var update_1 = require("@controller/role/update");
var delete_1 = require("@controller/role/delete");
module.exports = {
    createRole: create_1.createRole,
    getRoles: getRoles_1.getRoles,
    getRoleById: getRoles_1.getRoleById,
    updateRole: update_1.updateRole,
    deleteRole: delete_1.deleteRole,
};
