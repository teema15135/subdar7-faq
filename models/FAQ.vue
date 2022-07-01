<script lang="ts">
import Content from './Content.vue'

export default class FAQ {
    title: String
    contents: Content[]
    
    constructor(title: String, contents: Content[]) {
        this.title = title
        this.contents = contents
    }
}
</script>