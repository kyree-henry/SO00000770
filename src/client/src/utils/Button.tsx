import { ReactElement } from "react"

export default function Button(props: buttonProps){
    return <button className="btn btn-primary">{props.children}</button>
}

export interface buttonProps{
    children: ReactElement
}