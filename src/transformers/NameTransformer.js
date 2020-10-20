const username = "riteshkumar"

/**
 *
 */
class NameTransformer {
    /**
     *
     * @param element
     */
    element(element) {
        element.setInnerContent(username)
    }
}

module.exports = NameTransformer