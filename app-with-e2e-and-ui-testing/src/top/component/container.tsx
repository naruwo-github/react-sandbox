import React from "react"
import { ComponentFactory } from "./factory/ComponentFactory"

type Props = {
    data: {
        id: string
        componentId: ComponentType
        dynamicData: string
    }
}

export const Container: React.FC<Props> = ({ data }) => {
    return (
        <React.Fragment>
            <div style={{ background: 'lightgray' }}>
                <h2>Container</h2>
                <ul>
                    <li>id: {data.id}</li>
                    <li>componentId: {data.componentId}</li>
                    <li>dynamicData: {data.dynamicData}</li>
                </ul>
            </div>
            <ComponentFactory componentId={data.componentId} />
        </React.Fragment>
    )
}