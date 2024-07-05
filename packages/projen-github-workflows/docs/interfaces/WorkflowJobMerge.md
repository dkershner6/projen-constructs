[**projen-github-workflows**](../README.md) • **Docs**

***

[projen-github-workflows](../globals.md) / WorkflowJobMerge

# Interface: WorkflowJobMerge

## Properties

### appendSteps?

> `readonly` `optional` **appendSteps**: `JobStep`[]

Job steps to place at the end of every workflow job.
These can be used to clean up anything.

Steps are deduplicated by name with existing steps.

***

### job?

> `readonly` `optional` **job**: `Partial`\<`Omit`\<`Job`, `"steps"`\>\>

What fields to merge into the job.

***

### prependSteps?

> `readonly` `optional` **prependSteps**: `JobStep`[]

Job steps to place at the beginning of every workflow job.
These can be used to bootstrap anything.

Steps are deduplicated by name with existing steps.

***

### workflowNamePrefixJobNameEntries?

> `readonly` `optional` **workflowNamePrefixJobNameEntries**: [`string`, `string`][]

Filter the workflow jobs to override by workflow name prefix (starts with) and job name.

#### Default

```ts
- If not provided, all jobs in all workflows will be overridden.
```
