import {Box, Paper, Typography} from "@mui/material";
import ClubsIcon from "../assets/card_types/clubs.svg";
import DiamondsIcon from "../assets/card_types/diamonds.svg";
import Hearts from "../assets/card_types/hearts.svg";
import Spades from "../assets/card_types/spades.svg";
import cardBackBg from '../assets/card_back.webp'
import PropTypes from "prop-types";


const styles = {
    card: {
        height: '160px',
        borderRadius: '9px',
        width: '140px',
        padding: '10px',
        border: '1px solid #CCC',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '10px',
        borderShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
    },
    text: {
        fontSize: '30px',
        lineHeight: 1,
    }
};

const getColorForSuit = (suit) => {
    if (suit === 'Diamonds' || suit === 'Hearts') return 'red'
    return 'black';
}
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
const Card = ({ hiddenCard = false, name = '', type = ''}) => {
    if (hiddenCard) {
        return (
            <Paper sx={{
                ...styles.card,
                backgroundImage: `url(${cardBackBg})`,
                backgroundSize: 'cover',
            }} />
        )
    }
    return (
        <Paper sx={styles.card} >
            <Typography sx={{
                ...styles.text,
                color: getColorForSuit(type),
                alignSelf: 'flex-start',

            }}>
                {isNaN(Number(name)) ? name[0]: name}
            </Typography>
            <Box
                component='img'
                src={getSuitIcon(type)}
                sx={{ height: '35px', width: '35px' }}
            />
            <Typography sx={{
                ...styles.text,
                color: getColorForSuit(type),
                alignSelf: 'flex-end',
            }}>
                {isNaN(Number(name)) ? name[0]: name}
            </Typography>
        </Paper>
    )
}
Card.propTypes = {
    hiddenCard: PropTypes.bool,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
export default Card;