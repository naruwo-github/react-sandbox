import { Item } from "../../hooks/useFetch"
import AbstractFactory from "../abstract/abstractFactory"

type Props = {
    item: Item
}

const Username = (props: Props) => {
    return (
        <h2>{props.item.id}</h2>
    )
}

class UsernameFactory extends AbstractFactory {
    get type() {
        return 'username'
    }

    create(item: Item): JSX.Element {
        return <Username item={item} />
    }
}

export default UsernameFactory