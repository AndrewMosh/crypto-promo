import google from "../assets/svg/gplay.svg";
import apple from "../assets/svg/apple.svg";

type Store = {
    img: string,
    verb: string,
    store: string,
    link: string
}
const STORES: Store[] = [
    { img: google, verb: "get it on ", store: "Google play", link: "#" },
    { img: apple, verb: "Available on the", store: "App Store", link: "#" },
];

export default STORES;
