import { atom } from "recoil";

// 結果の状態を保持する型定義
interface ResultsState {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
}

// atomの定義
const ResultState = atom<ResultsState>({
    key: "ResultState",
    default: {
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: "",
    },
});

export default ResultState;
