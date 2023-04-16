## Features of this app

This section describes the features of the app, mainly consisting of `index.html` and `src/*`.

### index.html

- An HTML file with multiple DOM elements as rendering targets for React components
- The trigger for rendering is the `data-js-target` attribute
- Values of the `data-js-target` attribute
  - A unique identifier `id` for each DOM element
  - Other values dynamically calculated within the AP server (if SSR is used for HTML)

### src/\*

`api/response.ts`

- API response mock
- Contains information associated with the identifier `id`

`component/`

- Files defining React components uniquely associated with the identifier `id`

`config/setting.ts`

- Files defining static information uniquely associated with the identifier `id`

`render.tsx`

- A process to bind DOM elements, React components, static configuration information, dynamic configuration information, and API response information to render the UI
