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

