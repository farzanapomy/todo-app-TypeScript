import { stat } from "fs";
import { ActionType } from "./ActionType"

export interface Todo {
    id: number,
    name: string,
    email: string
}



export function reducer(state: Todo[], action: ActionType) {
    switch (action.type) {
        case "ADD":
            return [
                ...state,
                {
                    id: state.length,
                    name: action.name,
                    email: action.email
                }
            ]
        case "DELETE":
            return (state.filter(({ id }) => id !== action.id))

        default:
            return state
    }
}