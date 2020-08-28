import React, { useState, useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonSearchbar, IonProgressBar, IonButtons, IonButton, IonIcon, IonText } from '@ionic/react';
import Product from '../../components/store/Product';
import { cart } from 'ionicons/icons';
import { db, firebase } from '../../firebase';

const Store: React.FC = () => {
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);

  const [products, setProducts] = useState<firebase.firestore.DocumentData[]>();

  useEffect(() => {
    fetchProducts()
  }, [])

  useEffect(() => {
    window.addEventListener('resize', fetchProducts)
  });

  const fetchProducts = () => {
    db.collection('products').orderBy('name').onSnapshot(snapshot => {
      setProducts(snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data()
      })))
      if (!loaded) setTimeout(setLoaded, 1000, true)
    })
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Store</IonTitle>
          <IonProgressBar type="indeterminate" hidden={loaded}></IonProgressBar>
          <IonButtons slot="end">
            <IonButton routerLink="/checkout">
              <IonText>Checkout</IonText>
              <IonIcon slot="end" icon={cart} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonToolbar>
          <IonSearchbar value={search} onIonChange={e => setSearch(e.detail.value!)} placeholder="Product search"></IonSearchbar>
        </IonToolbar>
        <IonGrid>
          <IonRow>
            {products &&
              products.filter((i) => i.product.name.toLowerCase().startsWith(search.toLowerCase())).map(({ id, product }) => {
                return <Product key={id} name={product.name} price={product.price} description={product.description} image={product.image} active={loaded} />;
              })
            }
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Store;
