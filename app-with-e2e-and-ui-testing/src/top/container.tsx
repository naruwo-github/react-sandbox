type Props = {
    data: {
        id: string
        componentId: string
        flag: boolean
        option: string
    }
}

export const Container: React.FC<Props> = ({ data }) => {
    return (
        <div style={{ background: 'lightgray' }}>
            <h2>Container</h2>
            <ul>
                <li>id: {data.id}</li>
                <li>componentId: {data.componentId}</li>
                <li>flag: {data.flag ? 'OK' : 'NG'}</li>
                <li>option: {data.option}</li>
            </ul>
        </div>
    )
}