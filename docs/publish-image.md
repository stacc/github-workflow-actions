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
      junit-artifact-name: name-i-gave-my-upload-artifact
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
      helm-repo:
      kosli-declare:
      kosli-pipeline:
      kosli-owner:
      kosli-host:
      kosli-environment:
      kosli-environment-type:
      junit-artifact-name:
      snyk-org:
      snyk-test-additional-params:
      auto-approve:
      latest-branch:
```

## Secrets
Secrets are inherited. Stacc Org secrets are used by default.

## Inputs
| Name                        | Description                                    | Default                                                               | Required |
|-----------------------------|------------------------------------------------|-----------------------------------------------------------------------|----------|
| image                       | image name like 'services-someservice'         |                                                                       | yes      |
| container-registry-host     | registry host                                  | stacc.azurecr.io                                                      | no       |
| helm-repo                   | home of the helm charts                        | stacc                                                                 | no       |
| kosli-declare               | what types of evidence should we collect       | pull-request,artifact,test,container-security-scan,code-security-scan | no       |
| kosli-pipeline              | Name of the Kosli pipeline                     | ${{inputs.image}}                                                     | no       |
| kosli-owner                 | Name of the Kosli owner                        | stacc                                                                 | no       |
| kosli-host                  | Kosli host                                     | https://stacc.kosli.com                                               | no       |
| kosli-environment           | Name of the environment                        | stacc-acr-registry                                                    | no       |
| kosli-environment-type      | Type of environment                            | server ([K8S, ECS, server, S3, lambda])                               | no       |
| junit-artifact-name            | Name used to download test results (read below | undefined                                                             | no       |
| snyk-org                    | Snyk organization                              | undefined                                                             | yes      |
| snyk-test-additional-params | Additional parameters to pass to Snyk test     | undefined                                                             | no       |
| auto-approve                | Should this pipeline be auto approved?         | true                                                                  | no       |
| latest-branch               | Latest branch name (or tag name)               | latest                                                                | no       |

### junit-artifact-name READ
If you want to report test results to Kosli, you need to provide a name for the uploaded artifact. 
This workflow needs you to upload the test results with this action before running this workflow:
```yaml
- uses: actions/upload-artifact@v3
  with:
    name: name-of-your-artifact
    path: path/to/test-results
```

## Outputs
| Name                      | Description | Example | 
|---------------------------|-------------|---------|
| TODO | -           | -       |
