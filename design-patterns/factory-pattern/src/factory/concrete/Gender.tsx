import { Item } from "../../hooks/useFetch"
import AbstractFactory from "../abstract/abstractFactory"

type Props = {
    item: Item
}

const Gender = (props: Props) => {
    return (
        <h2>{props.item.id}</h2>
    )
}

class GenderFactory extends AbstractFactory {
    get type() {
        return 'gender'
    }

    create(item: Item): JSX.Element {
        return <Gender item={item} />
    }
}

export default GenderFactory

