#Properly Structured Redux-React App

## Description

After going through the [Redux-mockup](https://github.com/wangtjwork/Redux-mockup) project, we are now having a fully functional application powered by React and Redux, but only inside a single HTML file!

Here we use the Rails-style to better organize our app, starting from create-react-app.

Four parts:
1. Actions and ActionCreators go into actions folder.
2. Components go into components folder.
3. Middleware and the combination go into middleware folder.
4. Reducers and the combination go into reducers folder.

Now Redux, ReduxThunk, ReactRedux library handles everything else for us and we have the same functions!
