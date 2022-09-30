# Version action
Use this in your push to main where you want to (maybe) create a release.
This will handle the semantic versioning of your package based on the commit messages.
It is highly configurable

## Usage
Minimal version
```yaml
  - uses: stacc/github-workflow-actions/version@v1
    secrets:
      github-token: ${{ secrets.GITHUB_TOKEN }}
```
Using all the inputs
```yaml
  - uses: stacc/github-workflow-actions/version@v1
    secrets:
      github-token: ${{ secrets.GITHUB_TOKEN }}
      npm-token: ${{ secrets.NPM_TOKEN }}
      #if you have a npm package to release as well. Will save tarball to Github Release
      slack-webhook: ${{ SLACK_RELEASE_BOT_WEBHOOK }} 
      #if you want to send a slack message when a release is created
    with:
      branches: ['main']
      dry_run: false
      commit-changelog: true
      slack-channel: "npm-release-feed"
```
## Secrets
| Name | Description | Required |
| ---- | ----------- | -------- |
| github-token | Github token to use for creating releases | Yes |
| npm-token | Npm token to use for publishing packages | No |
| slack-webhook | Slack webhook to use for sending messages | No |

## Inputs
| Name | Description                                             | Default |
| ---- |---------------------------------------------------------| ------- |
| branches | Branches to run on                                      | main |
| dry_run | If true, will not create a release                      | false |
| commit-changelog | If true, will commit the changelog to the repository    | false |

## Outputs
| Name                      | Description | Example      | 
|---------------------------|-------------|--------------|
| new_release_published     |Whether a new release was published             | true/false   |
| new_release_version       |Version of the new release             | 1.2.3        |
| new_release_major_version |Major version of the new release             | 1            |
| new_release_minor_version |Minor version of the new release             | 2            |
| new_release_patch_version |Patch version of the new release             | 3            |
| new_release_channel       |The distribution channel on which the <br/>last release was initially made available <br/>(undefined for the default distribution channel).             | undefined    |
| new_release_notes         |The release notes for the new release.             | New release! |
| last_release_version      |Version of the previous release, if there was one.             | 1.2.2        |
