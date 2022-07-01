import FAQ from '@/models/FAQ'
import TextContent from '@/models/TextContent'
import Content from '@/models/Content'
import ImageContent from '~/models/ImageContent'
import LinkContent from '~/models/LinkContent'

function elementToContentModel(element: Element): Content | null {
  if (element.textContent == null || element.textContent.trim().length == 0)
    return null
  switch (element.tagName) {
    case 'text':
      return new TextContent(element.textContent)
    case 'image':
      return new ImageContent(element.textContent)
    case 'link':
      return new LinkContent(element.textContent)
    default:
      return null
  }
}

function elementToFaqModel(faq: Element): FAQ | null {
  if (faq) {
    let title = faq.getElementsByTagName('title')[0].textContent
    if (title == null) return null

    let contentArray = Array.from(
      faq.getElementsByTagName('contents')[0].children
    )
    let contents: Content[] = contentArray
      .map((element) => elementToContentModel(element))
      .filter((element): element is Content => element != null)
    return new FAQ(title, contents)
  } else {
    return null
  }
}

export default {
  parseXmlData: function (xmlString: string): FAQ[] {
    let parser = new DOMParser()
    let data = parser.parseFromString(xmlString, 'text/xml')

    let eleFaqs = Array.from(
      data.getElementsByTagName('faqs')[0].getElementsByTagName('faq')
    )

    return eleFaqs
      .map((faq) => elementToFaqModel(faq))
      .filter((faq): faq is FAQ => faq != null)
  },
}
