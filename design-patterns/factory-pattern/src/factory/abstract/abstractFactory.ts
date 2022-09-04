import { Item } from "../../hooks/useFetch";

abstract class AbstractFactory {
    abstract get type(): string
    abstract create(item: Item): JSX.Element
}

export default AbstractFactory