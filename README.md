RESUME BUILDER

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
## Project overview
Resumebuilder is a web application where users can create their CVs. 
            
React Frontend      <->  Express Backend          <->   Google Firestore

                 - RestFul APIs                  - Data save in collections
                 - Firebase user auth.
                 - get and post req.            
                   with auth. token
               
### `user scenerio`
- Login with social media,google or email link authentication.
- No registration needed.
- Create your personal resume in a designed template.
- Download the resume as PDF.
- Store the data.
 
## Setting up
### `Firebase`
- Create firebase web project
- Add your firebase config resumebuilder/src/services/FireBase

### `npm install`

In the project directory (resumbuilder) there are backend and frontend apps.
- Frontend app => /resumbuilder  npm install 
- Backend app => /resumebuilder/ExpressBackend npm install

### `npm start`

- Running backend app =>/resumebuilder/ExpressBackend npm start (recommended port:3000 )
obs! if you don't run the backand app on port:3000, 
you need to change the end points according to your settings.
- Running frontend app => /resumbuilder npm start 



Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
