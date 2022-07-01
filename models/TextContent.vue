<script lang="ts">
import Content from "./Content.vue";

export default class TextContent extends Content {
    text: String

    constructor(text: String) {
        super()
        this.text = text
    }
}
</script>