import Button from "."

type clickHandler = () => void

const Button = ( props : {
    text ?: string,
    onClick ?: clickHandler
} ) : JSX.Element => {}

export default Button