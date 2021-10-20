import  { useEffect, useState } from 'react';
import initializeAuth from '../Login/Firebase/firebase.init'
import { getAuth, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider,onAuthStateChanged,sendEmailVerification, updateProfile, GithubAuthProvider,FacebookAuthProvider, signOut } from "firebase/auth";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

initializeAuth();



const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [isLoading,setIsLoading]= useState(true)
    const [error,setError]= useState(true)
    
  const auth = getAuth();

  ///providers
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
    
    ///user state observer 
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)                
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
    }, [])

    ///signUp user 
    const newUser = () => {
      return  createUserWithEmailAndPassword(auth, email, password)
  
    }

    ///verify Email
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                
    return 'verify'
  });
    }
    ///sign in with email and password
  const login = () => {
    setIsLoading(true);
      return  signInWithEmailAndPassword(auth, email, password)
      
   }
    //sign in with google
    const googleSignIn = () => {
        setIsLoading(true)
        return  signInWithPopup(auth, googleProvider)
            
    }
    
    ///update user profile

    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: name,
            email: email,
            password: password,
          photoURL: 'https://i.ibb.co/CQWnXtz/profile-user.png'
          }).then(() => {
            setError('')
          }).catch((error) => {
            setError(error.message)
          });
  }
  
  /// signin github 
  const githubSignIn = () => {
    setIsLoading(true);
      return  signInWithPopup(auth,githubProvider)
      
  }

  //signin facebook
  const facebookSignIn = () => {
    setIsLoading(true);
  return  signInWithPopup(auth, facebookProvider)
  
  }

    ///logout
    const logout = () => {
            setIsLoading(true)
            signOut(auth).then(() => {
             setUser({})
            })
                .finally(setIsLoading(false))
                ;
            }
console.log(user.displayName,user.photoURL)
    return {
        user, isLoading,error,
        setUser,setIsLoading,setName,setEmail,setPassword,setError,
        newUser,
        login,googleSignIn,githubSignIn,facebookSignIn,
        logout,
        updateUser,verifyEmail
    }
};

export default useFirebase;