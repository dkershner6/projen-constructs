[**dkershner6-projen-awscdk-core**](../README.md) • **Docs**

***

[dkershner6-projen-awscdk-core](../globals.md) / PublishToAwsOptions

# Interface: PublishToAwsOptions

## Extended by

- [`AwsAppPublisherOptions`](AwsAppPublisherOptions.md)

## Properties

### autoAddJob?

> `readonly` `optional` **autoAddJob**: `boolean`

Whether or not to automatically add the job to the release workflow.

#### Default

```ts
true
```

***

### configureAwsCredentialsJobSteps?

> `readonly` `optional` **configureAwsCredentialsJobSteps**: `JobStep`[]

Typically a single step involved in configuring AWS credentials.
AKA aws-actions/configure-aws-credentials

***

### deployJobStepConfiguration?

> `readonly` `optional` **deployJobStepConfiguration**: `JobStepConfiguration`

Additional configuration for the deploy job step.

***

### jobConfiguration?

> `readonly` `optional` **jobConfiguration**: `Partial`\<`Omit`\<`Job`, `"steps"`\>\>

The configuration for the deploy job. This is useful for when you want to
change the timeoutMinutes, env, or other job-level configuration.

***

### postPublishJobSteps?

> `readonly` `optional` **postPublishJobSteps**: `JobStep`[]

Job steps to run after the deploy step.
