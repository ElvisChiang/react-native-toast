# React Native Toast (remobile)
A android like toast for react-native support for ios and android

## Installation
```sh
npm install @remobile/react-native-toast --save
```
or
```sh
yarn add @remobile/react-native-toast
```

### Installation (iOS)
* Drag RCTToast.xcodeproj to your project on Xcode.
* Click on your main project file (the one that represents the .xcodeproj) select Build Phases and drag libRCTToast.a from the Products folder inside the RCTToast.xcodeproj.
* Look for Header Search Paths and make sure it contains both $(SRCROOT)/../../../react-native/React as recursive.

### CocoaPods (iOS)
* add this line to Podfile
```ruby
    pod 'ReactNativeToast', :path => '../node_modules/@remobile/react-native-toast'
```

### Installation (Android)

* In `android/settings.gradle`

```gradle
...
include ':react-native-toast'
project(':react-native-toast').projectDir = new File(rootProject.projectDir, '../node_modules/@remobile/react-native-toast/android')
```

* In `android/app/build.gradle`

```gradle
...
dependencies {
    ...
    compile project(':react-native-toast')
}
```

* register module (in MainApplication.java)

```java
......
import com.remobile.toast.RCTToastPackage;  // <--- import

......

@Override
protected List<ReactPackage> getPackages() {
   ......
   new RCTToastPackage(),            // <------ add here
   ......
}

```

### Screencasts
![ios](screencasts/ios.gif)

## Usage

### Example
```js
import React from 'react';
import {
  Button,
  StyleSheet,
  View,
  Image
} from 'react-native';
import Toast from '@remobile/react-native-toast';

export default class ToastExample extends React.Component {
  render() {
    return (
    <View style={styles.container}>
      <Button title="show" onPress={Toast.show.bind(null, "this is a message")} />
      <Button title="showShortTop" onPress={Toast.showShortTop.bind(null, "this is a message")} />
      <Button title="showShortCenter" onPress={Toast.showShortCenter.bind(null, "this is a message")} />
      <Button title="showShortBottom" onPress={Toast.showShortBottom.bind(null, "this is a message")} />
      <Button title="showLongTop" onPress={Toast.showLongTop.bind(null, "this is a message")} />
      <Button title="showLongCenter" onPress={Toast.showLongCenter.bind(null, "this is a message")} />
      <Button title="showLongBottom" onPress={Toast.showLongBottom.bind(null, "this is a message")} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingVertical:150,
  }
});
```

### thanks
* this project come from https://github.com/EddyVerbruggen/Toast-PhoneGap-Plugin
* fork from https://github.com/remobile/react-native-toast
