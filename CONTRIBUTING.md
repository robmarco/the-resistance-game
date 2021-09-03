# Contributing to this Repo

We would love for you to contribute to this repository and help make it even better than it is today! As a contributor, here are the guidelines we would like you to follow:

<hr>

## Table of Contents

1. [Found a Bug?](#found-a-bug)
2. [Submit a Pull Request](#submit-a-pull-request)
3. [Squashing commits](#squashing-commits)
4. [Commit message guidelines](#commit-message-guidelines)
   - [Commit message format](#commit-message-format)
   - [Commit types](#commit-types)
   - [Scope](#scope)
   - [Subject](#subject)
   - [Body](#body)
   - [Footer](#footer)
   - [Revert](#revert)
   - [Example of usage](#example-of-usage)

<hr>

## Found a Bug?

If you find a bug in the source code, you can help us by submitting an issue to our GitHub Repository. Even better, you can [submit a Pull Request](#submit-a-pull-request) with a fix or just a new feature.

## Submit a Pull Request

Before submitting a pull request, please make sure the following is done:

- Make sure your code lints following our coding guidelines (format your code).
- Ensure the test suite passes.

## Commit Message Guidelines

Check more information about [Conventional Commits](https://conventionalcommits.org)

### Commit Message Format

Each commit message consists of a **header**, a **body** and a **footer**. The header has a special format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

The footer should contain a [closing reference to an issue](https://help.github.com/articles/closing-issues-via-commit-messages/) if any.

Samples: (even more [samples](https://github.com/angular/angular/commits/master))

```
docs(changelog): update changelog to beta.5
```

```
fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.
```

### Commit types

| Commit Type | Title | Description | Emoji | Release | Include in changelog |
| :---: | --- | --- | :---: | --- | :---: |
| `feat` | Features | A new feature | ✨ | `minor` | `true` |
| `fix`  | Bug Fixes | A bug Fix | 🐛 | `patch` | `true` |
| `docs` | Documentation | Documentation only changes | 📚 | `patch` if `scope` is `readme` | `true` |
| `style` | Styles | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) | 💎 | - | `true` |
| `refactor` | Code Refactoring | A code change that neither fixes a bug nor adds a feature | 📦 | - | `true` |
| `perf` | Performance Improvements | A code change that improves performance | 🚀 | `patch` | `true` |
| `test` | Tests | Adding missing tests or correcting existing tests | 🚨 | - | `true` |
| `build` | Builds | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm) | 🛠 | `patch` | `true` |
| `ci` | Continuous Integrations | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) | ⚙️ | - | `true` |
| `chore` | Chores | Other changes that don't modify src or test files | ♻️ | - | `true` |
| `revert` | Reverts | Reverts a previous commit | 🗑 | - | `true` |


### Subject

The subject contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense ("change", not "changed" nor "changes").
The body should include the motivation for the change and contrast this with previous behavior.

### Footer

The footer should contain any information about **Breaking Changes** and is also the place to reference GitHub issues that this commit **Closes**.

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Revert

If the commit reverts a previous commit, it should begin with `revert:`, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Example of usage

This is an example of how to follow this commit message convention for a project (copy/paste from AngularJS repository).

```
feat($compile): simplify isolate scope bindings

Changed the isolate scope binding options to:
  - @attr - attribute binding (including interpolation)
  - =model - by-directional model binding
  - &expr - expression execution binding

This change simplifies the terminology as well as
number of choices available to the developer. It
also supports local name aliasing from the parent.

Closes #234, #461

BREAKING CHANGE: isolate scope bindings definition has changed and the inject option for the directive controller injection was removed.

To migrate the code follow the example below:

Before:

scope: {
  myAttr: 'attribute',
  myBind: 'bind',
  myExpression: 'expression',
  myEval: 'evaluate',
  myAccessor: 'accessor'
}

After:

scope: {
  myAttr: '@',
  myBind: '@',
  myExpression: '&',
  // myEval - usually not useful, but in cases where the expression is assignable, you can use '='
  myAccessor: '=' // in directive's template change myAccessor() to myAccessor
}

The removed `inject` wasn't generaly useful for directives so there should be no code using it.
```