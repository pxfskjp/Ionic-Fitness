import React, { useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { cart, home, cog, person } from 'ionicons/icons';
import Home from './pages/home/Home';
import Store from './pages/store/Store';
import Checkout from './pages/store/Checkout';
import Billing from './pages/store/Billing';
import Profile from './pages/profile/Profile';

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
import Settings from './pages/settings/Settings';
import Account from './pages/settings/account/Account';
import NewPostPage from './pages/home/newpost/NewPost';
import ViewPostModal from './pages/home/post/ViewPost';
import Register from './pages/profile/Register';
import Main from './pages/Main';
import Login from './pages/profile/Login';
import EditProfile from './pages/profile/EditProfile';
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
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/newpost" component={NewPostPage} exact={true}/>
          <Route path="/home/post" component={ViewPostModal} exact={true}/>
          <Route path="/profile" component={Profile} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />
          <Route path="/settings/account" component={Account} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Redirect exact from ="/" to={isLoggedIn ? "/home" : "/loadpage"}/>
          <Route path="/store" component={Store} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/billing" component={Billing} />
          <Route path="/register" component={Register} exact={true}/>
          <Route path="/login" component={Login} exact={true}/>
          <Route path="/loadpage" component={Main} exact={true}/>
          <Route path="/editprofile" component={EditProfile} exact={true}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/profile">
            <IonIcon icon={person} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
          <IonTabButton tab="store" href="/store">
            <IonIcon icon={cart} />
            <IonLabel>Store</IonLabel>
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={cog} />
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);
}

export default App;
