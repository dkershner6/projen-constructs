[dkershner6-projen-awscdk-core](../README.md) / [Exports](../modules.md) / PublishToAwsOptions

# Interface: PublishToAwsOptions

## Hierarchy

- **`PublishToAwsOptions`**

  ↳ [`AwsAppPublisherOptions`](AwsAppPublisherOptions.md)

## Table of contents

### Properties

- [autoAddJob](PublishToAwsOptions.md#autoaddjob)
- [configureAwsCredentialsJobSteps](PublishToAwsOptions.md#configureawscredentialsjobsteps)
- [deployJobStepConfiguration](PublishToAwsOptions.md#deployjobstepconfiguration)
- [jobConfiguration](PublishToAwsOptions.md#jobconfiguration)
- [postPublishJobSteps](PublishToAwsOptions.md#postpublishjobsteps)

## Properties

### autoAddJob

• `Optional` `Readonly` **autoAddJob**: `boolean`

Whether or not to automatically add the job to the release workflow.

**`Default`**

```ts
true
```

___

### configureAwsCredentialsJobSteps

• `Optional` `Readonly` **configureAwsCredentialsJobSteps**: `JobStep`[]

Typically a single step involved in configuring AWS credentials.
AKA aws-actions/configure-aws-credentials

___

### deployJobStepConfiguration

• `Optional` `Readonly` **deployJobStepConfiguration**: `JobStepConfiguration`

Additional configuration for the deploy job step.

___

### jobConfiguration

• `Optional` `Readonly` **jobConfiguration**: `Partial`\<`Omit`\<`Job`, ``"steps"``\>\>

The configuration for the deploy job. This is useful for when you want to
change the timeoutMinutes, env, or other job-level configuration.

___

### postPublishJobSteps

• `Optional` `Readonly` **postPublishJobSteps**: `JobStep`[]

Job steps to run after the deploy step.
