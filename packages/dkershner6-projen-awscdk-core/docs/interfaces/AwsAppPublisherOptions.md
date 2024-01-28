[dkershner6-projen-awscdk-core](../README.md) / [Exports](../modules.md) / AwsAppPublisherOptions

# Interface: AwsAppPublisherOptions

## Hierarchy

- [`PublishToAwsOptions`](PublishToAwsOptions.md)

  ↳ **`AwsAppPublisherOptions`**

## Table of contents

### Properties

- [autoAddJob](AwsAppPublisherOptions.md#autoaddjob)
- [configureAwsCredentialsJobSteps](AwsAppPublisherOptions.md#configureawscredentialsjobsteps)
- [defaultReleaseBranch](AwsAppPublisherOptions.md#defaultreleasebranch)
- [deployJobStepBuilder](AwsAppPublisherOptions.md#deployjobstepbuilder)
- [deployJobStepConfiguration](AwsAppPublisherOptions.md#deployjobstepconfiguration)
- [env](AwsAppPublisherOptions.md#env)
- [postPublishJobSteps](AwsAppPublisherOptions.md#postpublishjobsteps)
- [publishTasks](AwsAppPublisherOptions.md#publishtasks)
- [runsOn](AwsAppPublisherOptions.md#runson)
- [runsOnGroup](AwsAppPublisherOptions.md#runsongroup)
- [workflowBootstrapSteps](AwsAppPublisherOptions.md#workflowbootstrapsteps)
- [workflowNodeVersion](AwsAppPublisherOptions.md#workflownodeversion)

## Properties

### autoAddJob

• `Optional` `Readonly` **autoAddJob**: `boolean`

Whether or not to automatically add the job to the release workflow.

**`Default`**

```ts
true
```

#### Inherited from

[PublishToAwsOptions](PublishToAwsOptions.md).[autoAddJob](PublishToAwsOptions.md#autoaddjob)

___

### configureAwsCredentialsJobSteps

• `Optional` `Readonly` **configureAwsCredentialsJobSteps**: `JobStep`[]

Typically a single step involved in configuring AWS credentials.
AKA aws-actions/configure-aws-credentials

#### Inherited from

[PublishToAwsOptions](PublishToAwsOptions.md).[configureAwsCredentialsJobSteps](PublishToAwsOptions.md#configureawscredentialsjobsteps)

___

### defaultReleaseBranch

• `Optional` `Readonly` **defaultReleaseBranch**: `string`

___

### deployJobStepBuilder

• `Readonly` **deployJobStepBuilder**: (`builderParams`: [`DeployJobStepBuilderParams`](DeployJobStepBuilderParams.md)) => `JobStep`

A function that builds the JobStep to deploy the App.

**`Param`**

The deploy task of the project.

**`Param`**

The branch name being published. Undefined for the default branch.

#### Type declaration

▸ (`builderParams`): `JobStep`

A function that builds the JobStep to deploy the App.

##### Parameters

| Name | Type |
| :------ | :------ |
| `builderParams` | [`DeployJobStepBuilderParams`](DeployJobStepBuilderParams.md) |

##### Returns

`JobStep`

JobStep to deploy the App

___

### deployJobStepConfiguration

• `Optional` `Readonly` **deployJobStepConfiguration**: `JobStepConfiguration`

Additional configuration for the deploy job step.

#### Inherited from

[PublishToAwsOptions](PublishToAwsOptions.md).[deployJobStepConfiguration](PublishToAwsOptions.md#deployjobstepconfiguration)

___

### env

• `Optional` `Readonly` **env**: `Record`\<`string`, `string`\>

A map of environment variables that are available to all steps in the
job. You can also set environment variables for the entire workflow or an
individual step.

#### Inherited from

[PublishToAwsOptions](PublishToAwsOptions.md).[env](PublishToAwsOptions.md#env)

___

### postPublishJobSteps

• `Optional` `Readonly` **postPublishJobSteps**: `JobStep`[]

Job steps to run after the deploy step.

#### Inherited from

[PublishToAwsOptions](PublishToAwsOptions.md).[postPublishJobSteps](PublishToAwsOptions.md#postpublishjobsteps)

___

### publishTasks

• `Optional` `Readonly` **publishTasks**: `boolean`

___

### runsOn

• `Optional` `Readonly` **runsOn**: `string`[]

___

### runsOnGroup

• `Optional` `Readonly` **runsOnGroup**: `GroupRunnerOptions`

___

### workflowBootstrapSteps

• `Optional` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

___

### workflowNodeVersion

• `Optional` `Readonly` **workflowNodeVersion**: `string`
