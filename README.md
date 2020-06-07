This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## React Hooks - main ones below
#### useState
Allow a functional component to use component-level state
const [resource, setResource] = useState('posts');
- resource -> contains the present value of this piece of state
`this.state.resource`
- setResource -> function to call when we want to update our state (and re-render) same as `this.setState({resource: 'posts});`
- useState -> Function from React
- 'posts' -> starting value for this piece of state, similar to when we initialized our state object `state = { resource: 'posts'}`

#### useEffect
Allows a functional component to use lifecycle methods
first render -> `useEffect(() => {}, ['posts']);`
different values, so our arrow function gets called, same values our arrow function is Not going to be called
second render -> `useEffect(() => {}, ['todos']);`

#### useContext
Allows a functional component to use the context system

#### useRef
Allows a functional component to use the ref system

#### useReducer
Allow a functional component to store data through 'reducer'

## Gotchas
##### regular class based
- 1) app component created, initilizes state 'resource' of 'posts'
- 2) app renders ResourceList
- 3) ResourceList's 'componentDidMount' called, fetches posts
- 4) Fetch completed, setState called, number of posts rendered
- 5) we click todos button, app updates its state, rerenders itself and ResourceList
- 6) ResourceList was already 'mounted', so 'componentDidMount' is not called a second time! so we need componentDidUpdate


##### usefeect
- No second argumrnt: `useEffect(()=>{})  -->  useEffect(()=>{})` CALLED every single time.
- empty array as second argument: `useEffect(()=>{},[]) -->  useEffect(()=>{},[])` NOTCALLED (only CALLED only first time)
- array with same number eg 1: `useEffect(()=>{},[1]) -->  useEffect(()=>{},[1])` NOTCALLED (only CALLED only first time)
- array with a change: `useEffect(()=>{},['hi']) -->  useEffect(()=>{},[1])` CALLED 
- array with a different object change: `useEffect(()=>{},[{color:'red'}]) -->  useEffect(()=>{},[{color:'red}])` CALLED - because object
- instantiation make everytime a different object with same value in this case
- array with multiple number eg 1: `useEffect(()=>{},[10,10]) --> useEffect(()=>{},[10,10])` NOTCALLED
- array with multiple number eg 1: `useEffect(()=>{},[10,10]) --> useEffect(()=>{},[10])` CALLED


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
