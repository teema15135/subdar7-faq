import Content from "@/models/Content";

export default class LinkContent extends Content {
    href: String

    constructor(href: String) {
        super()
        this.href = href
    }
}