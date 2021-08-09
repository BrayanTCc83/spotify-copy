import IconItem from './index'

type iconsDefine = 'HOME' | 'SEARCH' | 'BOOKSHELF' | 'HISTORY' | 'COG' | 'HEART_VOID' | 
    'HEART_FILL' | 'PLAY' | 'PAUSE' | 'PLUS' | 'EXCHANGE' | 'BORDER' | 'LIST' | 'STEP' | 
    'MINUS' | 'BACK' | 'ELLIPSIS'

type onClickIcon = ( data : string ) => void

const IconItem = ( props : {
    text ?: string,
    icon ?: iconsDefine,
    data ?: string,
    onClick ?: onClickIcon,
    rotate ?: number,
    iconStyle ?: any
} ) : JSX.Element => {}

export default IconItem