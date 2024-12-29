import { atom } from "recoil";

const CityState = atom<string>({
    key: "CityState",
    default: "Tokyo",
});

export default  CityState;
