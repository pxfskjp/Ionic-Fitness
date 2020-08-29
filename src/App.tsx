import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Main from './pages/Main';
import MainTabs from './components/MainTabs';
import Register from './pages/profile/Register';
import Login from './pages/profile/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

import firebase from 'firebase';

localStorage.removeItem("cart");
localStorage.removeItem("quantity");

const App: React.FC = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      setIsLoggedIn(true)
    }
  });

  return (

  <IonApp>
    <IonReactRouter>
      <Route path="/" component={isLoggedIn ? MainTabs : Main} />
      <Route path="/loadpage" component={Main} exact={true} />
      <Route path="/register" component={Register} exact={true} />
      <Route path="/login" component={Login} exact={true} />
      {/* <Redirect exact from="/" to={isLoggedIn ? "/home" : "/loadpage"} /> */}
    </IonReactRouter>
  </IonApp>
);
}

export default App;
