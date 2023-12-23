"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nvmrc = void 0;
const projen_1 = require("projen");
class Nvmrc extends projen_1.TextFile {
    constructor(project, options = {}) {
        var _a, _b, _c;
        super(project, ".nvmrc", {
            lines: [
                (_c = (_b = (_a = options === null || options === void 0 ? void 0 : options.nodeVersion) !== null && _a !== void 0 ? _a : project === null || project === void 0 ? void 0 : project.maxNodeVersion) !== null && _b !== void 0 ? _b : project === null || project === void 0 ? void 0 : project.minNodeVersion) !== null && _c !== void 0 ? _c : "lts/*",
            ],
        });
    }
}
exports.Nvmrc = Nvmrc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBa0M7QUFVbEMsTUFBYSxLQUFNLFNBQVEsaUJBQVE7SUFDL0IsWUFBWSxPQUFvQixFQUFFLFVBQXdCLEVBQUU7O1FBQ3hELEtBQUssQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ3JCLEtBQUssRUFBRTtnQkFDSCxNQUFBLE1BQUEsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVyxtQ0FDaEIsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGNBQWMsbUNBQ3ZCLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxjQUFjLG1DQUN2QixPQUFPO2FBQ2Q7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0NBQ0o7QUFYRCxzQkFXQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSBcInByb2plblwiO1xuaW1wb3J0IHsgTm9kZVByb2plY3QgfSBmcm9tIFwicHJvamVuL2xpYi9qYXZhc2NyaXB0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTnZtcmNPcHRpb25zIHtcbiAgICAvKipcbiAgICAgKiBAZGVmYXVsdCBtYXhOb2RlVmVyc2lvbiwgIGlmIG5vbmUgdGhlbiBtaW5Ob2RlVmVyc2lvbiwgaWYgbm9uZSB0aGVuIFwibHRzLypcIlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5vZGVWZXJzaW9uPzogc3RyaW5nO1xufVxuXG5leHBvcnQgY2xhc3MgTnZtcmMgZXh0ZW5kcyBUZXh0RmlsZSB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdDogTm9kZVByb2plY3QsIG9wdGlvbnM6IE52bXJjT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHN1cGVyKHByb2plY3QsIFwiLm52bXJjXCIsIHtcbiAgICAgICAgICAgIGxpbmVzOiBbXG4gICAgICAgICAgICAgICAgb3B0aW9ucz8ubm9kZVZlcnNpb24gPz9cbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdD8ubWF4Tm9kZVZlcnNpb24gPz9cbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdD8ubWluTm9kZVZlcnNpb24gPz9cbiAgICAgICAgICAgICAgICAgICAgXCJsdHMvKlwiLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19