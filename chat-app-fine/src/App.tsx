import React from "react"
import { auth } from "./firebase"
import SignIn from "./SignIn"
import { useAuthState } from 'react-firebase-hooks/auth'
import Fine from "./Fine"

export const App = () => {
  // @ts-ignore
  const [user] = useAuthState(auth)

  return (
    <React.Fragment>
      {user ? <Fine /> : <SignIn />}
    </React.Fragment>
  )
}