## Freyja App 

In this project you will find the list of the winter collection and user can like any items and user can see the list of item that is favorite by user

## Project Structure
Folder structure :

    |____App.tsx
    |____app.json
    |____jest.config.js
    |____index.js 
    |____ios
    |____node_modules
    |____ReadMe.md.  
    |____metro.config.js
    |____babel.config.js
    |______tests__
    | | |____App.test.tsx
    |____package.json.  
    |____android
    |____tsconfig.json
    |____src
    | |____assets
    | | |____icons
    | |____navigation
    | | |____Route.tsx
    | |____screens
    | | |____HomeScreen.tsx
    | | |____DashboardScreen.tsx
    | | |____CartScreen.tsx
    | | |____ProfileScreen.tsx
    | | |____FavouriteListScreen.tsx
    | |____utils
    | | |____Colors.tsx

<details>
<summary>Project structure is explained as below</summary>

| Name                           | Description                                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------------------------|
| **App.tsx**                |Entry file of the project after index.tsx and initialise root component of the application |
| **app.json**               |Json file which is used to configure native app, and contain project name |
| **index.js**               |Entry file of the project and first file that gets executed or render project when application start|
| **ios**                   |Folder that contains configuration and sorce code specific to ios platform|
| **node_modules**       |Folder that managing the third-party libraries and dependencies that is added in our react native application|
| **ReadMe.md**               |Documentation file that provides information and guidance for developers about the project|
| **metro.config.js**               |File that contains the configuration of the Metro Bundler|
| **babel.config.js**               |File that contains configuration for transform JavaScript code  into compatible with the JavaScript engines used by browsers|
| **App.test.tsx**               |File for writing and running tests cases for React Native application|
| **package.json**        |Json file which is managing project dependencies, scripts, and project settings|
| **android**        |Folder that contains configuration and sorce code specific to Android platform
| **tsconfig.json**                  |File that is used for the configure TypeScript allow controls how typescript compiles your code|
| **src/assets/icons**     |Contains icons and images that is used in application|
| **src/navigation/Route.tsx**     |File that is used for the managing rountings of the application|
| **src/screens/HomeScreen.tsx**     |Home screen contain the list of winter collection items and user can like/favorite it|
| **src/screens/DashboardScreen.tsx**     |Blanck file under dashboard tab|
| **src/screens/CartScreen.tsx**     |Blanck file under cart tab|
| **src/screens/ProfileScreen.tsx**     |Blanck file under profile tab|
| **src/screens/FavouriteListScreen.tsx**     |Favorite screen contains list of collection items that is favorite by user|
| **src/utils/Colors.tsx**     | Comman utils file contains the application comman colors|

</details>

## Dependencies

<details>
<summary>Global</summary>

| Name                 | Version      | Description                                                                                                                                  |
| -------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| @react-native-async-storage/async-storage     | ^1.19.3 | Used for asynchronous, persistent, key-value storage system for React Native Local storage.
| @react-navigation/bottom-tabs                 | ^6.5.9    | Bottom tab navigator for React Navigation to handle bottom tab.
| @react-navigation/native                      | ^6.1.8    | create components and navigation patterns that used to manage the navigation.                                            
| @react-navigation/native-stack                | ^6.9.14     |  provides a way for your app to transition between screens where each new screen is placed on top of a stack - To manage the stack navigation.                                                                            
| react-native-safe-area-context                | ^4.7.2    | Used for accessing device safe area portion for the notch devices.  
| react-native-screens                          | ^3.25.0    | Its provides native primitives to represent screens instead of plain <View> components - Used internally inside navigation.   
 
</details>

## Pre-requisites

For development, you will Need to install all the required packages for the react native

Please Follow the steps from this link:  
https://reactnative.dev/docs/environment-setup
To install required packages (Make sure you select ‘React Native CLI Quickstart’ instead of 
‘Expo CLI Quickstart’ && Development OS as per your requirement)

* #### Install Git
   Make sure there is installed Git in your environment


## Getting started
 
`Please follow the Project setup instructions on a development environment`

* ### Clone the repository
```
git clone 
```

* ### Install dependencies
First of all please go to project’s path on root folder in terminal window. And based on your setup run below command .
     
    1) Using Yarn 
    
    ```
    cd [Project path / root directory]
    yarn install
    ```
    
    2) Using NPM
    
    ```
    cd [Project path / root directory]
    npm install
    ```
For ios only follow the below commands to install pod
```
cd ios
pod install
```
Start package in case it is not start automatically while run application. 
```
cd [Project path / root directory]
npx react-native start
```


## Build and run the project
  For build and run follow below link
  * https://reactnative.dev/docs/environment-setup?platform=android
  * https://reactnative.dev/docs/environment-setup?platform=ios

To run in ios - Use below command Or We can run application on Xcode - from IOS folder and by opening .xcworkspace file
```
npx react-native run-ios
```
To run in Android - Use below command Or We can run application on Android Studio
```
npx react-native run-android
```
