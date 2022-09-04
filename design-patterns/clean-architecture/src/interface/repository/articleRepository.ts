import { Article } from "../../domain/article"

interface ArticleRepository {
  findAll(): Promise<Article[]>
}

export default ArticleRepository