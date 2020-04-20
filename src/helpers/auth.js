import * as firebaseService from "../services/firebase"

export const login = async (email, password) => {
    try {
        const response =  await firebaseService.auth.signInWithEmailAndPassword(email, password)
        return response
    } catch (error) {
        return error.message
    }
}
export const register = async (email, password) => {
    try {
        const response =  await firebaseService.auth.createUserWithEmailAndPassword(email, password)
        return response
    } catch (error) {
        return error.message  
    }
}
export const loginWithGoogle = async () => {
    const provider = firebaseService.ggProvider.addScope('profile');
    return await firebaseService.auth.signInWithPopup(provider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        return result
        }).catch((error) => {
            return error.message
        });

}
export const loginWithFaceBook = async () => {
    return await firebaseService.auth.signInWithPopup(firebaseService.fbProvider).then((result) => {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        return result
        }).catch((error) => {
            return error.message
        });
}

export const logout = () => {
    return firebaseService.auth.signOut()
}

export const getCurrentUser = () => {
    return firebaseService.auth.currentUser
}

// Firebase Ui Authentication
var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    // signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        {
            provider: firebaseService.ggProviderUI,
            customParameters: {
              // Forces account selection even when one account
              // is available.
              prompt: 'select_account'
            }
          },
          {
            provider: firebaseService.emailProviderUI.PROVIDER_ID,
          }
    ],
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
  };

export const uiStart = () => {
    firebaseService.ui.start('#firebaseUI-auth-container', uiConfig)
}

// Chat
export const writeMessage = async (content, user) => {
  try {
    await firebaseService.db.ref('chats').push({
        content,
        timestamp: Date.now(),
        user: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL
        }
      })
    return {success: true, error: null}
  } catch (error) {
    return {success: false, error: error.message}
  }
}

export const readMessage = (callback) => {
  if(firebaseService.db && firebaseService.db.ref('chats') )
  {
    firebaseService.db.ref('chats').on('value', snapshot => {
      snapshot.val() && callback(Object.values(snapshot.val()))
    })
  }
}

export const clearMessage = () => {
  firebaseService.db.ref('chats').remove()
}