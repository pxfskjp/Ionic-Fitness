import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonTabs, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton } from '@ionic/react';
import { cart, home, cog, person } from 'ionicons/icons';

import Home from '../pages/home/Home';
import Store from '../pages/store/Store';
import Checkout from '../pages/store/Checkout';
import Billing from '../pages/store/Billing';
import Settings from '../pages/settings/Settings';
import Account from '../pages/settings/account/Account';
import NewPostPage from '../pages/home/newpost/NewPost';
import ViewPostModal from '../pages/home/post/ViewPost';
import Profile from '../pages/profile/Profile';
import EditProfile from '../pages/profile/EditProfile';

const MainTabs: React.FC = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/home" component={Home} exact={true} />
                <Route path="/home/newpost" component={NewPostPage} exact={true} />
                <Route path="/home/post" component={ViewPostModal} exact={true} />
                <Route path="/settings" component={Settings} exact={true} />
                <Route path="/settings/account" component={Account} exact={true} />
                <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
                <Route path="/profile" component={Profile} exact={true} />
                <Route path="/store" component={Store} />
                <Route path="/store/checkout" component={Checkout} />
                <Route path="/store/billing" component={Billing} />
                <Route path="/editprofile" component={EditProfile} exact={true} />
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
    );
};

export default MainTabs;
