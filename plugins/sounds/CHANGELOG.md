# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.9.0](https://github.com/tsparticles/tsparticles/compare/v3.8.1...v3.9.0) (2025-08-01)

**Note:** Version bump only for package @tsparticles/plugin-sounds

## [3.8.1](https://github.com/tsparticles/tsparticles/compare/v3.8.0...v3.8.1) (2025-01-31)

### Bug Fixes

- fixed z-index style when fullScreen is active, closes [#5458](https://github.com/tsparticles/tsparticles/issues/5458) ([5e94ca4](https://github.com/tsparticles/tsparticles/commit/5e94ca41565c388bed275cd7d70d894d32ba506e))

# [3.8.0](https://github.com/tsparticles/tsparticles/compare/v3.7.3...v3.8.0) (2025-01-23)

**Note:** Version bump only for package @tsparticles/plugin-sounds

## [3.7.1](https://github.com/tsparticles/tsparticles/compare/v3.7.0...v3.7.1) (2024-11-24)

### Bug Fixes

- fixed resize issue in canvas ([e7c816c](https://github.com/tsparticles/tsparticles/commit/e7c816ced7d99c0cb84c79675a0771cd4b833705))

# [3.7.0](https://github.com/tsparticles/tsparticles/compare/v3.6.0...v3.7.0) (2024-11-24)

### Features

- added new named color plugin, and hex color in the engine ([c4db774](https://github.com/tsparticles/tsparticles/commit/c4db7745f54fe808e20af2bdf4c0469c1aa40755))

# [3.6.0](https://github.com/tsparticles/tsparticles/compare/v3.6.0-beta.1...v3.6.0) (2024-11-18)

### Bug Fixes

- fixed color syntaxes, fixes [#5409](https://github.com/tsparticles/tsparticles/issues/5409) ([f3c976f](https://github.com/tsparticles/tsparticles/commit/f3c976f451c5bc6a37338cba0cc1ce80c4e9b137))

### Features

- added isNull function, more secure checks ([891e2a2](https://github.com/tsparticles/tsparticles/commit/891e2a25fb64b7f89ce0c75dbe49bd0b28d9a72d))

# [3.6.0-beta.1](https://github.com/tsparticles/tsparticles/compare/v3.6.0-beta.0...v3.6.0-beta.1) (2024-10-13)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [3.6.0-beta.0](https://github.com/tsparticles/tsparticles/compare/v3.5.0...v3.6.0-beta.0) (2024-10-07)

### Bug Fixes

- fixed issue with out modes ([85ba20f](https://github.com/tsparticles/tsparticles/commit/85ba20f4004eed3ceb84bcf5333025c8fec5d81f))

# [3.6.0](https://github.com/tsparticles/tsparticles/compare/v3.5.0...v3.6.0) (2024-10-07)

### Bug Fixes

- fixed issue with out modes ([85ba20f](https://github.com/tsparticles/tsparticles/commit/85ba20f4004eed3ceb84bcf5333025c8fec5d81f))

# [3.5.0](https://github.com/tsparticles/tsparticles/compare/v3.4.0...v3.5.0) (2024-07-01)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [3.4.0](https://github.com/tsparticles/tsparticles/compare/v3.3.0...v3.4.0) (2024-05-12)

### Features

- changed bundles loading method, no more preloading plugins ([13b00a0](https://github.com/tsparticles/tsparticles/commit/13b00a03b327fd547014a99f8cbc8ced228f31c8))

# [3.3.0](https://github.com/tsparticles/tsparticles/compare/v3.2.2...v3.3.0) (2024-02-27)

### Bug Fixes

- fixed issues in Chrome with async rAF function, reduced async methods for vite builds ([2600f6f](https://github.com/tsparticles/tsparticles/commit/2600f6f69917895ab80f9a55b1f5168d587adac6))

## [3.2.2](https://github.com/tsparticles/tsparticles/compare/v3.2.1...v3.2.2) (2024-02-20)

### Bug Fixes

- fixed circular deps detection and other issues with dynamic imports ([b6ed5d3](https://github.com/tsparticles/tsparticles/commit/b6ed5d3eaa41e0ad50c55807e1ec6439eeacd0c1))

## [3.2.1](https://github.com/tsparticles/tsparticles/compare/v3.2.0...v3.2.1) (2024-01-31)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [3.2.0](https://github.com/tsparticles/tsparticles/compare/v3.1.0...v3.2.0) (2024-01-31)

### Features

- added new particle external interaction ([f51ce7f](https://github.com/tsparticles/tsparticles/commit/f51ce7f104fa930fc68a257b64bbe8cf65fb9794))
- added some dynamic imports, plugins will be loaded only if used ([6dab9e9](https://github.com/tsparticles/tsparticles/commit/6dab9e9b059739144c542cee22849327894c0340))
- improving dynamic imports ([f05c2ee](https://github.com/tsparticles/tsparticles/commit/f05c2ee643978b6ed4abe8c4a54d0c3cc29727a8))

# [3.1.0](https://github.com/tsparticles/tsparticles/compare/v3.0.3...v3.1.0) (2024-01-13)

### Features

- added mute/unmute functions to sound plugin for an easier control of the volume ([b2169ef](https://github.com/tsparticles/tsparticles/commit/b2169ef5b24ab38295294ea77dd5e2549f9558df))
- added new options for sounds plugin, autoPlay and icons.enable ([cfc6ab8](https://github.com/tsparticles/tsparticles/commit/cfc6ab89799a71c5957fb478d63b0b6d69207a78))
- improved first pointerdown/touchstart event listener for better autoplay ([34db125](https://github.com/tsparticles/tsparticles/commit/34db1258641242afee229ab9cdbd90ad1f620f43))

## [3.0.3](https://github.com/tsparticles/tsparticles/compare/v3.0.2...v3.0.3) (2023-12-26)

### Bug Fixes

- used element id when present and fixed emoji memory management ([1990bbc](https://github.com/tsparticles/tsparticles/commit/1990bbcd9079366db7ec3dedf4477ba43d2c47cf))

## [3.0.2](https://github.com/tsparticles/tsparticles/compare/v3.0.1...v3.0.2) (2023-12-06)

**Note:** Version bump only for package @tsparticles/plugin-sounds

## [3.0.1](https://github.com/tsparticles/tsparticles/compare/v3.0.0...v3.0.1) (2023-12-06)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [3.0.0](https://github.com/tsparticles/tsparticles/compare/v3.0.0-beta.5...v3.0.0) (2023-12-04)

### Features

- added fade to trail effect ([17750ea](https://github.com/tsparticles/tsparticles/commit/17750eacdf86de208b2e723decc2ffb65521474b))

# [3.0.0-beta.5](https://github.com/tsparticles/tsparticles/compare/v3.0.0-beta.4...v3.0.0-beta.5) (2023-12-03)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [3.0.0-beta.4](https://github.com/tsparticles/tsparticles/compare/v3.0.0-beta.3...v3.0.0-beta.4) (2023-11-16)

### Features

- added flat options to tsparticles-confetti options ([dff6c75](https://github.com/tsparticles/tsparticles/commit/dff6c7590c5a844e34547513637c8ad0f13a3d66))

# [3.0.0-beta.3](https://github.com/tsparticles/tsparticles/compare/v3.0.0-beta.2...v3.0.0-beta.3) (2023-09-20)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [3.0.0-beta.2](https://github.com/tsparticles/tsparticles/compare/v3.0.0-beta.1...v3.0.0-beta.2) (2023-09-11)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [3.0.0-beta.1](https://github.com/tsparticles/tsparticles/compare/v3.0.0-beta.0...v3.0.0-beta.1) (2023-08-25)

### Features

- supporting the npm exports option correctly ([bdfaca8](https://github.com/tsparticles/tsparticles/commit/bdfaca8077b8a3a4b1f482cc2ae5766914dcfaf7))

# [3.0.0-beta.0](https://github.com/tsparticles/tsparticles/compare/v2.12.0...v3.0.0-beta.0) (2023-08-24)

**Note:** Version bump only for package @tsparticles/plugin-sounds

# [2.12.0](https://github.com/tsparticles/tsparticles/compare/v2.11.1...v2.12.0) (2023-08-03)

**Note:** Version bump only for package tsparticles-plugin-sounds

## [2.11.1](https://github.com/tsparticles/tsparticles/compare/v2.11.0...v2.11.1) (2023-07-24)

**Note:** Version bump only for package tsparticles-plugin-sounds

# [2.11.0](https://github.com/tsparticles/tsparticles/compare/v2.10.1...v2.11.0) (2023-07-12)

### Features

- added refresh flag for loading plugins, this will prevent multiple refresh of the instance ([9d999d6](https://github.com/tsparticles/tsparticles/commit/9d999d6fa2f0c0a45a551aab45b467a8f3b682c5))
- added setLogger and getLogger functions, this will prevent console.log mistakenly left ([38de76c](https://github.com/tsparticles/tsparticles/commit/38de76ceecc1305f416e23fdc9da223adbb8a6c1))
- added tree shaking ([86806a6](https://github.com/tsparticles/tsparticles/commit/86806a6054d89b050567599daab20da3b643b788))

## [2.10.1](https://github.com/tsparticles/tsparticles/compare/v2.10.0...v2.10.1) (2023-06-04)

**Note:** Version bump only for package tsparticles-plugin-sounds

# [2.10.0](https://github.com/tsparticles/tsparticles/compare/v2.0.0-alpha.0...v2.10.0) (2023-06-03)

### Bug Fixes

- **deps:** update dependency rimraf to v4.4.1 ([370d1ca](https://github.com/tsparticles/tsparticles/commit/370d1ca4d3bb0ea8bfe5fb3e0f5e1d74f45f4de6))
- **deps:** update dependency rimraf to v5 ([c29cbc4](https://github.com/tsparticles/tsparticles/commit/c29cbc43ed0d3522b718e7236a48eae9b91cde43))
- **deps:** update dependency rimraf to v5.0.1 ([6627473](https://github.com/tsparticles/tsparticles/commit/66274734c70b5759c59f7e949c8fcb2c8529bdf2))
- fixed some plugins, they weren't loading correctly the options ([00053b4](https://github.com/tsparticles/tsparticles/commit/00053b4ea90fcc4385637b6a1aad955643a712b1))
- fixed volume images position ([54c1b7d](https://github.com/tsparticles/tsparticles/commit/54c1b7d9555f486e44a9216cb479ba8879b7f688))

### Features

- added filter option to sounds event, it's a function that checks if an event can play a sound ([a0be41b](https://github.com/tsparticles/tsparticles/commit/a0be41b616d42217d8a57798a3ff3d3cafd6b6a0))
- added loop options to sounds audio values ([3f017b6](https://github.com/tsparticles/tsparticles/commit/3f017b6f93ac8e3a539184ab8d30b4f67db1b1f2))
- added multiple melodies to melody for creating two handed melodies, für elise demo ([b2ed85f](https://github.com/tsparticles/tsparticles/commit/b2ed85f12961091280b4a98b528dc92f6846070e))
- added version to engine ([9406873](https://github.com/tsparticles/tsparticles/commit/9406873c6551b59e64edbe3a0e4fe59ef2cde4c6))
- added volume buttons to sounds plugin ([3c914c1](https://github.com/tsparticles/tsparticles/commit/3c914c1c24ccda0bdda37ebe507ae0abb1ecf050))
- adding new path plugin, using svg paths as a source ([72316ec](https://github.com/tsparticles/tsparticles/commit/72316ec38ee3556ad2db0af4e84a14529ddb1b9b))
- created sounds plugin, no sounds yet, added only mute/unmute icon ([5a5970d](https://github.com/tsparticles/tsparticles/commit/5a5970d31682c62197608757cfd66b4b9c876e06))

## [2.9.3](https://github.com/tsparticles/tsparticles/compare/tsparticles-plugin-sounds@2.9.2...tsparticles-plugin-sounds@2.9.3) (2023-02-12)

### Bug Fixes

- fixed some plugins, they weren't loading correctly the options ([00053b4](https://github.com/tsparticles/tsparticles/commit/00053b4ea90fcc4385637b6a1aad955643a712b1))

## [2.9.2](https://github.com/tsparticles/tsparticles/compare/tsparticles-plugin-sounds@2.9.1...tsparticles-plugin-sounds@2.9.2) (2023-02-12)

**Note:** Version bump only for package tsparticles-plugin-sounds

## [2.9.1](https://github.com/tsparticles/tsparticles/compare/tsparticles-plugin-sounds@2.9.0...tsparticles-plugin-sounds@2.9.1) (2023-02-11)

**Note:** Version bump only for package tsparticles-plugin-sounds

# [2.9.0](https://github.com/tsparticles/tsparticles/compare/tsparticles-plugin-sounds@2.8.0...tsparticles-plugin-sounds@2.9.0) (2023-02-10)

### Features

- added version to engine ([9406873](https://github.com/tsparticles/tsparticles/commit/9406873c6551b59e64edbe3a0e4fe59ef2cde4c6))

# [2.8.0](https://github.com/tsparticles/tsparticles/compare/tsparticles-plugin-sounds@2.7.1...tsparticles-plugin-sounds@2.8.0) (2023-01-18)

**Note:** Version bump only for package tsparticles-plugin-sounds

## [2.7.1](https://github.com/tsparticles/tsparticles/compare/tsparticles-plugin-sounds@2.7.0...tsparticles-plugin-sounds@2.7.1) (2022-12-25)

### Bug Fixes

- fixed volume images position ([54c1b7d](https://github.com/tsparticles/tsparticles/commit/54c1b7d9555f486e44a9216cb479ba8879b7f688))

### Features

- added loop options to sounds audio values ([3f017b6](https://github.com/tsparticles/tsparticles/commit/3f017b6f93ac8e3a539184ab8d30b4f67db1b1f2))
- added multiple melodies to melody for creating two handed melodies, für elise demo ([b2ed85f](https://github.com/tsparticles/tsparticles/commit/b2ed85f12961091280b4a98b528dc92f6846070e))
- added volume buttons to sounds plugin ([3c914c1](https://github.com/tsparticles/tsparticles/commit/3c914c1c24ccda0bdda37ebe507ae0abb1ecf050))

# 2.7.0 (2022-12-23)

### Features

- added filter option to sounds event, it's a function that checks if an event can play a sound ([a0be41b](https://github.com/tsparticles/tsparticles/commit/a0be41b616d42217d8a57798a3ff3d3cafd6b6a0))
- created sounds plugin, no sounds yet, added only mute/unmute icon ([5a5970d](https://github.com/tsparticles/tsparticles/commit/5a5970d31682c62197608757cfd66b4b9c876e06))
