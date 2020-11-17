//GUESTBOOK-START--------------------------------------------------------------------------------

let msgList = (localStorage.getItem("messages") == null) ? [] : JSON.parse(localStorage.getItem("messages"));

window.onload = function () {
    addMessage();
}


const inName = document.querySelector("input[type=name]")
const inText = document.querySelector("input[type=text]")
const btn = document.querySelector("button")
const wrapper = document.querySelector(".all-messages")


btn.addEventListener("click", createMessage)

function createMessage() {
    const datum = new Date();
    const date = datum.getHours() + ":" + ((datum.getMinutes() < 10 ? '0' : '') + datum.getMinutes()) + ' / ' + datum.getFullYear() + '-' + (datum.getMonth() + 1) + '-' + ((datum.getDate() < 10 ? '0' : '') + datum.getDate());

    if (inName.value != "" && inText.value != "") {
        let message = {
            name: inName.value,
            text: inText.value,
            time: date,
            id: msgList.length
        }

        msgList.push(message)
        addMessage();



        inName.value = "";
        inText.value = "";

    }
}


function addMessage() {
    wrapper.innerHTML = "";

    localStorage.setItem("messages", JSON.stringify(msgList));
    msgList.forEach(msg => {
        const newDiv = document.createElement("div");
        newDiv.setAttribute("class", "message-container");
        newDiv.setAttribute("data-number", msg.id);
        newDiv.addEventListener("click", removeMsg)
        newDiv.innerHTML = `<h3>${msg.name}<span>${msg.time}</span></h3><hr><p>${msg.text}</p>`
        wrapper.append(newDiv)

    })
}

function removeMsg(event) {

    let returnvalue = msgList.findIndex(rad => event.currentTarget.getAttribute("data-number") == rad.id)
    msgList.splice(returnvalue, 1)
    addMessage();
}





// function addMessage() {
//     if (inName != "" & inText != "") {
//         const newDiv = document.createElement("div");

//         let message = new Object();
//         message.name = inName.value,
//             message.text = inText.value,
//             message.time = date;

//         newDiv.setAttribute("class", "message-container")

//         newDiv.innerHTML = `<h3>${message.name}<span>${message.time}</span></h3><hr><p>${message.text}</p>`;
//         wrapper.append(newDiv);
//     }
// }










// ------------------------------------------------------------------------------------------


// const inName = document.querySelector("input[type=name]")
// const inText = document.querySelector("input[type=text]")
// const btn = document.querySelector("button")
// const wrapper = document.querySelector(".all-messages")

// const datum = new Date();
// const date = datum.getHours() + ":" + ((datum.getMinutes() < 10 ? '0' : '') + datum.getMinutes()) + ' / ' + datum.getFullYear() + '-' + (datum.getMonth() + 1) + '-' + ((datum.getDate() < 10 ? '0' : '') + datum.getDate());


// btn.addEventListener("click", addMessage)



// function addMessage() {
//     if (inName != "" & inText != "") {
//         const newDiv = document.createElement("div");

//         let message = new Object();
//         message.name = inName.value,
//             message.text = inText.value,
//             message.time = date;

//         newDiv.setAttribute("class", "message-container")

//         newDiv.innerHTML = `<h3>${message.name}<span>${message.time}</span></h3><hr><p>${message.text}</p>`;
//         wrapper.append(newDiv);
//     }
// }

//----------------------------------------------------------------------------------------------------------------
// GUESTBOOK-START------------------------------------------------------------------------------------------------



//ToDo-list-START------------------------

const btn = document.querySelector("button")
const ul = document.querySelector("ul")
const input = document.querySelector("input")
const clearAll = document.querySelector(".clearAll")


btn.addEventListener("click", () => {
    if (input.value == "") { //kontrollerar om inputfältet är tomt 
        return;
    } else {        //om inputfält inte är tomt körs koden
        const nyLi = document.createElement("li");
        nyLi.innerText = input.value;
        ul.prepend(nyLi);
        input.value = "";


        nyLi.addEventListener("click", e => { //Om li klickas, text line through(indikerar ärende klar)
            if (e.target.style.textDecoration === "line-through") {
                e.target.style.textDecoration = "";
            } else { e.target.style.textDecoration = "line-through" }
        })

        const nySpan = document.createElement("span"); //lägger till (X) span till varje skapad <li>
        nySpan.classList.add("delete");
        nySpan.innerHTML = "&#10060;";
        nyLi.appendChild(nySpan);

        nySpan.addEventListener("click", () => { //tar bort <li> om X klickas
            nySpan.parentNode.remove();
        })

        clearAll.addEventListener("click", () => {  //Rensa allt knappen - rensar UL:ens innehåll
            ul.innerHTML = "";
            input.value = "";

        })
    }

})
//ToDo-list-SLUT------------------------


