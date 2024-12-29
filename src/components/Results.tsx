import { Card, CardContent, Typography, Box, Avatar } from "@mui/material";

type ResultsProps = {
    results: {
        country: string;
        cityName: string;
        temperature: string;
        conditionText: string;
        icon: string;
    }
}

const Results = (props: ResultsProps) => {
    return (
        <Card className="weather-report" sx={{ mt: 3, p: 2, maxWidth: '400px', mx: 'auto', boxShadow: 3, borderRadius: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center', mb: 2, fontWeight: 'bold' }}>
                    Weather Report
                </Typography>
                {props.results.country && (
                    <Box sx={{ textAlign: 'center' }}>
                        <Typography variant="h6" sx={{ fontWeight: 'medium' }}>{props.results.cityName}, {props.results.country}</Typography>
                        <Avatar src={props.results.icon} alt="weather icon" sx={{ width: 56, height: 56, mx: 'auto', my: 2 }} />
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                            {props.results.temperature}°C
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'gray' }}>{props.results.conditionText}</Typography>
                    </Box>
                )}
            </CardContent>
        </Card>
    )
}

export default Results;
