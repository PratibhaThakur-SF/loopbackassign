"use strict";
var LocalInterceptor_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalInterceptor = void 0;
const tslib_1 = require("tslib");
/* eslint-disable no-useless-catch */
const core_1 = require("@loopback/core");
/**
 * This class will be bound to the application as an `Interceptor` during
 * `boot`
 */
let LocalInterceptor = LocalInterceptor_1 = class LocalInterceptor {
    /*
    constructor() {}
    */
    /**
     * This method is used by LoopBack context to produce an interceptor function
     * for the binding.
     *
     * @returns An interceptor function
     */
    value() {
        return this.intercept.bind(this);
    }
    /**
     * The logic to intercept an invocation
     * @param invocationCtx - Invocation context
     * @param next - A function to invoke next interceptor or the target method
     */
    async intercept(invocationCtx, next) {
        try {
            console.log('local');
            // Add pre-invocation logic here
            const result = await next();
            // Add post-invocation logic here
            return result;
        }
        catch (err) {
            // Add error handling logic here
            throw err;
        }
    }
};
LocalInterceptor.BINDING_KEY = `interceptors.${LocalInterceptor_1.name}`;
LocalInterceptor = LocalInterceptor_1 = tslib_1.__decorate([
    (0, core_1.injectable)({ tags: { key: LocalInterceptor_1.BINDING_KEY } })
], LocalInterceptor);
exports.LocalInterceptor = LocalInterceptor;
//# sourceMappingURL=local.interceptor.js.map