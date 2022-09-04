export type Response = {
    items: Item[]
}

export type Item = {
    id: string,
    type: string,
    required: boolean,
    placeholder: string,
    minLength?: number | undefined,
    maxLength?: number | undefined,
    minDate?: string | undefined,
    maxDate?: string | undefined,
    options?: string[] | undefined
}

export const useFetch = () => {
    const responseMock: Response = {
        "items": [
            {
                "id": "item-id-1",
                "type": "username",
                "required": true,
                "placeholder": "Please enter your username",
                "minLength": 3,
                "maxLength": 15
            },
            {
                "id": "item-id-2",
                "type": "password",
                "required": true,
                "placeholder": "Please enter your password",
                "minLength": 8,
                "maxLength": 64
            },
            {
                "id": "item-id-3",
                "type": "birthday",
                "required": false,
                "placeholder": "Please enter your birthday",
                "minDate": "1900-01-01",
                "maxDate": "2020-01-01"
            },
            {
                "id": "item-id-4",
                "type": "gender",
                "required": false,
                "placeholder": "Please enter your gender",
                "options": [
                    "male",
                    "female"
                ]
            }
        ]
    }
    return responseMock
}