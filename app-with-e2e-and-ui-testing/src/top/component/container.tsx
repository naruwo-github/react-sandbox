type Props = {
    data: {
        id: string
        componentId: string
        dynamicData: string
    }
}

export const Container: React.FC<Props> = ({ data }) => {
    return (
        <div style={{ background: 'lightgray' }}>
            <h2>Container</h2>
            <ul>
                <li>id: {data.id}</li>
                <li>componentId: {data.componentId}</li>
                <li>dynamicData: {data.dynamicData}</li>
            </ul>
        </div>
    )
}