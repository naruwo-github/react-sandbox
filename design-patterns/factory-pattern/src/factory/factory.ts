import { Item } from "../hooks/useFetch"
import FactoryMapper from "./factoryMapper"

class Factory {
    factoryMapper: FactoryMapper

    constructor() {
        this.factoryMapper = new FactoryMapper()
    }

    create(item: Item): JSX.Element {
        const factory = this.factoryMapper.factory(item.type)
        return factory.create(item)
    }
}

export default Factory