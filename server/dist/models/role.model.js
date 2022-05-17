"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
var RoleKey;
(function (RoleKey) {
    RoleKey["superadmin"] = "superadmin";
    RoleKey["admin"] = "admin";
    RoleKey["subscriber"] = "subscriber";
})(RoleKey || (RoleKey = {}));
let Role = class Role extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: false,
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: {
            enum: Object.values(RoleKey),
        },
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "key", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Role.prototype, "description", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => user_model_1.User, {
        keyFrom: 'roleName',
        keyTo: 'roleName',
    }),
    tslib_1.__metadata("design:type", Array)
], Role.prototype, "users", void 0);
Role = tslib_1.__decorate([
    (0, repository_1.model)({
        name: 'roles',
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Role);
exports.Role = Role;
//# sourceMappingURL=role.model.js.map