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
import Tab2 from './pages/Tab2';
import Store from './pages/Store';
import ProductView from './pages/ProductView';
import Checkout from './pages/Checkout';

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
import Register from './pages/Register';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={HomePage} exact={true} />
          <Route path="/tab2" component={Tab2} exact={true} />
          <Route path="/settings" component={SettingsPage} exact={true} />
          <Route path="/settings/account" component={AccountPage} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
          <Route path="/store" component={Store} />
          <Route path="/productview" component={ProductView} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/register" component={Register}/>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={home} />
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
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

