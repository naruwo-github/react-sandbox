import React from 'react'
import ReactDOM from 'react-dom/client'
import { responseMock } from './config'

const respone = await responseMock
const targetElements = document.querySelectorAll('[data-js-target]')

targetElements.forEach(element => {
    const data = JSON.parse(
        (element as HTMLElement).dataset.jsTarget?.replaceAll('\'', '"')
        ?? '{}'
    )
    const resMatchingData = respone.result.filter(res => res.id === data.id)
    ReactDOM.createRoot(element as HTMLElement).render(
        <React.StrictMode>
            <h1>component id: {resMatchingData[0].componentId}</h1>
        </React.StrictMode>,
    )
})