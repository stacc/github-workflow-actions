# Version action
This reusable workflow should be used on publish after [version](./version.md) has been run. If your repo produced a docker image, this action will publish it to the registry.
It will then provide evidence to kosli

## Usage
Almost all inputs have defaults, so you can just use this action with minimal config
```yaml
  - uses: stacc/github-workflow-actions/publish-image@v1
    with:
      image: "my-image-name"
      snyk-org: "my-team"
```
With everything version
```yaml
on:
  release:
    types: [published, edited]
#...
  # Secrets are inherited from within the Stacc Org
jobs:
  publish:
  - uses: stacc/github-workflow-actions/publish-image@v1
    with:
      image:
      container-registry-host:
      container-registry-name:
      helm-repo:
      kosli-declare:
      kosli-pipeline:
      kosli-owner:
      kosli-host:
      kosli-environment:
      kosli-environment-type:
      npm-test-script:
      npm-test-output-dir:
      node-version:
      snyk-org:
      snyk-test-additional-params:
      auto-approve:
      latest-branch:

```

## Secrets
Secrets are inherited. Stacc Org secrets are used by default.

## Inputs
| Name                        | Description                                | Default                                                               | Required |
|-----------------------------|--------------------------------------------|-----------------------------------------------------------------------|----------|
| image                       | image name like 'services-someservice'     |                                                                       | yes      |
| container-registry-host     | registry host                              | stacc.azurecr.io                                                      | no       |
| helm-repo                   | home of the helm charts                    | stacc                                                                 | no       |
| kosli-declare               | what types of evidence should we collect   | pull-request,artifact,test,container-security-scan,code-security-scan | no       |
| kosli-pipeline              | Name of the Kosli pipeline                 | ${{inputs.image}}                                                     | no       |
| kosli-owner                 | Name of the Kosli owner                    | stacc                                                                 | no       |
| kosli-host                  | Kosli host                                 | https://stacc.kosli.com                                               | no       |
| kosli-environment           | Name of the environment                    | stacc-acr-registry                                                    | no       |
| kosli-environment-type      | Type of environment                        | server ([K8S, ECS, server, S3, lambda])                               | no       |
| junit-result            | JUnit result (as xml) converted to string  | undefined                                                             | no       |
| snyk-org                    | Snyk organization                          | undefined                                                             | yes      |
| snyk-test-additional-params | Additional parameters to pass to Snyk test | undefined                                                             | no       |
| auto-approve                | Should this pipeline be auto approved?     | true                                                                  | no       |
| latest-branch               | Latest branch name (or tag name)           | latest                                                                | no       |

## Outputs
| Name                      | Description | Example      | 
|---------------------------|-------------|--------------|
| TODO:
