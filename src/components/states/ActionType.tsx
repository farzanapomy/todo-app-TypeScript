export type ActionType = {
    type: "ADD"
    name: string
    email: string
}
    |
{
    type: "DELETE",
    id: number
}