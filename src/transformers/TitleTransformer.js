/**
 * Transform the title
 */
class TitleTransformer {
    /**
     * Change title name
     * @param element
     */
    element(element) {
        const name = "@riteshkumar"
        element.setInnerContent(name + "|Linktree")
    }
}

module.exports = TitleTransformer