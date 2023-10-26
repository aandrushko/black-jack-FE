import gameEndpoints from "../api/gameApi.js";
import { useState } from "react";
import {Box, Button, CircularProgress, Typography} from "@mui/material";
import { useLocation } from "wouter";

const styles = {
    rootWrapper: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap:'50px'
    },
    mainTitle: {
        fontFamily: 'Satisfy',
        color: '#FFF',
        fontStyle:'cursive',
        fontSize: '150px',
        textAlign: 'center',
    },
    secondaryText:{
        fontFamily: 'Satisfy',
        color: '#FFF',
        fontStyle:'cursive',
        fontSize: '50px',
        textAlign: 'center',
    },
    button: {
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
const Lobby = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [, setLocation] = useLocation();
    const handleCreateGame = async () => {
        setIsLoading(true);
        try {
            const { data } = await gameEndpoints.startGame();
            if (data) {
                setLocation(`/table/${data.gameId}`);
            }
        }
        finally {
            setIsLoading(false);
        }
    }
    return (
            <Box
                sx={styles.rootWrapper}
            >
                <Typography sx={styles.mainTitle}>
                    Black Jack
                </Typography>
                <Typography sx={{
                    fontFamily: 'Satisfy',
                    color: '#FFF',
                    fontStyle:'cursive',
                    fontSize: '50px',
                    textAlign: 'center',
                }}>
                    Are you ready to test your skills and try your luck?
                </Typography>

                <Button
                    disabled={isLoading}
                    variant='outlined'
                    disableRipple
                    onClick={handleCreateGame}
                    sx={styles.button}
                >
                    { isLoading ? <CircularProgress sx={{color: '#FFF', size: '14px'}} /> : 'Start new game'}
                </Button>
            </Box>
        )
}
export default Lobby;