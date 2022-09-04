import { Item } from "../../hooks/useFetch"
import AbstractFactory from "../abstract/abstractFactory"

type Props = {
    item: Item
}

const Password = (props: Props) => {
    return (
        <h2>{props.item.id}</h2>
    )
}

class PasswordFactory extends AbstractFactory {
    get type() {
        return 'password'
    }

    create(item: Item): JSX.Element {
        return <Password item={item} />
    }
}

export default PasswordFactory
