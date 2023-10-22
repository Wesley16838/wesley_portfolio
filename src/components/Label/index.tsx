import Props from "@/types/components/label";
import "./style.scss";

const Label = ({ name }: Props) => {
    return (
        <div className="label"><p># {name}</p></div>
    )
}

export default Label;