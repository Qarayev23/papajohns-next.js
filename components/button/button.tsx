import { ButtonProps } from "@/types"

const Button = ({ handleClick, className, type, children }: ButtonProps) => {
    return (
        <button
            type={type || "button"}
            className={"g-button" + " " + className}
            onClick={handleClick}
        >
            {children}
        </button>
    )
}

export default Button