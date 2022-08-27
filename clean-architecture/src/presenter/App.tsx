import { useEffect, useState } from "react"
import { ArticleUseCase } from "../interface/usecase/articleUseCase"
import { Article } from "../domain/article"

type Props = {
  useCase: ArticleUseCase
}

const App = ({ useCase }: Props) => {
  const [articles, setArticles] = useState<Article[]>([])

  useEffect(() => {
    fetchArticles()
  }, [])

  const fetchArticles = async () => {
    setArticles(await useCase.fetchArticles())
  }

  return (
    <>この中へarticlesを渡してあげ、以降の階層でUI表示を行う</>
  )
}

export default App