import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './presenter/App'
import ArticleDriverImpl from "./driver/articleDriver"
import ArticleRepositoryImpl from "./repository/articleRepository"
import ArticleUseCaseImpl from "./usecase/articleUseCase"

const dom = document.getElementById('root') as HTMLElement
const root = ReactDOM.createRoot(dom)
const repository = new ArticleRepositoryImpl(new ArticleDriverImpl())
const useCase = new ArticleUseCaseImpl(repository)
root.render(
  <React.StrictMode>
    <App useCase={useCase} />
  </React.StrictMode>
)
