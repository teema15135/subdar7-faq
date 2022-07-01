<script lang="ts">
import FAQ from "@/models/FAQ.vue";
import TextContent from "@/models/TextContent.vue";

export default function parseXmlData(xmlString: string): FAQ[] {
  let parser = new DOMParser();
  let data = parser.parseFromString(xmlString, "text/xml")

  let faqs: FAQ[] = []
  data.getElementsByTagName("faqs")
  console.log(data.getElementsByTagName("faqs"))

  return faqs
}
</script>