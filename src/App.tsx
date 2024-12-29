import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import theme from "./theme";
import { RecoilRoot } from "recoil";

// ページコンポーネントのインポート
import Home from "./pages/Home";
import WeatherReport from "./pages/WeatherReport";

// Headerコンポーネントのインポート
import Header from "./components/Header";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RecoilRoot>
                <Router>
                    <Header />
                    <Container>
                        <Routes>
                            {/* ルートページ */}
                            <Route path="/" element={<Home />} />
                            {/* WeatherReportページ */}
                            <Route path="/weather-report" element={<WeatherReport />} />
                        </Routes>
                    </Container>
                </Router>
            </RecoilRoot>
        </ThemeProvider>
    );
};

export default App;
