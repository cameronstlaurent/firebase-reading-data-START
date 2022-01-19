# Firebase Real Time Database

### Initialize Project Folder to Use NPM 
- on the command line run the following command.
```npm
   npm init
```
 


### NPM Packages to Install
- installing firebase run the command ``` npm install firebase ```
- install parcel bundler run the command ``` npm install parcel ```


### Node_Modules Directory Best Practices
- add the node_modules directory to your.gitignore file.
- never upload your node_modules directory to git.
- when sharing a project remove the node_modules directory first.
- to rebuild your node_modules directory from the package.json file run the command ``` npm install ```.




### Starting The Parcel Dev Server
- Start the module bundler Parcel
```bash
    npx parcel src/index.html
```

### Stop The Parcel Dev Server
- Use the quick key combination from the termainal ```CTRL+C```
 



### Using Firebase In A Client Project
- Create a firebaseConfig.js in ```js/libs/firebase/firebaseConfig.js ```. 
- Copy the Firebase configuration from the project settings.
- Add the npm configuration
- Add the ```getDatabase``` method from ```firebase/database``` package.
- Initialize the real time database RTD service.
 

```javascript
// Import the functions you need from the firebase package
// npm packages are installed in the project node_modules directory.
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database';
 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "Your Key Here",
  authDomain: "Your Auth Domain",
  databaseURL: "Your Database URL",
  projectId: "Your Project ID",
  storageBucket: " Your Storage Bucket",
  messagingSenderId: " Your Messaging Sender Id",
  appId: "Your App ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// initialize the reat time database
const db = getDatabase(app)
export {db}
```



