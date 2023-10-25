import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

 const styles = {
    bubbleWrapper: (isWinner) => ({
        position: 'absolute',
        backgroundColor: isWinner? 'rgb(237, 159, 49, 0.8)': 'rgb(237, 46, 49, 0.8)',
        padding: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFF',
        fontSize: '50px',
        top: '20%',
        borderRadius: '30px'
    }),
     textStyle: {
        fontSize: '40px',
        fontFamily: 'Satisfy',
        fontWeight: '600',
     }
 }
const GameSummary = ({ gameState }) => {
    const { gameStatus } = gameState;
    const summaryTitle = gameStatus.isPlayerWin? 'Congrats! You are winner' : 'You lose! Don\'t give up!';
    return (
        <Box sx={styles.bubbleWrapper(gameStatus.isPlayerWin)}>
            <Typography sx={styles.textStyle}>
                {summaryTitle}
            </Typography>
        </Box>
    )
};

GameSummary.propTypes = {
    gameState: PropTypes.object.isRequired,
};
export default GameSummary;