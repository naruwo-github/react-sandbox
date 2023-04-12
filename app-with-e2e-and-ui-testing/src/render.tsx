import React from 'react'
import ReactDOM from 'react-dom/client'
import { responseMock } from './top/config'
import { Container } from './top/container'

const findMatchedData = (dataList: Record<string, any>[], id: string): Record<string, any> => {
    const matchedData = dataList.filter((data) => data.id === id);
    return matchedData.length > 0 ? matchedData[0] : {};
};

const parseDataFromElement = (element: Element) => {
    try {
        const dataString = (element as HTMLElement).dataset.jsTarget?.replaceAll("'", '"') ?? "{}";
        return JSON.parse(dataString);
    } catch (error) {
        console.error("Error parsing data from element:", error);
        return {};
    }
}

const response = await responseMock
const targetElements = document.querySelectorAll('[data-js-target]')
targetElements.forEach(element => {
    const dataOnHtml = parseDataFromElement(element)
    const matchedDataOnResponse = findMatchedData(response.result, dataOnHtml.id)
    const data = { ...dataOnHtml, ...matchedDataOnResponse[0] }

    ReactDOM.createRoot(element as HTMLElement).render(
        <React.StrictMode>
            <Container data={data} />
        </React.StrictMode>,
    )
})
