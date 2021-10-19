import  { useEffect, useState } from 'react';
import initializeAuth from '../Login/Firebase/firebase.init'
import { getAuth, signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider,onAuthStateChanged,sendEmailVerification, updateProfile ,signOut } from "firebase/auth";

initializeAuth();



const useFirebase = () => {
    const [user, setUser] = useState({})
    const [name,setName]= useState('')
    const [email,setEmail]= useState('')
    const [password,setPassword]= useState('')
    const [isLoading,setIsLoading]= useState(true)
    const [error,setError]= useState(true)
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
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
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(() => {
            setError('')
          }).catch((error) => {
            setError(error.message)
          });
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

    return {
        user, isLoading,error,
        setUser,setIsLoading,setName,setEmail,setPassword,setError,
        newUser,
        login,googleSignIn,
        logout,
        updateUser,verifyEmail
    }
};

export default useFirebase;