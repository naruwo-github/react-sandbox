import React from 'react'
import ReactDOM from 'react-dom/client'
import { setting } from './config/setting'
import { responseMock } from './api/response'
import { Container } from './component/container'

const parseDataFromElement = (element: Element) => {
    try {
        const dataString = (element as HTMLElement).dataset.jsTarget?.replaceAll("'", '"') ?? "{}";
        return JSON.parse(dataString);
    } catch (error) {
        console.error("Error parsing data from element:", error);
        return {};
    }
}

// Fetch data from API
const response = await responseMock

// Get DOM elements to render UI
const targetElements = document.querySelectorAll('[data-js-target]')

targetElements.forEach(element => {
    const dataOnHtml = parseDataFromElement(element)
    const matchedDataOnResponse = response[dataOnHtml.id]
    const matchedDataOnSetting = setting[dataOnHtml.id]
    const data = { ...dataOnHtml, ...matchedDataOnResponse, ...matchedDataOnSetting }

    ReactDOM.createRoot(element as HTMLElement).render(
        <React.StrictMode>
            <Container data={data} />
        </React.StrictMode>,
    )
})
