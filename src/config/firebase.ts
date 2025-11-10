import * as admin from 'firebase-admin';
import * as path from 'path';

const serviceAccount = require(path.resolve(__dirname, './firebaseServiceAccountKey.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://backendassignment4-d6772-default-rtdb.firebaseio.com', 
});

export default admin;  
