
## Prerequisites

Install the following dependency:

- [Volta](https://volta.sh/)

```bash
$ curl https://get.volta.sh | bash
```

## Installation

```bash
$ volta install node
$ volta install yarn
$ yarn install
$ yarn husky:prepare
```

## Tests

```bash
# unit tests
$ yarn test
```

## Linter and Formatting

These tasks run automatically for changed files before commit to github, but please feel to run them manually anytime if needed.

```bash
$ yarn format
$ yarn lint
```

## Storybook

```bash
$ yarn storybook
$ yarn build-storybook
```

## Environment Variables

| Key               | Category    | Description                      |
| ----------------- | ----------- | -------------------------------- |
