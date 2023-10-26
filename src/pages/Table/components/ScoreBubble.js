import {Box, Typography} from "@mui/material";
import {getHandMaxScore, getTheBestScoreOption } from "../../../controllers/gameController.js";
import PropTypes from "prop-types";

const styles = {
    bubbleWrapper: {
        backgroundColor: 'rgb(29, 120, 116, 0.6)',
        padding: '10px',
        fontSize: '30px',
        borderRadius: '9px',
        minWidth: '200px',
        textAlign: 'center',
    },
    textStyle: (isOver21) => ({
        fontSize: '24px',
        color: isOver21 ? 'red' : '#FFF',
    }),
};
const ScoreBubble = ({ hand = [], title = {} , isDealer = false} ) => {
    const maxScore = getHandMaxScore(hand);
    const bestScoreOption = getTheBestScoreOption(hand);
    const isOver21 = isDealer? maxScore > 21: bestScoreOption > 21;
    return (
        <Box sx={styles.bubbleWrapper}>
            <Typography
                sx={styles.textStyle(isOver21)}
            >{`${title} ${isDealer? maxScore : bestScoreOption}`} </Typography>
        </Box>
        )
    };

ScoreBubble.propTypes = {
    hand: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    isDealer: PropTypes.bool.isRequired,
};
export default ScoreBubble;