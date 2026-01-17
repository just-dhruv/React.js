import { useState } from "react"

export default function useToggle(initialValue = false) {
    const [value, setValue] = useState(initialValue)

    const toggle = () => setValue(prev => !prev)

    return [value, toggle] // custom hooks always return something like value or functions
}