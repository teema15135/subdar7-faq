export const state = () => ({
  faqs: [],
})

export const mutations = {
  setFaqs(state, faqs) {
    state.faqs = faqs
  },
}
