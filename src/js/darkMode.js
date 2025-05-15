export default function darkMode() {
    const rootElm = document.documentElement;
    const darkModeBtn = rootElm.querySelector(".darkmode__icon");

    const isDarkMode = readFromLocalStorage("isDarkMode");
    const browserPrefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    let darkState = isDarkMode !== null ? isDarkMode : browserPrefersDark;

    // Set initial state
    updateIcon(darkState);
    rootElm.setAttribute("data-dark", darkState);
    saveToLocalStorage("isDarkMode", darkState);

    darkModeBtn.addEventListener("click", () => {
        darkState = !darkState;
        updateIcon(darkState);
        rootElm.setAttribute("data-dark", darkState);
        saveToLocalStorage("isDarkMode", darkState);
    });

    function updateIcon(isDark) {
        if (isDark) {
            darkModeBtn.src = "/public/img/lightmode.svg";
        } else {
            darkModeBtn.src = "/public/img/darkmode.svg";
        }
    }

    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function readFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}

