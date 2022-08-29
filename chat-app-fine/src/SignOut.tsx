import { Button } from "@mui/material"
import { auth } from "./firebase"

const SignOut = () => {
    return (
        <div className='header'>
            <h1>Fine</h1>
            <h3>{auth.currentUser!.displayName}</h3>
            <Button
                onClick={() => { auth.signOut() }}
            >
                サインアウト
            </Button>
        </div>
    )
}

export default SignOut