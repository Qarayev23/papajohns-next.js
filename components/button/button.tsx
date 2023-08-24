import { ButtonProps } from "@/types"

const Button = ({ text, handleClick }: ButtonProps) => {
    return (
        <button
            type="button"
            className="g-button"
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default Button