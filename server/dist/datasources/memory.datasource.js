"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'Memory',
    connector: 'memory',
    localStorage: '',
    file: 'data.json'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let MemoryDataSource = class MemoryDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
MemoryDataSource.dataSourceName = 'Memory';
MemoryDataSource.defaultConfig = config;
MemoryDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.Memory', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], MemoryDataSource);
exports.MemoryDataSource = MemoryDataSource;
//# sourceMappingURL=memory.datasource.js.map