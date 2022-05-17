"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const user_model_1 = require("./user.model");
let Customer = class Customer extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Customer.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "name", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "website", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "address", void 0);
tslib_1.__decorate([
    (0, repository_1.hasMany)(() => user_model_1.User, {
        keyFrom: 'customerId',
        keyTo: 'customerId',
    }),
    tslib_1.__metadata("design:type", Array)
], Customer.prototype, "users", void 0);
Customer = tslib_1.__decorate([
    (0, repository_1.model)({ name: 'customer1' }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.model.js.map