import Props from "@/types/components/label";
import "./style.scss";

const Label = ({ name }: Props) => {
    return (
        <div className="label">{name}</div>
    )
}

export default Label;