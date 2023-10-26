import {Box, Paper, Typography} from "@mui/material";
import cardBackBg from '../../assets/card_back.webp';
import PropTypes from "prop-types";
import {getColorForSuit, getSuitIcon, renderCardName} from "./service.js";


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
                {renderCardName(name)}
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
                {renderCardName(name)}
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