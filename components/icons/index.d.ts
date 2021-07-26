import IconItem from './index'

type iconsDefine = 'HOME' | 'SEARCH' | 'BOOKSHELF' | 'HISTORY' | 'COG' | 'HEART_VOID' | 'HEART_FILL' | 'PLAY' | 'PAUSE'

type onClickIcon = ( data : string ) => void

const IconItem = ( props : {
    text ?: string,
    icon ?: iconsDefine,
    data ?: string,
    onClick ?: onClickIcon
} ) : JSX.Element => {}

export default IconItem