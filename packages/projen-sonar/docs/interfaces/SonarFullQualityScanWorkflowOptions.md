[**projen-sonar**](../README.md) • **Docs**

***

[projen-sonar](../globals.md) / SonarFullQualityScanWorkflowOptions

# Interface: SonarFullQualityScanWorkflowOptions

## Properties

### actionVersion?

> `readonly` `optional` **actionVersion**: `string`

The version of the Sonar Quality Scan action to use.

***

### branches?

> `readonly` `optional` **branches**: `string`[]

The branches to run the workflow on (push).

***

### jobConfig?

> `readonly` `optional` **jobConfig**: `Partial`\<`Job`\>

The job configuration for the Sonar Quality Scan job.

#### Default

```ts
Same as the build job
```

***

### workflowOptions?

> `readonly` `optional` **workflowOptions**: `GithubWorkflowOptions`
