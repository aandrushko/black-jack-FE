import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import gameEndpoints from "../../api/gameApi.js";
import { useParams } from "wouter";
import Card from "../../components/Card";
import Controls from "./components/Controls.js";
import ScoreBubble from "./components/ScoreBubble.js";
import DeclareWinnerBanner from "./components/DeclareWinnerBanner.js";
import GameInsights from "./components/GameInsights.js";

const styles = {
    tableContainer: {
        borderRadius: '50%',
        minHeight: '500px',
        minWidth: '900px',
        padding: '100px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '150px',
        position:'relative'
    },
    scoreBubblesWrapper: {
        position: 'absolute',
        right: '-60px',
        height: '70%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    dealerCardsContainer: {
        display: 'flex',
    },
    playerCardsContainer: {
        display: 'flex',
    },
};

const Table = () => {
    const { tableId} = useParams();
    const [gameState, setGameState] = useState({});
    const getGameState = async (tableId) => {
        try {
            const { data } = await gameEndpoints.getGameDetails(tableId);
            await setGameState(data)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getGameState(tableId)
    }, [tableId]);

    return (
        <Box sx={styles.tableContainer}>
            <Box sx={styles.scoreBubblesWrapper}>
                <ScoreBubble hand={gameState?.dealerHand} title={'Dealer\'s score'} isDealer />
                <ScoreBubble hand={gameState?.playerHand} title={'Your score'} />
            </Box>

            <Box sx={styles.dealerCardsContainer}>
                {gameState?.dealerHand?.length < 2 && <Card hiddenCard /> }
                {gameState?.dealerHand?.map(({name, type, value}) => <Card
                    key={`card-${name}-${type}`}
                    {...{name, type, value}}
                />)}
            </Box>

            {gameState?.gameStatus?.isFinished && (
               <DeclareWinnerBanner gameState={gameState} />
            )}

            <Box sx={styles.playerCardsContainer}>
                {gameState?.playerHand?.map(({name, type, value}) => <Card
                    key={`card-${name}-${type}`}
                    {...{name, type, value}}
                />)}
            </Box>
            <Controls
                dealerOpened={gameState.dealerHand?.length > 1}
                gameIsFinished={gameState?.gameStatus?.isFinished}
                tableId={tableId}
                updateGameState={getGameState}
            />
            {gameState?.gameStatus?.isFinished && (
                <GameInsights game={gameState}/>
            )}

        </Box>
    )
}
export default Table;