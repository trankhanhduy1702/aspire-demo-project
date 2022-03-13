# Dextox

## Noted:
I only config this to run on ios. Because it's need more step to config for android. So hope you guys understand.

## Setup Testing Environment [(detox getting started)](https://wix.github.io/Detox/docs/introduction/getting-started/)
- Install detox in global `npm install -g detox-cli` (you can skip this, if you already have it)

### For IOS Environment [(link)](https://wix.github.io/Detox/docs/introduction/ios-dev-env/)
- Install applesimutils `brew install applesimutils`

## Run

- First run `yarn e2e:build` => To create a build folder in ios folder. This may take a while to run.
- Then simply run `yarn e2e:test` => Start the test

The config simulator is `iPhone 12`. So if you want to change it, please review `.detoxrc.json`

You can find all the code e2e in [folder e2e at root](../e2e)
