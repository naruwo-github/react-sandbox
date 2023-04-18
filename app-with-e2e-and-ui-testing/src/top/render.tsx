import React from 'react'
import ReactDOM from 'react-dom/client'
import { setting } from './config/setting'
import { responseMock } from './api/response'
import { Container } from './component/Container'

// Fetch data from API
const response = await responseMock

// Get DOM elements to render UI
const targetElements = document.querySelectorAll('[data-js-target]')

targetElements.forEach(element => {
    const dataOnHtml = JSON.parse((element as HTMLElement).dataset.jsTarget?.replaceAll("'", '"') ?? "{}")
    const matchedDataOnResponse = response[dataOnHtml.id]
    const matchedDataOnSetting = setting[dataOnHtml.id]
    const data = { ...dataOnHtml, ...matchedDataOnResponse, ...matchedDataOnSetting }

    ReactDOM.createRoot(element as HTMLElement).render(
        <React.StrictMode>
            <Container data={data} />
        </React.StrictMode>,
    )
})
