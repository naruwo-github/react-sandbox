import { Article } from "../domain/article"
import { ArticleUseCase } from "../interface/usecase/articleUseCase"
import ArticleRepository from "../interface/repository/articleRepository"

class ArticleUseCaseImpl implements ArticleUseCase {
    readonly articleRepository: ArticleRepository

    constructor(repository: ArticleRepository) {
        this.articleRepository = repository
    }

    async fetchArticles(): Promise<Article[]> {
        return await this.articleRepository.findAll()
    }
}

export default ArticleUseCaseImpl 