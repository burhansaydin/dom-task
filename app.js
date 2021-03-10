const createDiv = (divclass, secondparam) => {
    const div = document.createElement("div")
    document.body.appendChild(div)
    div.className = divclass
    div.style.backgroundColor = "grey"
    div.style.minHeight = "200px"
    div.style.minWidth = "300px"
    div.style.float = "left"
    div.style.alignItems = "center"
    div.style.padding = "20px"
    div.style.marginLeft = "220px"
    div.style.marginTop = "50px"

    if (secondparam == "form") {
        const form = document.createElement(`${secondparam}`)
        document.querySelector(`.${divclass}`).appendChild(form)
        form.innerHTML = '<label for="fname">First name:</label><br><input type="text" id="fname"><br><label for="lname">Last name:</label><br><input type="text" id="lname"><br><br><input id="sub" type="submit" value="Add to List">'
        const submit = document.getElementById("sub")
        submit.addEventListener("click", (e) => {
            e.preventDefault();
            const name = document.querySelector("#fname").value
            const surname = document.querySelector("#lname").value
            const li = document.getElementById("list")
            li.innerHTML += `<li>${name} ${surname}</li>`

        })


    } else if (secondparam == "ul") {
        const ul = document.createElement("ul")
        ul.setAttribute("id", "list")
        document.querySelector(`.${divclass}`).appendChild(ul)
        ul.innerHTML = "<h4>Eklenilen Isimler<h4>"
    }
}
createDiv("firstDiv", "form")
createDiv("secondDiv", "ul")