import Content from '@/models/Content'

export default class FAQ {
    title: String
    contents: Content[]
    
    constructor(title: String, contents: Content[]) {
        this.title = title
        this.contents = contents
    }
}