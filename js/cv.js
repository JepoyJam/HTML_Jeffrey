var btn = document.querySelector("button")
btn.onclick = ()=>{
    window.print()
}

let reload
window.addEventListener('load',()=>{
    reload = document.querySelector("#cv")
    reload.addEventListener("submit",(event)=>{
        console.log("submit event", event)
        event.preventDefault()
        const newReload = new FormData(reload)
        console.log("nerReload", newReload)
    })
})