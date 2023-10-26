import {Box, Typography} from "@mui/material";
import PropTypes from "prop-types";

const styles = {
    rootWrapper: {
        position: 'absolute',
        backgroundColor: 'rgb(218, 12, 129, 0.8)',
        left: '-150px',
        padding: '40px',
        bottom: '100px',
        borderRadius: '30px',
    },
    title: {
        fontSize: '30px',
        color: '#FFF',
        fontFamily: 'Satisfy',

    },
    textStyle: {
        fontSize: '20px',
        color: '#FFF',
        maxWidth: '300px',
    },
    secondaryText: {
        marginTop: '20px',
        fontSize: '11px',
        color: '#FFF',
        maxWidth: '300px',
    }
}
const renderInfoAboutExtraCard = (hand) => {
    const oneCardTaken = hand.length === 3;
    return  (
        <Typography sx={styles.title}>
            Dealer took extra card{oneCardTaken?  null : 's'}!
        </Typography>
    )
}
const GameInsights = ({ game }) => {
    const { dealerHand } = game;
    if (dealerHand.length === 2){
        return null;
    }
    // showing only one extra cards
    const [, , ...extraCards] = dealerHand;
    return (
        <Box sx={styles.rootWrapper}>
            {dealerHand.length > 2 && renderInfoAboutExtraCard(dealerHand)}
            {extraCards.map(({name, type}, index) => (
                <Typography sx={styles.textStyle}>
                    {extraCards.length > 1? `${index + 1}.` : ""} {name} of {type}
                </Typography>
            ))}
            <Typography sx={styles.secondaryText}>
               * Dealer can take extra cards in case  if his score is {`<`} 17 or he has "Soft 17" hand (Ace + 6).
            </Typography>
        </Box>
    )
}
GameInsights.propTypes = {
    game: PropTypes.object.isRequired,
}
export default GameInsights;