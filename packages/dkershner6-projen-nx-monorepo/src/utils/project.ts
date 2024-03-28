/* eslint-disable @typescript-eslint/no-explicit-any */

import { Component, Project } from "projen";

/**
 * Utility for projen projects
 * @experimental
 */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ProjectUtils {
    /**
     * List all parent class names of the given class (includes the given class's name as the last element)
     * @internal
     */
    // eslint-disable-next-line no-inner-declarations
    function listParentClassNames(clazz?: {
        new (...args: any[]): any;
    }): string[] {
        if (!clazz?.name) {
            return [];
        }
        return [
            ...listParentClassNames(Object.getPrototypeOf(clazz)),
            clazz.name,
        ];
    }

    /**
     * Returns whether the given project is an instance of the given project class.
     * Uses the class name to perform this check, such that the check still passes for
     * classes imported from mismatching package versions.
     */
    export function isNamedInstanceOf<
        TParent extends Project | Component,
        TChild extends TParent,
    >(
        instance: TParent,
        clazz: { new (...args: any[]): TChild },
    ): instance is TChild {
        return new Set(listParentClassNames(instance.constructor as any)).has(
            clazz.name,
        );
    }
}
