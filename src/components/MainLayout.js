import {Box} from "@mui/material";
import bgUrl from "../assets/bgImage.jpeg";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
    return (
        <Box sx={{
            backgroundImage: `url(${bgUrl})`,
            height: '100vh',
            margin:'0',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            userSelect: 'none',

        }}>
            <Box sx={{
                margin: 'auto',
                maxWidth: '1200px',
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {children}
            </Box>
        </Box>
    )
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default MainLayout;