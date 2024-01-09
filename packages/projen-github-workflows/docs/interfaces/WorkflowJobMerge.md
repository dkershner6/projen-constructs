[projen-github-workflows](../README.md) / [Exports](../modules.md) / WorkflowJobMerge

# Interface: WorkflowJobMerge

## Table of contents

### Properties

- [appendSteps](WorkflowJobMerge.md#appendsteps)
- [job](WorkflowJobMerge.md#job)
- [prependSteps](WorkflowJobMerge.md#prependsteps)
- [workflowNamePrefixJobNameEntries](WorkflowJobMerge.md#workflownameprefixjobnameentries)

## Properties

### appendSteps

• `Optional` `Readonly` **appendSteps**: `JobStep`[]

Job steps to place at the end of every workflow job.
These can be used to clean up anything.

Steps are deduplicated by name with existing steps.

___

### job

• `Optional` `Readonly` **job**: `Partial`\<`Omit`\<`Job`, ``"steps"``\>\>

What fields to merge into the job.

___

### prependSteps

• `Optional` `Readonly` **prependSteps**: `JobStep`[]

Job steps to place at the beginning of every workflow job.
These can be used to bootstrap anything.

Steps are deduplicated by name with existing steps.

___

### workflowNamePrefixJobNameEntries

• `Optional` `Readonly` **workflowNamePrefixJobNameEntries**: [`string`, `string`][]

Filter the workflow jobs to override by workflow name prefix (starts with) and job name.

**`Default`**

```ts
- If not provided, all jobs in all workflows will be overridden.
```
