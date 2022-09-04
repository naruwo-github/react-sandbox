import React from "react"
import Factory from "./factory/factory"
import { Response, Item } from "./hooks/useFetch"

type Props = {
  data: Response
  factory: Factory
}

const App = ({ data, factory }: Props): JSX.Element => {
  return (
    <React.Fragment>
      {data.items.map((item: Item) => factory.create(item))}
    </React.Fragment>
  )
}

export default App
