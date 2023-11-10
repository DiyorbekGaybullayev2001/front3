
let btn = document.getElementById("btn")

btn.onclick = function front3(){

    let str = document.getElementById("matn").value
    let p = document.getElementById("par")
    let text1 = str.substring(0,3)

    return p.innerHTML = text1+text1+text1

  }