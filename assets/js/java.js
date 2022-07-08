let input = document.querySelector("#myinput");
let btn = document.querySelector("#apply");
let date = document.querySelector("#date");
let tasks = document.querySelector("#tasks");

//post
btn.addEventListener("click", () => {
    if (input.value == 0) {
        alert("Please Enter a Task");

    }
    else {
        fetch('https://todo-app-7ff5b-default-rtdb.firebaseio.com/user.json', {
            method: "POST",
            body: JSON.stringify({
                "name": input.value

            }),
            headers: { "Content-type": "application/json; charset=UTF-8" }

        })


            .then(response => response.json())
            .then(result => get())
        input.value = ""
       

    }
})

//get a value
function get() {

    tasks.innerHTML = ""
    fetch('https://todo-app-7ff5b-default-rtdb.firebaseio.com/user.json', {
        method: "GET"
    })
        .then(response => response.json())
        .then(result => {
            for (data in result) {


                var li = document.createElement("li")

                li.innerHTML += result[data].name

                li.setAttribute("id", `${data}`)


                let btn1 = document.createElement("button");
                btn1.innerHTML = "EDIT";
                btn1.setAttribute("id", `${data}`)
                btn1.setAttribute("onclick", `edititem('${data}', '${result[data].name}')`)



                let btn2 = document.createElement("button");
                btn2.innerHTML = "DELETE";
                btn2.setAttribute("id", `${data}`)
                btn2.setAttribute("onclick", `clearitem('${data}')`)

                li.appendChild(btn1)
                li.appendChild(btn2)
                tasks.appendChild(li)

                // tasks.addEventListener("click",()=>{
                //     li.style.textDecorationLine="line-through";
                //     alert("hai")
                //   })
        
            }
        });
       
}
get()


//delete function
function clearitem(id) {


    fetch(`https://todo-app-7ff5b-default-rtdb.firebaseio.com/user/${id}.json`, {
        method: "DELETE",
    })
        .then(response => response.json())
        .then(result =>
            get()
        )

}
//edit function
function edititem(id, tasks) {

    input.value = tasks
    clearitem(id)

}


