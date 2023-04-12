type Props = {
    data: {
        id: string
        componentId: string
        flag: boolean
        option: string
    }
}

export const Container = ({ data }: Props) => {
    return (
        <>
            <h2>Container</h2>
            <ul>
                <li>id: {data.id}</li>
                <li>componentId: {data.componentId}</li>
                <li>flag: {data.flag}</li>
                <li>option: {data.option}</li>
            </ul>
        </>
    )
}