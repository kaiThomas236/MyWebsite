const colorThemes = document.querySelectorAll('[name="theme"]');

const storeTheme = function (theme) {
    localStorage.setItem("theme", theme);
}

const getTheme = function () {
    const activeTheme = localStorage.getItem("theme");
    console.log(activeTheme);
    colorThemes.forEach((themeOption) => {
        if (themeOption.id === activeTheme) {
            themeOption.checked = true;
        }
    });
};

colorThemes.forEach(theme => {
    theme.addEventListener('click', () => {
        storeTheme(theme.id);
    });
});

document.onload = getTheme();