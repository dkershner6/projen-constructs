[**dkershner6-projen-awscdk-core**](../README.md) • **Docs**

***

[dkershner6-projen-awscdk-core](../globals.md) / AwsAppPublisherOptions

# Interface: AwsAppPublisherOptions

## Extends

- [`PublishToAwsOptions`](PublishToAwsOptions.md)

## Properties

### autoAddJob?

> `readonly` `optional` **autoAddJob**: `boolean`

Whether or not to automatically add the job to the release workflow.

#### Default

```ts
true
```

#### Inherited from

[`PublishToAwsOptions`](PublishToAwsOptions.md).[`autoAddJob`](PublishToAwsOptions.md#autoaddjob)

***

### configureAwsCredentialsJobSteps?

> `readonly` `optional` **configureAwsCredentialsJobSteps**: `JobStep`[]

Typically a single step involved in configuring AWS credentials.
AKA aws-actions/configure-aws-credentials

#### Inherited from

[`PublishToAwsOptions`](PublishToAwsOptions.md).[`configureAwsCredentialsJobSteps`](PublishToAwsOptions.md#configureawscredentialsjobsteps)

***

### defaultReleaseBranch?

> `readonly` `optional` **defaultReleaseBranch**: `string`

***

### deployJobStepBuilder()

> `readonly` **deployJobStepBuilder**: (`builderParams`) => `JobStep`

#### Parameters

• **builderParams**: [`DeployJobStepBuilderParams`](DeployJobStepBuilderParams.md)

#### Returns

`JobStep`

JobStep to deploy the App

***

### deployJobStepConfiguration?

> `readonly` `optional` **deployJobStepConfiguration**: `JobStepConfiguration`

Additional configuration for the deploy job step.

#### Inherited from

[`PublishToAwsOptions`](PublishToAwsOptions.md).[`deployJobStepConfiguration`](PublishToAwsOptions.md#deployjobstepconfiguration)

***

### jobConfiguration?

> `readonly` `optional` **jobConfiguration**: `Partial`\<`Omit`\<`Job`, `"steps"`\>\>

The configuration for the deploy job. This is useful for when you want to
change the timeoutMinutes, env, or other job-level configuration.

#### Inherited from

[`PublishToAwsOptions`](PublishToAwsOptions.md).[`jobConfiguration`](PublishToAwsOptions.md#jobconfiguration)

***

### postPublishJobSteps?

> `readonly` `optional` **postPublishJobSteps**: `JobStep`[]

Job steps to run after the deploy step.

#### Inherited from

[`PublishToAwsOptions`](PublishToAwsOptions.md).[`postPublishJobSteps`](PublishToAwsOptions.md#postpublishjobsteps)

***

### publishTasks?

> `readonly` `optional` **publishTasks**: `boolean`

***

### workflowBootstrapSteps?

> `readonly` `optional` **workflowBootstrapSteps**: `JobStep`[]

***

### workflowNodeVersion?

> `readonly` `optional` **workflowNodeVersion**: `string`
