import { StaticImageData } from "next/image"

type Props = {
    data: dataType,
    type?: string,
    children: React.ReactNode
}

type dataType = {
    name: String,
    list: string[],
    title: String,
    date: String,
    description: String,
    content: String[],
}

export default Props