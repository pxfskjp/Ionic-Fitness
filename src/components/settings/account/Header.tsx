import React from 'react'
import { IonIcon, IonTitle } from '@ionic/react'
import { arrowBackOutline } from 'ionicons/icons'
import './Header.css'
import { useHistory } from 'react-router'

const Header: React.FC = () => {
    const history = useHistory()

    return (
        <div className="accountpage-header-header">
            <div className="accountpage-header-back">
                <IonIcon onClick={() => { history.push('/settings') }} icon={arrowBackOutline}></IonIcon>
            </div>
            <div className="accountpage-header-title">
                <IonTitle size="small">Account</IonTitle>
            </div>
            <div className="accountpage-header-right"></div>
        </div>
    )
}

export default Header

