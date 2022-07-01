import Content from "@/models/Content";

export default class TextContent extends Content {
    text: String

    constructor(text: String) {
        super()
        this.text = text
    }
}