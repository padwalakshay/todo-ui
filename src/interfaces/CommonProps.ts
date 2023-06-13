
export interface ListProps {
    todoList: List[]
}

export interface List {
    id: number,
    name: string,
    action: boolean
}

export interface Inputprops {
    initialstate: number,
    statechanger: (val: number) => void
}

export interface ListInputProps {
    initialstate: number,
    statechanger: (val: number) => void,
    todoList: List[]

}
