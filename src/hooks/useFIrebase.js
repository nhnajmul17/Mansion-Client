import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/Pages/Login/Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";


const useFirebase = () => {

    initializeAuthentication()

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const register = (name, email, password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch(() => {

                });
                history.push('/home')

            })
            .catch((error) => {
                setError(error.massege);

            })
            .finally(() => setLoading(false));

    }

    const login = (email, password, location, history) => {
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home'
                history.push(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setLoading(false));

    }

    const logOut = () => {
        setLoading(true)
        signOut(auth).then(() => {

        }).catch((error) => {

        })
            .finally(() => setLoading(false));

    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://polar-badlands-41295.herokuapp.comusers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://polar-badlands-41295.herokuapp.comusers/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])


    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)

            } else {
                setUser({})
            }
            setLoading(false)
        });
        return () => unsubscribed;
    }, [auth])



    return { user, admin, error, loading, setLoading, register, login, logOut }
}

export default useFirebase;