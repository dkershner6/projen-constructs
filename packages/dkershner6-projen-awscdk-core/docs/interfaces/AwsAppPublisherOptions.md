[dkershner6-projen-awscdk-core](../README.md) / [Exports](../modules.md) / AwsAppPublisherOptions

# Interface: AwsAppPublisherOptions

## Table of contents

### Properties

- [configureAwsCredentialsJobSteps](AwsAppPublisherOptions.md#configureawscredentialsjobsteps)
- [defaultReleaseBranch](AwsAppPublisherOptions.md#defaultreleasebranch)
- [deployJobStepBuilder](AwsAppPublisherOptions.md#deployjobstepbuilder)
- [publishTasks](AwsAppPublisherOptions.md#publishtasks)
- [runsOn](AwsAppPublisherOptions.md#runson)
- [runsOnGroup](AwsAppPublisherOptions.md#runsongroup)
- [workflowBootstrapSteps](AwsAppPublisherOptions.md#workflowbootstrapsteps)
- [workflowNodeVersion](AwsAppPublisherOptions.md#workflownodeversion)

## Properties

### configureAwsCredentialsJobSteps

• `Readonly` **configureAwsCredentialsJobSteps**: `JobStep`[]

Typically a single step involved in configuring AWS credentials.
AKA aws-actions/configure-aws-credentials

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
