import { Typography, Box } from "@mui/material";

const Title = () => {
    return (
        <Box className="container" sx={{ textAlign: 'center', mt: 3 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
                React World Weather
            </Typography>
        </Box>
    );
}

export default Title;
