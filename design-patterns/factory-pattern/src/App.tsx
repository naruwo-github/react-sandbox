import { Response, Item } from "./hooks/useFetch"

type Props = {
  data: Response
}

const App = (props: Props) => {
  return (
    props.data.items.map((item: Item) => {
      return (
        <div>
          {item.id}
        </div>
      )
    })
  )
}

export default App
