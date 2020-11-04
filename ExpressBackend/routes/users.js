const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');
const serviceAccount = require('/Users/fatih/Desktop/Applications/FirebaseAdminKey/personalpage-deda2-5c4dac4f4424.json')

admin.initializeApp({
  credential:admin.credential.cert(serviceAccount)
})
const db = admin.firestore();
/*
const checkUserData = data =>
    data.hasOwnProperty('personalData')
    && data.hasOwnProperty('profile')
    && data.hasOwnProperty('employment')
    && data.hasOwnProperty('education')
    && data.hasOwnProperty('projects')
    && data.hasOwnProperty('links')
    && data.hasOwnProperty('skills')
    && data.hasOwnProperty('lang')
    && data.hasOwnProperty('hobbies')
    && data.hasOwnProperty('conferences')
    && data.hasOwnProperty('references')
/*
/* Save users data. */
router.post('/', function(req, res, next) {
  if (!req.body){
    return res.status(400).json({
      message:'No content'
    })
  }
  const data = req.body
  //in case you want to check user data
  /*if(!checkUserData(data)){
    return res.status(400).json({
      message:'Denied,Missing parameters'
    })
  }*/
  //save data in the database
  const docRef = db.collection('users').doc(data.personalData.email);
    docRef.set({
      personalDetails: data.personalData,
      profile: data.profile,
      employment: data.employment,
      education: data.education,
      links:data.links,
      skills:data.skills,
      lang:data.lang,
      hobbies:data.hobbies,
      conferences:data.conferences,
      references:data.references
    }).then(() =>{
      return res.status(200).json({
        message: 'User data saved successfully',
      });
    }).catch((error) => {
    return res.status(500).json({
      message: 'Error' + error.toString()
    });
  });
})

router.get('/', async function(req, res, next) {
  // idToken comes from the client app to verify user
  // user mail used for doc name in firestore
  //if user has saved doc send it else empty object
  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) &&
      !(req.cookies && req.cookies.__session)) {
    console.error('No Firebase ID token was passed as a Bearer token in the Authorization header.',
        'Make sure you authorize your request by providing the following HTTP header:',
        'Authorization: Bearer <Firebase ID Token>',
        'or by passing a "__session" cookie.');
    res.status(403).send('Unauthorized');
    return;
  }
  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    // Read the ID Token from the Authorization header.
    idToken = req.headers.authorization.split('Bearer ')[1];
  } else if(req.cookies) {
    // Read the ID Token from cookie.
    idToken = req.cookies.__session;
  } else {
    // No cookie
    res.status(403).send('Unauthorized');
    return;
  }
    admin.auth().verifyIdToken(idToken)
        .then(async function(decodedToken) {
          const userMail = decodedToken.email;
          const userRef = db.collection('users').doc(userMail);
          const doc = await userRef.get();
          if (!doc.exists) {
            return res.status(400).json({
              message:'No such document!'
            })
          } else {
            return res.status(200).json({
              userData:doc.data()
            })
          }
        })
        .catch((err) => {res.status(401).send(err);
          console.log('Unauthorized request');
          return null;
        });
});

module.exports = router;
