//
const avatarUrl = "https://s3.amazonaws.com/riteshakumar.com/avatar.png"

/**
 *
 */
class AvatarTransformer {
    /**
     *
     * @param element
     */
    element(element) {
        element.setAttribute("src", avatarUrl)
    }
}

module.exports = AvatarTransformer