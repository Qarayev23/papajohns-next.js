interface props {
    text: string;
}

const Button = ({ text }: props) => {
    return (
        <button className="button">{text}</button>
    )
}

export default Button