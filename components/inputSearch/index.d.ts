import InputSearch from '.'

type inputStyle = 'basic' | 'library'

const InputSearch = ( props : {
    style : inputStyle,
    onChange : ( e: NativeSyntheticEvent<TextInputChangeEventData> ) => {}
    value : string
    onSearch : ()=>{}
} ) : JSX.Element => {}

export default InputSearch