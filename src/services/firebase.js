import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
const firebaseConfig = {
    apiKey: "AIzaSyDx1rrXIAaWoJhzmiu0cyngoIrPxqgJG04",
    authDomain: "fast-tax-17e1f.firebaseapp.com",
    databaseURL: "https://fast-tax-17e1f.firebaseio.com",
    projectId: "fast-tax-17e1f",
    storageBucket: "fast-tax-17e1f.appspot.com",
    messagingSenderId: "840556204908",
    appId: "1:840556204908:web:d32c6d07bcbfa11fd41949",
    measurementId: "G-G3G0CEWBH0"
}
firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const db = firebase.database()
export const ui = new firebaseui.auth.AuthUI(auth)
export const ggProvider = new firebase.auth.GoogleAuthProvider()
export const fbProvider = new firebase.auth.FacebookAuthProvider()
export const ggProviderUI = firebase.auth.GoogleAuthProvider.PROVIDER_ID
export const fbProviderUI = firebase.auth.FacebookAuthProvider.PROVIDER_ID
export const emailProviderUI = firebase.auth.EmailAuthProvider