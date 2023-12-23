import { NodeProject } from "projen/lib/javascript";
import { Nvmrc } from ".";

describe("Nvmrc", () => {
    it("Should create a .nvmrc file with the correct node version when specified", () => {
        const project = new NodeProject({
            name: "hello",
            defaultReleaseBranch: "main",
        });

        const NODE_VERSION = "20.10.0";

        const nvmrc = new Nvmrc(project, {
            nodeVersion: NODE_VERSION,
        });

        expect(nvmrc.path).toEqual(".nvmrc");
        // @ts-expect-error - Violating access
        expect(nvmrc.lines).toContainEqual(NODE_VERSION);
    });

    it("Should create a .nvmrc file with the maxNodeVersion when no version is provided", () => {
        const NODE_VERSION = "20.10.0";

        const project = new NodeProject({
            name: "hello",
            defaultReleaseBranch: "main",
            maxNodeVersion: NODE_VERSION,
        });

        const nvmrc = new Nvmrc(project);

        expect(nvmrc.path).toEqual(".nvmrc");
        // @ts-expect-error - Violating access
        expect(nvmrc.lines).toContainEqual(NODE_VERSION);
    });

    it("Should create a .nvmrc file with the minNodeVersion when no version is provided", () => {
        const NODE_VERSION = "20.10.0";

        const project = new NodeProject({
            name: "hello",
            defaultReleaseBranch: "main",
            minNodeVersion: NODE_VERSION,
        });

        const nvmrc = new Nvmrc(project);

        expect(nvmrc.path).toEqual(".nvmrc");
        // @ts-expect-error - Violating access
        expect(nvmrc.lines).toContainEqual(NODE_VERSION);
    });

    it("Should create a .nvmrc file with the lts/* when no version is provided", () => {
        const project = new NodeProject({
            name: "hello",
            defaultReleaseBranch: "main",
        });

        const nvmrc = new Nvmrc(project);

        expect(nvmrc.path).toEqual(".nvmrc");
        // @ts-expect-error - Violating access
        expect(nvmrc.lines).toContainEqual("lts/*");
    });
});
