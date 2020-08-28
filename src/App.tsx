import React from 'react';
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
import { ellipse, cart, home, cog, person } from 'ionicons/icons';
import HomePage from './pages/home/HomePage';
import Store from './pages/store/Store';
import Checkout from './pages/store/Checkout';
import Billing from './pages/store/Billing';
import Tab2 from './pages/Profile';

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
import SettingsPage from './pages/settings/SettingsPage';
import AccountPage from './pages/settings/account/AccountPage';
import NewPostPage from './pages/home/newpost/NewPostPage';
import ViewPostModal from './pages/home/post/ViewPostPage';

localStorage.removeItem("cart");
localStorage.removeItem("quantity");
import Register from './pages/Register';
import LoadPage from './pages/LoadPage';
import Login from './pages/Login';
import EditProfile from './pages/EditProfile';

const App: React.FC = () => (
  
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={HomePage} exact={true} />
          <Route path="/home/newpost" component={NewPostPage} exact={true}/>
          <Route path="/home/post" component={ViewPostModal} exact={true}/>
          <Route path="/profile" component={Tab2} exact={true} />
          <Route path="/settings" component={SettingsPage} exact={true} />
          <Route path="/settings/account" component={AccountPage} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route path="/store" component={Store} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/billing" component={Billing} />
          <Route path="/register" component={Register} exact={true}/>
          <Route path="/login" component={Login} exact={true}/>
          <Route path="/loadpage" component={LoadPage} exact={true}/>
          <Route path="/editprofile" component={EditProfile} exact={true}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={home} />
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
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

