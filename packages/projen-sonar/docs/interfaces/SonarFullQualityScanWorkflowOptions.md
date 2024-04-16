[projen-sonar](../README.md) / [Exports](../modules.md) / SonarFullQualityScanWorkflowOptions

# Interface: SonarFullQualityScanWorkflowOptions

## Table of contents

### Properties

- [actionVersion](SonarFullQualityScanWorkflowOptions.md#actionversion)
- [branches](SonarFullQualityScanWorkflowOptions.md#branches)
- [jobConfig](SonarFullQualityScanWorkflowOptions.md#jobconfig)
- [workflowOptions](SonarFullQualityScanWorkflowOptions.md#workflowoptions)

## Properties

### actionVersion

• `Optional` `Readonly` **actionVersion**: `string`

The version of the Sonar Quality Scan action to use.

___

### branches

• `Optional` `Readonly` **branches**: `string`[]

The branches to run the workflow on (push).

___

### jobConfig

• `Optional` `Readonly` **jobConfig**: `Partial`\<`Job`\>

The job configuration for the Sonar Quality Scan job.

**`Default`**

```ts
Same as the build job
```

___

### workflowOptions

• `Optional` `Readonly` **workflowOptions**: `GithubWorkflowOptions`
