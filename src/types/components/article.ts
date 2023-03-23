import { StaticImageData } from "next/image"

type Props = {
    data: dataType,
    mode: Boolean,
    children: React.ReactNode
}

type dataType = {
    name: String,
    list: string[],
    title: String,
    date: String,
    content: String,
}

export default Props