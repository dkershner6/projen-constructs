"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeWorkspaces = exports.NON_MONOREPO_ERROR_MESSAGE = void 0;
const path_1 = __importDefault(require("path"));
const projen_1 = require("projen");
const javascript_1 = require("projen/lib/javascript");
const DEFAULT_WORKSPACES_MONOREPO_EXTENSION_RECOMMENDATIONS = [
    // https://marketplace.visualstudio.com/items?itemName=q.typescript-mono-repo-import-helper
    "q.typescript-mono-repo-import-helper",
];
const DEFAULT_PATH = ".vscode";
exports.NON_MONOREPO_ERROR_MESSAGE = "VsCodeWorkspaces can only be used in a Project with subprojects";
class VsCodeWorkspaces extends projen_1.JsonFile {
    constructor(rootProject, options) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        if (rootProject instanceof projen_1.Project &&
            ((_b = (_a = rootProject === null || rootProject === void 0 ? void 0 : rootProject.subprojects) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) > 0) {
            const workspacesFilePath = (_c = options === null || options === void 0 ? void 0 : options.path) !== null && _c !== void 0 ? _c : DEFAULT_PATH;
            const workspacesJson = {
                ...((_d = options === null || options === void 0 ? void 0 : options.additionalWorkspacesJsonSettings) !== null && _d !== void 0 ? _d : {}),
                extensions: {
                    ...((_f = (_e = options === null || options === void 0 ? void 0 : options.additionalWorkspacesJsonSettings) === null || _e === void 0 ? void 0 : _e.extensions) !== null && _f !== void 0 ? _f : {}),
                    recommendations: [
                        ...((options === null || options === void 0 ? void 0 : options.disableMonoRepoExtensionRecommendations)
                            ? []
                            : DEFAULT_WORKSPACES_MONOREPO_EXTENSION_RECOMMENDATIONS),
                        ...((_j = (_h = (_g = options === null || options === void 0 ? void 0 : options.additionalWorkspacesJsonSettings) === null || _g === void 0 ? void 0 : _g.extensions) === null || _h === void 0 ? void 0 : _h.recommendations) !== null && _j !== void 0 ? _j : []),
                    ],
                },
                folders: [
                    {
                        name: `(ROOT) ${rootProject.name}`,
                        path: path_1.default.relative(path_1.default.join(rootProject.outdir, workspacesFilePath), rootProject.outdir),
                    },
                    ...rootProject.subprojects.map((subProject) => ({
                        name: subProject.name,
                        path: path_1.default.relative(path_1.default.join(rootProject.outdir, workspacesFilePath), subProject.outdir),
                    })),
                ],
                settings: {
                    ["eslint.workingDirectories"]: rootProject.subprojects.map((subProject) => `./${path_1.default.relative(rootProject.outdir, subProject.outdir)}`),
                    ["jest.disabledWorkspaceFolders"]: [
                        rootProject.jest
                            ? rootProject.name
                            : null,
                        ...rootProject.subprojects
                            .filter((subProject) => subProject instanceof javascript_1.NodeProject &&
                            !subProject.jest)
                            .map((subProject) => subProject.name),
                    ].filter(Boolean),
                    ...((_l = (_k = options === null || options === void 0 ? void 0 : options.additionalWorkspacesJsonSettings) === null || _k === void 0 ? void 0 : _k.settings) !== null && _l !== void 0 ? _l : {}),
                },
            };
            super(rootProject, `${workspacesFilePath}/${options.filename}`, {
                obj: workspacesJson,
            });
            return;
        }
        throw new Error(exports.NON_MONOREPO_ERROR_MESSAGE);
    }
}
exports.VsCodeWorkspaces = VsCodeWorkspaces;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnREFBd0I7QUFFeEIsbUNBQTJDO0FBQzNDLHNEQUFvRDtBQWdDcEQsTUFBTSxxREFBcUQsR0FBRztJQUMxRCwyRkFBMkY7SUFDM0Ysc0NBQXNDO0NBQ3pDLENBQUM7QUFFRixNQUFNLFlBQVksR0FBRyxTQUFTLENBQUM7QUFFbEIsUUFBQSwwQkFBMEIsR0FDbkMsaUVBQWlFLENBQUM7QUFFdEUsTUFBYSxnQkFBaUIsU0FBUSxpQkFBUTtJQUMxQyxZQUFZLFdBQXNCLEVBQUUsT0FBZ0M7O1FBQ2hFLElBQ0ksV0FBVyxZQUFZLGdCQUFPO1lBQzlCLENBQUMsTUFBQSxNQUFBLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxXQUFXLDBDQUFFLE1BQU0sbUNBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUM3QyxDQUFDO1lBQ0MsTUFBTSxrQkFBa0IsR0FBRyxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxJQUFJLG1DQUFJLFlBQVksQ0FBQztZQUV6RCxNQUFNLGNBQWMsR0FBeUI7Z0JBQ3pDLEdBQUcsQ0FBQyxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxnQ0FBZ0MsbUNBQUksRUFBRSxDQUFDO2dCQUNwRCxVQUFVLEVBQUU7b0JBQ1IsR0FBRyxDQUFDLE1BQUEsTUFBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsZ0NBQWdDLDBDQUFFLFVBQVUsbUNBQ3JELEVBQUUsQ0FBQztvQkFDUCxlQUFlLEVBQUU7d0JBQ2IsR0FBRyxDQUFDLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLHVDQUF1Qzs0QkFDaEQsQ0FBQyxDQUFDLEVBQUU7NEJBQ0osQ0FBQyxDQUFDLHFEQUFxRCxDQUFDO3dCQUM1RCxHQUFHLENBQUMsTUFBQSxNQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGdDQUFnQywwQ0FDdkMsVUFBVSwwQ0FBRSxlQUFlLG1DQUFJLEVBQUUsQ0FBQztxQkFDM0M7aUJBQ0o7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMO3dCQUNJLElBQUksRUFBRSxVQUFVLFdBQVcsQ0FBQyxJQUFJLEVBQUU7d0JBQ2xDLElBQUksRUFBRSxjQUFJLENBQUMsUUFBUSxDQUNmLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxFQUNqRCxXQUFXLENBQUMsTUFBTSxDQUNyQjtxQkFDSjtvQkFDRCxHQUFHLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUM1QyxJQUFJLEVBQUUsVUFBVSxDQUFDLElBQUk7d0JBQ3JCLElBQUksRUFBRSxjQUFJLENBQUMsUUFBUSxDQUNmLGNBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxFQUNqRCxVQUFVLENBQUMsTUFBTSxDQUNwQjtxQkFDSixDQUFDLENBQUM7aUJBQ047Z0JBQ0QsUUFBUSxFQUFFO29CQUNOLENBQUMsMkJBQTJCLENBQUMsRUFBRSxXQUFXLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FDdEQsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUNYLEtBQUssY0FBSSxDQUFDLFFBQVEsQ0FDZCxXQUFXLENBQUMsTUFBTSxFQUNsQixVQUFVLENBQUMsTUFBTSxDQUNwQixFQUFFLENBQ1Y7b0JBQ0QsQ0FBQywrQkFBK0IsQ0FBQyxFQUFFO3dCQUM5QixXQUEyQixDQUFDLElBQUk7NEJBQzdCLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSTs0QkFDbEIsQ0FBQyxDQUFDLElBQUk7d0JBQ1YsR0FBRyxXQUFXLENBQUMsV0FBVzs2QkFDckIsTUFBTSxDQUNILENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FDWCxVQUFVLFlBQVksd0JBQVc7NEJBQ2pDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDdkI7NkJBQ0EsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDO3FCQUM1QyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBRWpCLEdBQUcsQ0FBQyxNQUFBLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGdDQUFnQywwQ0FBRSxRQUFRLG1DQUNuRCxFQUFFLENBQUM7aUJBQ1Y7YUFDSixDQUFDO1lBRUYsS0FBSyxDQUFDLFdBQVcsRUFBRSxHQUFHLGtCQUFrQixJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRTtnQkFDNUQsR0FBRyxFQUFFLGNBQWM7YUFDdEIsQ0FBQyxDQUFDO1lBRUgsT0FBTztRQUNYLENBQUM7UUFFRCxNQUFNLElBQUksS0FBSyxDQUFDLGtDQUEwQixDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNKO0FBeEVELDRDQXdFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tIFwiY29uc3RydWN0c1wiO1xuaW1wb3J0IHsgSnNvbkZpbGUsIFByb2plY3QgfSBmcm9tIFwicHJvamVuXCI7XG5pbXBvcnQgeyBOb2RlUHJvamVjdCB9IGZyb20gXCJwcm9qZW4vbGliL2phdmFzY3JpcHRcIjtcblxuZXhwb3J0IHR5cGUgVnNDb2RlV29ya3NwYWNlc0pzb24gPSB7XG4gICAgZXh0ZW5zaW9ucz86IHtcbiAgICAgICAgcmVjb21tZW5kYXRpb25zPzogc3RyaW5nW107XG4gICAgfTtcbiAgICBmb2xkZXJzOiB7XG4gICAgICAgIG5hbWU6IHN0cmluZztcbiAgICAgICAgcGF0aDogc3RyaW5nO1xuICAgIH1bXTtcbiAgICBzZXR0aW5ncz86IHsgW2tleTogc3RyaW5nXTogdW5rbm93biB9O1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBWc0NvZGVXb3Jrc3BhY2VzT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogQGRlZmF1bHQgbm9uZVxuICAgICAqL1xuICAgIGFkZGl0aW9uYWxXb3Jrc3BhY2VzSnNvblNldHRpbmdzPzogT21pdDxWc0NvZGVXb3Jrc3BhY2VzSnNvbiwgXCJmb2xkZXJzXCI+O1xuICAgIC8qKlxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgZGlzYWJsZU1vbm9SZXBvRXh0ZW5zaW9uUmVjb21tZW5kYXRpb25zPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTaG91bGQgZW5kIHdpdGggXCIuY29kZS13b3Jrc3BhY2VcIlxuICAgICAqL1xuICAgIGZpbGVuYW1lOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQGRlZmF1bHQgXCIudnNjb2RlXCJcbiAgICAgKi9cbiAgICBwYXRoPzogc3RyaW5nO1xufVxuXG5jb25zdCBERUZBVUxUX1dPUktTUEFDRVNfTU9OT1JFUE9fRVhURU5TSU9OX1JFQ09NTUVOREFUSU9OUyA9IFtcbiAgICAvLyBodHRwczovL21hcmtldHBsYWNlLnZpc3VhbHN0dWRpby5jb20vaXRlbXM/aXRlbU5hbWU9cS50eXBlc2NyaXB0LW1vbm8tcmVwby1pbXBvcnQtaGVscGVyXG4gICAgXCJxLnR5cGVzY3JpcHQtbW9uby1yZXBvLWltcG9ydC1oZWxwZXJcIixcbl07XG5cbmNvbnN0IERFRkFVTFRfUEFUSCA9IFwiLnZzY29kZVwiO1xuXG5leHBvcnQgY29uc3QgTk9OX01PTk9SRVBPX0VSUk9SX01FU1NBR0UgPVxuICAgIFwiVnNDb2RlV29ya3NwYWNlcyBjYW4gb25seSBiZSB1c2VkIGluIGEgUHJvamVjdCB3aXRoIHN1YnByb2plY3RzXCI7XG5cbmV4cG9ydCBjbGFzcyBWc0NvZGVXb3Jrc3BhY2VzIGV4dGVuZHMgSnNvbkZpbGUge1xuICAgIGNvbnN0cnVjdG9yKHJvb3RQcm9qZWN0OiBDb25zdHJ1Y3QsIG9wdGlvbnM6IFZzQ29kZVdvcmtzcGFjZXNPcHRpb25zKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHJvb3RQcm9qZWN0IGluc3RhbmNlb2YgUHJvamVjdCAmJlxuICAgICAgICAgICAgKHJvb3RQcm9qZWN0Py5zdWJwcm9qZWN0cz8ubGVuZ3RoID8/IDApID4gMFxuICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmtzcGFjZXNGaWxlUGF0aCA9IG9wdGlvbnM/LnBhdGggPz8gREVGQVVMVF9QQVRIO1xuXG4gICAgICAgICAgICBjb25zdCB3b3Jrc3BhY2VzSnNvbjogVnNDb2RlV29ya3NwYWNlc0pzb24gPSB7XG4gICAgICAgICAgICAgICAgLi4uKG9wdGlvbnM/LmFkZGl0aW9uYWxXb3Jrc3BhY2VzSnNvblNldHRpbmdzID8/IHt9KSxcbiAgICAgICAgICAgICAgICBleHRlbnNpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zPy5hZGRpdGlvbmFsV29ya3NwYWNlc0pzb25TZXR0aW5ncz8uZXh0ZW5zaW9ucyA/P1xuICAgICAgICAgICAgICAgICAgICAgICAge30pLFxuICAgICAgICAgICAgICAgICAgICByZWNvbW1lbmRhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zPy5kaXNhYmxlTW9ub1JlcG9FeHRlbnNpb25SZWNvbW1lbmRhdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFtdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBERUZBVUxUX1dPUktTUEFDRVNfTU9OT1JFUE9fRVhURU5TSU9OX1JFQ09NTUVOREFUSU9OUyksXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi4ob3B0aW9ucz8uYWRkaXRpb25hbFdvcmtzcGFjZXNKc29uU2V0dGluZ3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/LmV4dGVuc2lvbnM/LnJlY29tbWVuZGF0aW9ucyA/PyBbXSksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmb2xkZXJzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGAoUk9PVCkgJHtyb290UHJvamVjdC5uYW1lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiBwYXRoLnJlbGF0aXZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGguam9pbihyb290UHJvamVjdC5vdXRkaXIsIHdvcmtzcGFjZXNGaWxlUGF0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm9vdFByb2plY3Qub3V0ZGlyLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLi4ucm9vdFByb2plY3Quc3VicHJvamVjdHMubWFwKChzdWJQcm9qZWN0KSA9PiAoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc3ViUHJvamVjdC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogcGF0aC5yZWxhdGl2ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoLmpvaW4ocm9vdFByb2plY3Qub3V0ZGlyLCB3b3Jrc3BhY2VzRmlsZVBhdGgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlByb2plY3Qub3V0ZGlyLFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgfSkpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgW1wiZXNsaW50LndvcmtpbmdEaXJlY3Rvcmllc1wiXTogcm9vdFByb2plY3Quc3VicHJvamVjdHMubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgKHN1YlByb2plY3QpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYC4vJHtwYXRoLnJlbGF0aXZlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb290UHJvamVjdC5vdXRkaXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YlByb2plY3Qub3V0ZGlyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YCxcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgW1wiamVzdC5kaXNhYmxlZFdvcmtzcGFjZUZvbGRlcnNcIl06IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIChyb290UHJvamVjdCBhcyBOb2RlUHJvamVjdCkuamVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcm9vdFByb2plY3QubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnJvb3RQcm9qZWN0LnN1YnByb2plY3RzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHN1YlByb2plY3QpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJQcm9qZWN0IGluc3RhbmNlb2YgTm9kZVByb2plY3QgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFzdWJQcm9qZWN0Lmplc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHN1YlByb2plY3QpID0+IHN1YlByb2plY3QubmFtZSksXG4gICAgICAgICAgICAgICAgICAgIF0uZmlsdGVyKEJvb2xlYW4pLFxuXG4gICAgICAgICAgICAgICAgICAgIC4uLihvcHRpb25zPy5hZGRpdGlvbmFsV29ya3NwYWNlc0pzb25TZXR0aW5ncz8uc2V0dGluZ3MgPz9cbiAgICAgICAgICAgICAgICAgICAgICAgIHt9KSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc3VwZXIocm9vdFByb2plY3QsIGAke3dvcmtzcGFjZXNGaWxlUGF0aH0vJHtvcHRpb25zLmZpbGVuYW1lfWAsIHtcbiAgICAgICAgICAgICAgICBvYmo6IHdvcmtzcGFjZXNKc29uLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihOT05fTU9OT1JFUE9fRVJST1JfTUVTU0FHRSk7XG4gICAgfVxufVxuIl19