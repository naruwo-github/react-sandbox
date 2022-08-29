import { Button } from "@mui/material"
import firebase from "firebase/compat/app"
import { auth } from "./firebase"

const SignIn = () => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <Button
            onClick={signInWithGoogle}
        >
            Googleでログインする
        </Button>
    )
}

export default SignIn