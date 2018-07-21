# Notes

# React
* knows how a component should behave
* knows how to take a bunch of components and make them work together
* in general, a very small API, which is nice to learn and easy to implement
* `componentWillMount` is no longer going to be supported in React 17, so better to use `componentDidMount` or the constructor
* apparently, you can initialize state without a constructor using just `state = {...}` at the top of the class component

# React Native
* to start `cd` into the project directory and then run `react-native run-ios` (obviously for iOS simulator); use `react-native run-android` for Android
* knows how to take the output from a component and place it on the screen
* provides default core components (image, text)
* JSX is our only way to communicate with React Native
* only the 'root' component uses `AppRegistry`
* every other component that the app shows is referred to as a child component - that's why we have to export child components
* when wanting scrollable content, have to use `ScrollView` rather than `View`, and the root `View` element needs to have a style of `flex: 1`
* use `TouchableOpacity` or `TouchableHighlight` for handling user input with pressing buttons
* for Linking, use the API to link to other apps that are running on the mobile device, e.g. kick the user over to a browser on the mobile device

# JSX
* syntactic sugar to make our code just a little bit more readible/legible
* Babel takes JSX and transpiles/converts it into raw JavaScript
* JSX is just a map over normal function calls; it is really just a convenience feature for development of React/ReactNative

# Review of `import` statements
* by default, each file doesn't have access to any other files unless we import them
* don't have to use relative paths for packages from libraries, since for NPM, they have to have unique names
* have to use relative paths for files that we write, since that name uniqueness doesn't exist, so compiler wouldn't know which module/function to get without the relative file path in the import statement

# Albums app
* allow user to scroll through albums
* user can click the Buy Now button to be taken to Amazon page in the browser on the device

# Components for this course
## Header

## AlbumList
* fetch the albums list and show a list of AlbumDetails

## AlbumDetail
* show a single album's details

## Card

## CardSection
