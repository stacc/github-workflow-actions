## [1.3.1](https://github.com/stacc/github-workflow-actions/compare/v1.3.0...v1.3.1) (2022-10-10)


### Bug Fixes

* syntax for outputs ([67889ff](https://github.com/stacc/github-workflow-actions/commit/67889ff53c09f8ed217ae27695362d4ff94352fc))

# [1.3.0](https://github.com/stacc/github-workflow-actions/compare/v1.2.0...v1.3.0) (2022-10-10)


### Features

* **snyk:** pass secret token to workflow ([b10fa61](https://github.com/stacc/github-workflow-actions/commit/b10fa6108ba1fb4201818a3101e64c865937d603))

# [1.2.0](https://github.com/stacc/github-workflow-actions/compare/v1.1.4...v1.2.0) (2022-10-07)


### Features

* split everything into pieces ([d75fbdf](https://github.com/stacc/github-workflow-actions/commit/d75fbdff0085da4766f2bf06318049560b4b0e21))

## [1.1.4](https://github.com/stacc/github-workflow-actions/compare/v1.1.3...v1.1.4) (2022-10-06)


### Bug Fixes

* add manual publish ([d271707](https://github.com/stacc/github-workflow-actions/commit/d2717070d544cfa60d251c02013cd49a0c269dd4))

## [1.1.3](https://github.com/stacc/github-workflow-actions/compare/v1.1.2...v1.1.3) (2022-10-05)


### Bug Fixes

* default to pat_token if provided ([af51485](https://github.com/stacc/github-workflow-actions/commit/af5148574e8c4c75369e9933332fa02000e3e1ab))

## [1.1.2](https://github.com/stacc/github-workflow-actions/compare/v1.1.1...v1.1.2) (2022-10-05)


### Bug Fixes

* inherit secrets for version ([59b61e0](https://github.com/stacc/github-workflow-actions/commit/59b61e0ebc0a2d6262d36265b7b7d695bdcac3fb))
* **publish-image:** use pat token to trigger release workflow ([#3](https://github.com/stacc/github-workflow-actions/issues/3)) ([6e05691](https://github.com/stacc/github-workflow-actions/commit/6e05691615683be3a4e62347ad431ab5819da5c8))
* remove secret github_token as it is infered by the calling workflow ([2f4ac19](https://github.com/stacc/github-workflow-actions/commit/2f4ac19d3c6c545aaac2760b4700e7ea16d99a36))
* update workflows to inherit secrets ([ecaba96](https://github.com/stacc/github-workflow-actions/commit/ecaba96a3a6d17a2619819f7e38bdb7874449e84))

## [1.1.1](https://github.com/stacc/github-workflow-actions/compare/v1.1.0...v1.1.1) (2022-10-03)


### Bug Fixes

* **publish-image:** fix trigger to allow runs after release ([#2](https://github.com/stacc/github-workflow-actions/issues/2)) ([d734dea](https://github.com/stacc/github-workflow-actions/commit/d734dea565e4f171448ca392ca4c63afb3090eae))

# [1.1.0](https://github.com/stacc/github-workflow-actions/compare/v1.0.10...v1.1.0) (2022-10-03)


### Features

* add new reusable workflow publish-image ([#1](https://github.com/stacc/github-workflow-actions/issues/1)) ([1438e30](https://github.com/stacc/github-workflow-actions/commit/1438e30d552f332579fc3e2b1f134d7df37fe60e))

## [1.0.10](https://github.com/stacc/github-workflow-actions/compare/v1.0.9...v1.0.10) (2022-09-30)


### Bug Fixes

* update npm publish to default true. will only release if npm token present ([30a1064](https://github.com/stacc/github-workflow-actions/commit/30a1064842dbd8b8175480002da0800efb071784))

## [1.0.9](https://github.com/stacc/github-workflow-actions/compare/v1.0.8...v1.0.9) (2022-09-29)


### Bug Fixes

* use force 🦾 ([1f2d181](https://github.com/stacc/github-workflow-actions/commit/1f2d18171fbe8d07f4be1428cd30de9cfa71870f))

## [1.0.8](https://github.com/stacc/github-workflow-actions/compare/v1.0.7...v1.0.8) (2022-09-29)


### Bug Fixes

* hyphenate 🙈 ([c4fae4d](https://github.com/stacc/github-workflow-actions/commit/c4fae4d3cdfaedd5d81c2adf695af2156972f7ee))
* hyphenate 🙈 ([7b6ea64](https://github.com/stacc/github-workflow-actions/commit/7b6ea644c86bad2f4462807dc7f835f5e72263ae))
* push command and add slack ([e6d25b3](https://github.com/stacc/github-workflow-actions/commit/e6d25b35ea64eeb59c94644f38ec936768b96a92))

## [1.0.7](https://github.com/stacc/github-workflow-actions/compare/v1.0.6...v1.0.7) (2022-09-29)


### Bug Fixes

* make sure to checkout ([3d2dec8](https://github.com/stacc/github-workflow-actions/commit/3d2dec896e5ae2befc374731a4db98677472a691))

## [1.0.6](https://github.com/stacc/github-workflow-actions/compare/v1.0.5...v1.0.6) (2022-09-29)


### Bug Fixes

* always use latest self ([7faa7e0](https://github.com/stacc/github-workflow-actions/commit/7faa7e0b894a1921042baf0bc1c35fb900191ac3))
* outputs everywhere ([a4aeabd](https://github.com/stacc/github-workflow-actions/commit/a4aeabd66e500df17efc6dcd75c01a0a458e49a5))

## [1.0.5](https://github.com/stacc/github-workflow-actions/compare/v1.0.4...v1.0.5) (2022-09-29)


### Bug Fixes

* attempt to output ([51c440d](https://github.com/stacc/github-workflow-actions/commit/51c440d8278eca15bb3aed41e05649de4983ffcb))

## [1.0.4](https://github.com/stacc/github-workflow-actions/compare/v1.0.3...v1.0.4) (2022-09-29)


### Bug Fixes

* conditionally push to version branch ([f6fe04e](https://github.com/stacc/github-workflow-actions/commit/f6fe04ee05d2e15957512d1351ddfa88207b1eb5))

## [1.0.3](https://github.com/stacc/github-workflow-actions/compare/v1.0.2...v1.0.3) (2022-09-29)


### Bug Fixes

* redefine output 🙈 ([11ebac5](https://github.com/stacc/github-workflow-actions/commit/11ebac5be4d2a9638c9c0581e68e7f1a2d0c76ef))

## [1.0.2](https://github.com/stacc/github-workflow-actions/compare/v1.0.1...v1.0.2) (2022-09-29)


### Bug Fixes

* try dogfood ([7a09621](https://github.com/stacc/github-workflow-actions/commit/7a09621c11123d8ad1eb9754b6a068989d74b8be))
