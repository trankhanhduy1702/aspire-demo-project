# Installation

- `yarn` (no need to run `pod install`)

### Installation Noted:

- If you are using Macbook with m1 chips, change the `pod install --repo-update` -> `arch -x86_64 pod install --repo-update` in the post-install file before run `yarn` (Keep the file for you DO NOT commit `arch -x86_64 pod install --repo-update` to remote repository).

# Run

- ios: `yarn app -o ios`
- android: `yarn app -o android`

### Android Noted:

- Every time you clone a new one from the repo. To start a build debug on android, you should open folder `root/android` using android studio, in order to download some config needed for the project. This step will need to do only one time when clone a new code.
- And when the config in android studio is finish, all you need is start an emulator and run `yarn app -o android`
