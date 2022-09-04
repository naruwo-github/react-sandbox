import { Item } from "../../hooks/useFetch"
import AbstractFactory from "../abstract/abstractFactory"

type Props = {
    item: Item
}

const Birthday = (props: Props) => {
    return (
        <h2>{props.item.id}</h2>
    )
}

class BirthdayFactory extends AbstractFactory {
    get type(): string {
        return 'birthday'
    }
    create(item: Item): JSX.Element {
        return <Birthday item={item} />
    }
}

export default BirthdayFactory