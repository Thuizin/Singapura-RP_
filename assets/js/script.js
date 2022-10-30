const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) => window.getComputedStyle(html).getPropertyValue("--bg");


const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPainel: getStyle(html, "--bg-painel"),
    colorHeadlings: getStyle(html, "--color-headlings"),
    colorText: getStyle(html, "--color-text")
}

const darkMode = {
    bg: "#FCFCFC",
    bgPainel: "#EBEBEB",
    colorHeadlings: "#0077FF", 
    colorText: "#333333"
}

const transformKey = key => "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})


window.alert("Após alterar a cor para original novamente, recarregar a página");