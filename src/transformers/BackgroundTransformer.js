/**
 * Changes the background
 */
class BackgroundTransformer {
    /**
     * Change the background color
     * @param element
     */
    element(element) {
        element.setAttribute('style', "background-color: #FFB6C1")
    }
}
module.exports = BackgroundTransformer