import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#03a9f4", // 水色
        },
        secondary: {
            main: "#ffffff", // 白
        },
        background: {
            default: "#e3f2fd", // 淡い水色の背景
            paper: "#ffffff", // 白いカード背景
        },
        text: {
            primary: "#0277bd", // 濃い水色の文字
            secondary: "#757575", // グレーの文字
        },
    },
    typography: {
        fontFamily: "'Comic Sans MS', 'Roboto', 'Arial', sans-serif", // ポップなフォント
        h1: {
            fontSize: "2rem",
            fontWeight: 700,
        },
        body1: {
            fontSize: "1rem",
        },
        button: {
            textTransform: "none", // ボタンの文字を小文字のまま表示
        },
    },
    shape: {
        borderRadius: 16, // 角丸を大きめに設定
    },
    components: {
        MuiContainer: {
            defaultProps: {
                maxWidth: "sm", // コンテナの幅を中サイズに
            },
            styleOverrides: {
                root: {
                    border: "2px solid #03a9f4", // 水色の枠線
                    borderRadius: "16px", // 角丸
                    padding: "16px", // 内側の余白
                    backgroundColor: "#ffffff", // 白背景
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // 軽い影
                    margin: "auto",
                },
            },
        },
    },
});

export default theme;
