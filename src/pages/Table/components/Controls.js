import {Box, Button} from "@mui/material";
import {useLocation} from "wouter";
import gameEndpoints from "../../../api/gameApi.js";
import {getHandMaxScore} from "../../../controllers/gameController.js";
import PropTypes from "prop-types";

const styles = {
    actionButton: {
        color: '#FFF',
        border: '1px solid #FFF',
        fontSize: '20px',
        minWidth: '200px',
        cursor: 'grab',
        outline: 'none!important',
        '&.MuiButton-root.MuiButton-outlined:hover': {
            backgroundColor: 'rgb(238, 46, 49, 0.98)',
            border: '1px solid red !important',
        },
    }
}
const Controls = ({ dealerOpened, gameIsFinished, tableId, updateGameState }) => {
    const [,setLocation] = useLocation();
    const handlePlayerHit = async (tableId) => {
        try {
            await gameEndpoints.playerHit(tableId);
            await updateGameState(tableId);

        } catch (e) {
            console.log(e);
        }
    }
    const handleDealerHit = async (tableId) => {
        try {
            const { data } = await gameEndpoints.dealerHit(tableId);
            const dealerHandMaxValue = getHandMaxScore(data.dealerHand);
            if(dealerHandMaxValue < 17) {
                handleDealerHit(tableId);
            } else {
                await updateGameState(tableId);
            }
        } catch (e) {
            console.log(e);
        }
    };
    const handleStartNewGame = async () => {
        try {
           const { data } =  await gameEndpoints.startGame();
            await setLocation(`/table/${data.gameId}`);
        } catch (e) {
            console.log(e);
        }
    }
    const handleStand = async (tableId) => {
        try {
            const { data } = await gameEndpoints.playerStand(tableId);
            const dealerHandMaxValue = getHandMaxScore(data.dealerHand);
            if(dealerHandMaxValue < 17) {
                handleDealerHit(tableId);
            } else {
                await updateGameState(tableId);
            }

        } catch (e) {
            console.log(e);
        }
    }

    if ( gameIsFinished ) {
        return (
            <Button variant='outlined' sx={styles.actionButton} onClick={() => handleStartNewGame()}> Start new game </Button>
        )
    }
    if ( !dealerOpened ) {
        return (
            <Box sx={{ display: 'flex', gap: '20px'}}>
                <Button variant='outlined' sx={styles.actionButton} onClick={() => handlePlayerHit(tableId)}> Hit </Button>
                <Button variant='outlined' sx={styles.actionButton} onClick={() => handleStand(tableId)}> Stand</Button>
            </Box>
        )
    }
    return null;

}
Controls.propTypes = {
    dealerOpened: PropTypes.bool.isRequired,
    gameIsFinished: PropTypes.bool.isRequired,
    tableId: PropTypes.string.isRequired,
    updateGameState: PropTypes.func.isRequired,
}
export default Controls;