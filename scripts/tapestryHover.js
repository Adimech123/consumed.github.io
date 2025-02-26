const tapestryContainer = document.getElementsByClassName("tapestryContainer")

tapestryContainer.addEventListener("onmouseover", () => {
    
})

function displayContent(content){
    const contentElem = content.querySelectorAll("div")[0]
    contentElem.style.opacity = 0.8
}

function hideContent(content){
    const contentElem = content.querySelectorAll("div")[0]
    contentElem.style.opacity = 0
}
