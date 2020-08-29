import { db, firebase } from '../firebase'

const FirebaseFileDatabaseApi = (firstName: string, lastName: string, phoneNumber: string, emailAddress: string, streetNumber: string, street: string, suburb: string, postcode: string, city: string): [
    Function
] => {
    const pushTransactions = () => {
        let id = Math.round(Math.random()*(Math.pow(10, 12)))
        db.collection('transactions').add({
            id: id,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            name: firstName + " " + lastName,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress,
            address: streetNumber + " " + street + ", " + suburb + ", " + city + " " + postcode,
            order: getCart()
        })
        return id
    }
    return [pushTransactions]
}

function getCart() {
    let order: any[] = []
    let cart = JSON.parse(localStorage.getItem("cart") || '[]')
    let quantity = JSON.parse(localStorage.getItem("quantity") || '[]')
    for (let i = 0; i < cart.length; i++) {
        for (let j = 0; j < quantity.length; j++) {
            if (cart[i].name === quantity[j].name) {
                let obj = {name: cart[i].name, quantity: quantity[j].amount}
                order.push(obj)
            }
        }
    }
    return order
}

export default FirebaseFileDatabaseApi