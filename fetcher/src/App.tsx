import React from 'react'

type Props = {
    data: string[]
}

export const App = (props: Props) => {
    return (
        <React.Fragment>
            {props.data.map((user: string, index: number) => {
                return <h1 key={index}>Hi {user}!</h1>
            })}
        </React.Fragment>
    )
}