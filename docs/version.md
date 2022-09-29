# Version action
Use this in your push to main where you want to (maybe) create a release.
This will handle the semantic versioning of your package based on the commit messages.
It is highly configurable

## Usage
Minimal version
```yaml
  - uses: stacc/github-workflow-actions/version@main
    with:
      github-token: ${{ secrets.GITHUB_TOKEN }}
```
