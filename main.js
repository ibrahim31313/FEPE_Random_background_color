let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "F"]

function randomBackgroundColor () {
    //random background color 
    let colorArr = [];
    for(let i =0; i < 6; i++) {
        colorArr.push(arr[Math.floor(Math.random() * arr.length)])
    }
    
    let finalColor = colorArr.join("");

    document.body.style.cssText="font-family: arial; font-weight: 600; text-align: center; padding-top: 200px; transition : 0.5s"
    document.body.innerHTML = `#${finalColor}`
    document.body.style.backgroundColor = `#${finalColor}`    
}
//random background color very 500ms 
window.setInterval(randomBackgroundColor, 700)