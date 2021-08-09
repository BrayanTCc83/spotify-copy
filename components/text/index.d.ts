import Text from './index'

type textType = 'h1' | 'h2' | 'h3' | 'small' | 'sub' | 'content'

type textColor = 'white' | 'gray'

const Text = ( props : {
    type ?: textType,
    text ?: string,
    maxSize ?: number,
    color ?: textColor,
    noMargin ?: boolean
} ) : JSX.Element => {}

export default Text