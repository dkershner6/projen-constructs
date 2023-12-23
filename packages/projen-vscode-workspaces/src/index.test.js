"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const projen_1 = require("projen");
const _1 = require(".");
describe("VsCodeWorkspaces", () => {
    it("Should error for projects with no subprojects", () => {
        const project = new projen_1.Project({
            name: "hello",
        });
        expect(() => {
            new _1.VsCodeWorkspaces(project, {
                filename: "Projen Constructs Monorepo.code-workspace",
            });
        }).toThrow(_1.NON_MONOREPO_ERROR_MESSAGE);
    });
    it("Should not error for projects with subprojects", () => {
        const project = new projen_1.Project({
            name: "hello",
        });
        new projen_1.Project({
            name: "subproject",
            parent: project,
            outdir: "packages/subproject",
        });
        const workspace = new _1.VsCodeWorkspaces(project, {
            filename: "Projen Constructs Monorepo.code-workspace",
        });
        expect(workspace).toBeInstanceOf(projen_1.JsonFile);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluZGV4LnRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBMkM7QUFDM0Msd0JBQWlFO0FBRWpFLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDOUIsRUFBRSxDQUFDLCtDQUErQyxFQUFFLEdBQUcsRUFBRTtRQUNyRCxNQUFNLE9BQU8sR0FBRyxJQUFJLGdCQUFPLENBQUM7WUFDeEIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLEdBQUcsRUFBRTtZQUNSLElBQUksbUJBQWdCLENBQUMsT0FBTyxFQUFFO2dCQUMxQixRQUFRLEVBQUUsMkNBQTJDO2FBQ3hELENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2QkFBMEIsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGdEQUFnRCxFQUFFLEdBQUcsRUFBRTtRQUN0RCxNQUFNLE9BQU8sR0FBRyxJQUFJLGdCQUFPLENBQUM7WUFDeEIsSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQyxDQUFDO1FBRUgsSUFBSSxnQkFBTyxDQUFDO1lBQ1IsSUFBSSxFQUFFLFlBQVk7WUFDbEIsTUFBTSxFQUFFLE9BQU87WUFDZixNQUFNLEVBQUUscUJBQXFCO1NBQ2hDLENBQUMsQ0FBQztRQUVILE1BQU0sU0FBUyxHQUFHLElBQUksbUJBQWdCLENBQUMsT0FBTyxFQUFFO1lBQzVDLFFBQVEsRUFBRSwyQ0FBMkM7U0FDeEQsQ0FBQyxDQUFDO1FBRUgsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBUSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlLCBQcm9qZWN0IH0gZnJvbSBcInByb2plblwiO1xuaW1wb3J0IHsgTk9OX01PTk9SRVBPX0VSUk9SX01FU1NBR0UsIFZzQ29kZVdvcmtzcGFjZXMgfSBmcm9tIFwiLlwiO1xuXG5kZXNjcmliZShcIlZzQ29kZVdvcmtzcGFjZXNcIiwgKCkgPT4ge1xuICAgIGl0KFwiU2hvdWxkIGVycm9yIGZvciBwcm9qZWN0cyB3aXRoIG5vIHN1YnByb2plY3RzXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIG5hbWU6IFwiaGVsbG9cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZXhwZWN0KCgpID0+IHtcbiAgICAgICAgICAgIG5ldyBWc0NvZGVXb3Jrc3BhY2VzKHByb2plY3QsIHtcbiAgICAgICAgICAgICAgICBmaWxlbmFtZTogXCJQcm9qZW4gQ29uc3RydWN0cyBNb25vcmVwby5jb2RlLXdvcmtzcGFjZVwiLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pLnRvVGhyb3coTk9OX01PTk9SRVBPX0VSUk9SX01FU1NBR0UpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJTaG91bGQgbm90IGVycm9yIGZvciBwcm9qZWN0cyB3aXRoIHN1YnByb2plY3RzXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHtcbiAgICAgICAgICAgIG5hbWU6IFwiaGVsbG9cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IFByb2plY3Qoe1xuICAgICAgICAgICAgbmFtZTogXCJzdWJwcm9qZWN0XCIsXG4gICAgICAgICAgICBwYXJlbnQ6IHByb2plY3QsXG4gICAgICAgICAgICBvdXRkaXI6IFwicGFja2FnZXMvc3VicHJvamVjdFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCB3b3Jrc3BhY2UgPSBuZXcgVnNDb2RlV29ya3NwYWNlcyhwcm9qZWN0LCB7XG4gICAgICAgICAgICBmaWxlbmFtZTogXCJQcm9qZW4gQ29uc3RydWN0cyBNb25vcmVwby5jb2RlLXdvcmtzcGFjZVwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBleHBlY3Qod29ya3NwYWNlKS50b0JlSW5zdGFuY2VPZihKc29uRmlsZSk7XG4gICAgfSk7XG59KTtcbiJdfQ==