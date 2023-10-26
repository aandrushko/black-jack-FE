import Spades from "../../assets/card_types/spades.svg";
import ClubsIcon from "../../assets/card_types/clubs.svg";
import DiamondsIcon from "../../assets/card_types/diamonds.svg";
import Hearts from "../../assets/card_types/hearts.svg";

const getSuitIcon = (suit) => {
    switch (suit) {
        case 'Spades':
            return Spades;
        case 'Clubs':
            return ClubsIcon;
        case 'Diamonds':
            return DiamondsIcon;
        case 'Hearts':
            return Hearts;
        default:
            return null;
    }
}
const getColorForSuit = (suit) => {
    if (suit === 'Diamonds' || suit === 'Hearts') return 'red'
    return 'black';
}

const renderCardName = (name) => {
    if (isNaN(Number(name))) {
        return name[0];
    }
    return name;
}

export {
    getSuitIcon,
    getColorForSuit,
    renderCardName,
}