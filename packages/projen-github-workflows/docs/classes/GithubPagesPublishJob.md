[**projen-github-workflows**](../README.md) • **Docs**

***

[projen-github-workflows](../globals.md) / GithubPagesPublishJob

# Class: GithubPagesPublishJob

## Implements

- `Job`

## Constructors

### new GithubPagesPublishJob()

> **new GithubPagesPublishJob**(`options`?, `jobOptions`?): [`GithubPagesPublishJob`](GithubPagesPublishJob.md)

#### Parameters

• **options?**: [`GithubPagesPublishJobOptions`](../interfaces/GithubPagesPublishJobOptions.md)

• **jobOptions?**: `Job`

#### Returns

[`GithubPagesPublishJob`](GithubPagesPublishJob.md)

## Properties

### concurrency?

> `optional` **concurrency**: `unknown`

**`Experimental`**

Concurrency ensures that only a single job or workflow using the same
concurrency group will run at a time. A concurrency group can be any
string or expression. The expression can use any context except for the
secrets context.

#### Implementation of

`Job.concurrency`

***

### container?

> `optional` **container**: `ContainerOptions`

A container to run any steps in a job that don't already specify a
container. If you have steps that use both script and container actions,
the container actions will run as sibling containers on the same network
with the same volume mounts.

#### Implementation of

`Job.container`

***

### continueOnError?

> `optional` **continueOnError**: `boolean`

Prevents a workflow run from failing when a job fails. Set to true to
allow a workflow run to pass when this job fails.

#### Implementation of

`Job.continueOnError`

***

### defaults?

> `optional` **defaults**: `JobDefaults`

A map of default settings that will apply to all steps in the job. You
can also set default settings for the entire workflow.

#### Implementation of

`Job.defaults`

***

### env?

> `optional` **env**: `Record`\<`string`, `string`\>

A map of environment variables that are available to all steps in the
job. You can also set environment variables for the entire workflow or an
individual step.

#### Implementation of

`Job.env`

***

### environment?

> `optional` **environment**: `unknown`

The environment that the job references. All environment protection rules
must pass before a job referencing the environment is sent to a runner.

#### See

https://docs.github.com/en/actions/reference/environments

#### Implementation of

`Job.environment`

***

### if?

> `optional` **if**: `string`

You can use the if conditional to prevent a job from running unless a
condition is met. You can use any supported context and expression to
create a conditional.

#### Implementation of

`Job.if`

***

### name?

> `optional` **name**: `string`

The name of the job displayed on GitHub.

#### Implementation of

`Job.name`

***

### needs?

> `optional` **needs**: `string`[]

Identifies any jobs that must complete successfully before this job will
run. It can be a string or array of strings. If a job fails, all jobs
that need it are skipped unless the jobs use a conditional expression
that causes the job to continue.

#### Implementation of

`Job.needs`

***

### outputs?

> `optional` **outputs**: `Record`\<`string`, `JobStepOutput`\>

A map of outputs for a job. Job outputs are available to all downstream
jobs that depend on this job.

#### Implementation of

`Job.outputs`

***

### permissions

> **permissions**: `JobPermissions`

You can modify the default permissions granted to the GITHUB_TOKEN, adding
or removing access as required, so that you only allow the minimum required
access.

Use `{ contents: READ }` if your job only needs to clone code.

This is intentionally a required field since it is required in order to
allow workflows to run in GitHub repositories with restricted default
access.

#### See

https://docs.github.com/en/actions/reference/authentication-in-a-workflow#permissions-for-the-github_token

#### Implementation of

`Job.permissions`

***

### runsOn?

> `optional` **runsOn**: `string`[]

The type of machine to run the job on. The machine can be either a
GitHub-hosted runner or a self-hosted runner.

#### Example

```ts
["ubuntu-latest"]
```

#### Implementation of

`Job.runsOn`

***

### runsOnGroup?

> `optional` **runsOnGroup**: `GroupRunnerOptions`

Github Runner Group selection options

#### Description

Defines a target Runner Group by name and/or labels

#### Throws

if both `runsOn` and `runsOnGroup` are specified

#### Implementation of

`Job.runsOnGroup`

***

### services?

> `optional` **services**: `Record`\<`string`, `ContainerOptions`\>

Used to host service containers for a job in a workflow. Service
containers are useful for creating databases or cache services like Redis.
The runner automatically creates a Docker network and manages the life
cycle of the service containers.

#### Implementation of

`Job.services`

***

### steps

> **steps**: `JobStep`[]

A job contains a sequence of tasks called steps. Steps can run commands,
run setup tasks, or run an action in your repository, a public repository,
or an action published in a Docker registry. Not all steps run actions,
but all actions run as a step. Each step runs in its own process in the
runner environment and has access to the workspace and filesystem.
Because steps run in their own process, changes to environment variables
are not preserved between steps. GitHub provides built-in steps to set up
and complete a job.

#### Implementation of

`Job.steps`

***

### strategy?

> `optional` **strategy**: `JobStrategy`

A strategy creates a build matrix for your jobs. You can define different
variations to run each job in.

#### Implementation of

`Job.strategy`

***

### timeoutMinutes?

> `optional` **timeoutMinutes**: `number`

The maximum number of minutes to let a job run before GitHub
automatically cancels it.

#### Default

```ts
360
```

#### Implementation of

`Job.timeoutMinutes`

***

### tools?

> `optional` **tools**: `Tools`

Tools required for this job. Translates into `actions/setup-xxx` steps at
the beginning of the job.

#### Implementation of

`Job.tools`
