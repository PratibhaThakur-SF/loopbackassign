"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultSequence = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
let DefaultSequence = class DefaultSequence {
    /**
     * Constructor: Injects findRoute, invokeMethod & logError
     * methods as promises.
     *
     * @param findRoute - Finds the appropriate controller method,
     *  spec and args for invocation (injected via SequenceActions.FIND_ROUTE).
     * @param parseParams - The parameter parsing function (injected
     * via SequenceActions.PARSE_PARAMS).
     * @param invoke - Invokes the method specified by the route
     * (injected via SequenceActions.INVOKE_METHOD).
     * @param send - The action to merge the invoke result with the response
     * (injected via SequenceActions.SEND)
     * @param reject - The action to take if the invoke returns a rejected
     * promise result (injected via SequenceActions.REJECT).
     */
    constructor(findRoute, parseParams, invoke, send, reject) {
        this.findRoute = findRoute;
        this.parseParams = parseParams;
        this.invoke = invoke;
        this.send = send;
        this.reject = reject;
        /**
         * Optional invoker for registered middleware in a chain.
         * To be injected via SequenceActions.INVOKE_MIDDLEWARE.
         */
        this.invokeMiddleware = () => false;
    }
    /**
     * Runs the default sequence. Given a handler context (request and response),
     * running the sequence will produce a response or an error.
     *
     * Default sequence executes these steps
     *  - Executes middleware for CORS, OpenAPI spec endpoints
     *  - Finds the appropriate controller method, swagger spec
     *    and args for invocation
     *  - Parses HTTP request to get API argument list
     *  - Invokes the API which is defined in the Application Controller
     *  - Writes the result from API into the HTTP response
     *  - Error is caught and logged using 'logError' if any of the above steps
     *    in the sequence fails with an error.
     *
     * @param context - The request context: HTTP request and response objects,
     * per-request IoC container and more.
     */
    async handle(context) {
        try {
            const { request, response } = context;
            // Invoke registered Express middleware
            const finished = await this.invokeMiddleware(context);
            if (finished) {
                // The response been produced by the middleware chain
                return;
            }
            const route = this.findRoute(request);
            const args = await this.parseParams(request, route);
            const result = await this.invoke(route, args);
            this.send(response, result);
        }
        catch (error) {
            this.reject(context, error);
        }
    }
};
tslib_1.__decorate([
    (0, core_1.inject)(rest_1.SequenceActions.INVOKE_MIDDLEWARE, { optional: true }),
    tslib_1.__metadata("design:type", Function)
], DefaultSequence.prototype, "invokeMiddleware", void 0);
DefaultSequence = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)(rest_1.SequenceActions.FIND_ROUTE)),
    tslib_1.__param(1, (0, core_1.inject)(rest_1.SequenceActions.PARSE_PARAMS)),
    tslib_1.__param(2, (0, core_1.inject)(rest_1.SequenceActions.INVOKE_METHOD)),
    tslib_1.__param(3, (0, core_1.inject)(rest_1.SequenceActions.SEND)),
    tslib_1.__param(4, (0, core_1.inject)(rest_1.SequenceActions.REJECT)),
    tslib_1.__metadata("design:paramtypes", [Function, Function, Function, Function, Function])
], DefaultSequence);
exports.DefaultSequence = DefaultSequence;
//# sourceMappingURL=sequence.js.map