import { Props } from "@/types/components/tooltip";
import "./style.scss"
const Tooltip = ({ data, position }: Props) => {
    const { name, date, title, list } = data;
    return (
        <div className="tooltip-wrapper">
            <h3>{name}</h3>
            <div className="tooltip-subtitle">
                <p>{title}</p>
                <p>|</p>
                <p>{date}</p>
            </div>
            <div className="tooltip-body">
                <ul>
                    {
                        list.map((item: String) => {
                            return <li key={item.toString()}>{item}</li>
                        })
                    }
                </ul>

            </div>
        </div>
    )
}

export default Tooltip;