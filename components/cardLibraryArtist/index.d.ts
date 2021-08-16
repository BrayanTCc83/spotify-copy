import CardLibraryArtist from ".";

enum cardModes {
    HORIZONTAL = 0, VERTICAL = 1
}

const CardLibraryArtist = (
    props : {
        mode : cardModes,
        name : string,
        description : string,
        image : string
    }
) : JSX.Element => {}

export default CardLibraryArtist