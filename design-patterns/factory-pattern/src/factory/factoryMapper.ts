import BirthdayFactory from "./concrete/Birthday"
import GenderFactory from "./concrete/Gender"
import PasswordFactory from "./concrete/Password"
import UsernameFactory from "./concrete/Username"

class FactoryMapper {
    factories: Record<string, any> // TODO: remove any

    constructor() {
        const birthdayFactory = new BirthdayFactory()
        const genderFactory = new GenderFactory()
        const passwordFactory = new PasswordFactory()
        const usernameFactory = new UsernameFactory()
        this.factories = {}
        this.factories[birthdayFactory.type] = birthdayFactory
        this.factories[genderFactory.type] = genderFactory
        this.factories[passwordFactory.type] = passwordFactory
        this.factories[usernameFactory.type] = usernameFactory
    }

    factory = (type: string) => this.factories[type]
}

export default FactoryMapper