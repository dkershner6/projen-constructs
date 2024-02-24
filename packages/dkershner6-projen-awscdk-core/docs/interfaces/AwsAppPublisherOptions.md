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
- [jobConfiguration](AwsAppPublisherOptions.md#jobconfiguration)
- [postPublishJobSteps](AwsAppPublisherOptions.md#postpublishjobsteps)
- [publishTasks](AwsAppPublisherOptions.md#publishtasks)
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

### jobConfiguration

• `Optional` `Readonly` **jobConfiguration**: `Partial`\<`Omit`\<`Job`, ``"steps"``\>\>

The configuration for the deploy job. This is useful for when you want to
change the timeoutMinutes, env, or other job-level configuration.

#### Inherited from

[PublishToAwsOptions](PublishToAwsOptions.md).[jobConfiguration](PublishToAwsOptions.md#jobconfiguration)

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

### workflowBootstrapSteps

• `Optional` `Readonly` **workflowBootstrapSteps**: `JobStep`[]

___

### workflowNodeVersion

• `Optional` `Readonly` **workflowNodeVersion**: `string`
