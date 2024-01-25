[dkershner6-projen-awscdk-core](../README.md) / [Exports](../modules.md) / PublishToAwsOptions

# Interface: PublishToAwsOptions

## Table of contents

### Properties

- [autoAddJob](PublishToAwsOptions.md#autoaddjob)
- [configureAwsCredentialsJobSteps](PublishToAwsOptions.md#configureawscredentialsjobsteps)
- [deployJobStepConfiguration](PublishToAwsOptions.md#deployjobstepconfiguration)
- [env](PublishToAwsOptions.md#env)

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

### env

• `Optional` `Readonly` **env**: `Record`\<`string`, `string`\>

A map of environment variables that are available to all steps in the
job. You can also set environment variables for the entire workflow or an
individual step.
