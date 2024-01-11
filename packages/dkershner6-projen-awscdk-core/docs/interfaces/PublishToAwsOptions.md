[dkershner6-projen-awscdk-core](../README.md) / [Exports](../modules.md) / PublishToAwsOptions

# Interface: PublishToAwsOptions

## Table of contents

### Properties

- [autoAddJob](PublishToAwsOptions.md#autoaddjob)
- [configureAwsCredentialsJobSteps](PublishToAwsOptions.md#configureawscredentialsjobsteps)
- [deployJobStepConfiguration](PublishToAwsOptions.md#deployjobstepconfiguration)

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

• `Readonly` **configureAwsCredentialsJobSteps**: `JobStep`[]

Typically a single step involved in configuring AWS credentials.
AKA aws-actions/configure-aws-credentials

___

### deployJobStepConfiguration

• `Optional` `Readonly` **deployJobStepConfiguration**: `JobStepConfiguration`

Additional configuration for the deploy job step.
