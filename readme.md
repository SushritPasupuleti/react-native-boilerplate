# React Native Setup

```bash
npx react-native init AwesomeProject
```

Run

```bash
npx react-native run-android
```

Good to haves

```bash
npm i redux react-redux redux-thunk axios @react-navigation/native @react-navigation/stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view react-native-vector-icons
react-native link react-native-vector-icons react-native-paper
```

Getting Signing Certificate: 
```bash
keytool -list -v -alias androiddebugkey -keystore %USERPROFILE%\.android\debug.keystore
```