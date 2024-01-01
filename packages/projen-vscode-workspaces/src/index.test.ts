import { JsonFile, Project } from "projen";

import { NON_MONOREPO_ERROR_MESSAGE, VsCodeWorkspaces } from ".";

describe("VsCodeWorkspaces", () => {
    it("Should error for projects with no subprojects", () => {
        const project = new Project({
            name: "hello",
        });

        expect(() => {
            new VsCodeWorkspaces(project, {
                filename: "Projen Constructs Monorepo.code-workspace",
            });
        }).toThrow(NON_MONOREPO_ERROR_MESSAGE);
    });

    it("Should not error for projects with subprojects", () => {
        const project = new Project({
            name: "hello",
        });

        new Project({
            name: "subproject",
            parent: project,
            outdir: "packages/subproject",
        });

        const workspace = new VsCodeWorkspaces(project, {
            filename: "Projen Constructs Monorepo.code-workspace",
        });

        expect(workspace).toBeInstanceOf(JsonFile);
    });
});
