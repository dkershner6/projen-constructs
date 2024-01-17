[projen-github-workflows](../README.md) / [Exports](../modules.md) / GithubPagesPublishJob

# Class: GithubPagesPublishJob

## Implements

- `Job`

## Table of contents

### Constructors

- [constructor](GithubPagesPublishJob.md#constructor)

### Properties

- [concurrency](GithubPagesPublishJob.md#concurrency)
- [container](GithubPagesPublishJob.md#container)
- [continueOnError](GithubPagesPublishJob.md#continueonerror)
- [defaults](GithubPagesPublishJob.md#defaults)
- [env](GithubPagesPublishJob.md#env)
- [environment](GithubPagesPublishJob.md#environment)
- [if](GithubPagesPublishJob.md#if)
- [name](GithubPagesPublishJob.md#name)
- [needs](GithubPagesPublishJob.md#needs)
- [outputs](GithubPagesPublishJob.md#outputs)
- [permissions](GithubPagesPublishJob.md#permissions)
- [runsOn](GithubPagesPublishJob.md#runson)
- [runsOnGroup](GithubPagesPublishJob.md#runsongroup)
- [services](GithubPagesPublishJob.md#services)
- [steps](GithubPagesPublishJob.md#steps)
- [strategy](GithubPagesPublishJob.md#strategy)
- [timeoutMinutes](GithubPagesPublishJob.md#timeoutminutes)
- [tools](GithubPagesPublishJob.md#tools)

## Constructors

### constructor

• **new GithubPagesPublishJob**(`options?`, `jobOptions?`): [`GithubPagesPublishJob`](GithubPagesPublishJob.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GithubPagesPublishJobOptions`](../interfaces/GithubPagesPublishJobOptions.md) |
| `jobOptions?` | `Job` |

#### Returns

[`GithubPagesPublishJob`](GithubPagesPublishJob.md)

## Properties

### concurrency

• `Optional` **concurrency**: `unknown`

#### Implementation of

Job.concurrency

___

### container

• `Optional` **container**: `ContainerOptions`

#### Implementation of

Job.container

___

### continueOnError

• `Optional` **continueOnError**: `boolean`

#### Implementation of

Job.continueOnError

___

### defaults

• `Optional` **defaults**: `JobDefaults`

#### Implementation of

Job.defaults

___

### env

• `Optional` **env**: `Record`\<`string`, `string`\>

#### Implementation of

Job.env

___

### environment

• `Optional` **environment**: `unknown`

#### Implementation of

Job.environment

___

### if

• `Optional` **if**: `string`

#### Implementation of

Job.if

___

### name

• `Optional` **name**: `string`

#### Implementation of

Job.name

___

### needs

• `Optional` **needs**: `string`[]

#### Implementation of

Job.needs

___

### outputs

• `Optional` **outputs**: `Record`\<`string`, `JobStepOutput`\>

#### Implementation of

Job.outputs

___

### permissions

• **permissions**: `JobPermissions`

#### Implementation of

Job.permissions

___

### runsOn

• `Optional` **runsOn**: `string`[]

#### Implementation of

Job.runsOn

___

### runsOnGroup

• `Optional` **runsOnGroup**: `GroupRunnerOptions`

#### Implementation of

Job.runsOnGroup

___

### services

• `Optional` **services**: `Record`\<`string`, `ContainerOptions`\>

#### Implementation of

Job.services

___

### steps

• **steps**: `JobStep`[]

#### Implementation of

Job.steps

___

### strategy

• `Optional` **strategy**: `JobStrategy`

#### Implementation of

Job.strategy

___

### timeoutMinutes

• `Optional` **timeoutMinutes**: `number`

#### Implementation of

Job.timeoutMinutes

___

### tools

• `Optional` **tools**: `Tools`

#### Implementation of

Job.tools
