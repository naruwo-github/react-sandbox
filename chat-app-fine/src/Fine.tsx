import SignOut from "./SignOut"
import { db, auth } from "./firebase"
import { useEffect, useState } from "react"
import firebase from "firebase/compat/app"
import { Input } from "@mui/material"
import SendIcon from '@mui/icons-material/Send'
import './fine.css'

const Fine = () => {
    const [messages, setMessages] = useState<any[]>([])
    useEffect(() => {
        db.collection('messages')
            .orderBy('createdAt')
            .limit(50)
            .onSnapshot((snapshot) => {
                setMessages(snapshot.docs.map(doc => doc.data()))
            })
    }, [])

    return (
        <div>
            <SignOut />
            <div className="messages">
                {messages.map(({ id, text, photoURL, uid }) => (
                    <div
                        key={id}
                        className={uid === auth.currentUser!.uid ? 'sent' : 'received'}
                    >
                        <img
                            className='icon'
                            src={photoURL}
                            alt=''
                        />
                        <p>{text}</p>
                    </div>
                ))}
            </div>
            <SendMessage />
        </div>
    )
}

export default Fine

const SendMessage = () => {
    const [message, setMessage] = useState<string>('')
    const sendMessage = (e: any) => {
        e.preventDefault()
        const { uid, photoURL } = auth.currentUser!
        db.collection('messages').add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setMessage('')
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className='send-message'>
                    <Input
                        placeholder="messages"
                        type='text'
                        onChange={(e) => { setMessage(e.target.value) }}
                        value={message}
                    />
                    <SendIcon />
                </div>
            </form>
        </div>
    )
}