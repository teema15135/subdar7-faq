import Content from "@/models/Content";

export default class ImageContent extends Content {
    url: String

    constructor(url: String) {
        super()
        this.url = url
    }
}