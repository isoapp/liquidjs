# District-forked LiquidJS 

## Dev process

1. Create branches and PR them against the `iso-main` branch. Squash merge.

## Release process

We don't have a npm server in-house so we'll use pnpm support for github.

1. Cut a release branch from `iso-main` in the format `iso-release/<version>.<yyyymmdd>`. Version is the `version` in `package.json` without `.main`.
    > `git checkout -b iso-release/10.24.0-iso.20251118`
1. Update `package.json`>`version` replacing `main` with that timestamp:
    > `"version": "10.24.0-iso.20251118",`
3. `npm run build`
4. `git add -f dist`
    - necessary as we're not publishing to "npm" but to the git branch.
5. `git tag -m <version>`
6. `git push`
7. `git push --tags` 

### Update dependencies

Update `liquidjs` dependency to `github:isoapp/liquidjs#<version>`

