# Stacc Github Workflow Actions
> TLDR; This is a collection of Github Actions that we use at Stacc to automate our workflow.

## Version
Workflow for automatic versioning of packages. This workflow will automatically bump the version of your package based on the commit messages. It may also create a changelog and commit it to the repository. It will create a release on Github and _may_ publish the package to NPM.

### Usage
```yaml
  - uses: stacc/github-workflow-actions@v1
    id: semantic
    with:
      branches: 'main' #this is the default value so you can omit it
      dry_run: 'false' #this is false by default
      github-token: ${{ secrets.GITHUB_TOKEN }} #Uses this by default no need to set
      npm-token: ${{ secrets.NPM_TOKEN }} #Uses this by default no need to set
      
```
