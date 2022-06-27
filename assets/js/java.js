let input = document.querySelector("#myinput");
let btn = document.querySelector("#apply");
let date = document.querySelector("#date");
let tasks = document.querySelector("#tasks");
btn.addEventListener("click", () => {
  if (input.value == 0) {
    alert("Please Enter a Task");
  }
  else if (date.value == 0) {
    alert("enter the date");

  }

  else {
    //create var li and input text,date.
    var nlist = document.createElement("li");
    nlist.innerText += `${input.value}`;
    nlist.innerText += `${date.value}`;
    localStorage.setItem("c1",input.value);
    localStorage.setItem("c2",date.value);
    tasks.appendChild(nlist);
    // create a button edit and complete
    let btn1 = document.createElement("button");
    btn1.innerHTML = "check";
    nlist.appendChild(btn1);
    let btn2 = document.createElement("button");
    btn2.innerHTML = "Complete";
    nlist.appendChild(btn2);
    //clear the the task box after the submit
    input.value = "";
    date.value = "";
    //delete the task
    btn2.addEventListener("click", () => {
      tasks.removeChild(nlist);
      let comt=document.querySelector("#comt")
      var li = document.createElement("li");
      let v1 =localStorage.getItem("c1");
      let v2 =localStorage.getItem("c2");
      li.innerText += v1+v2;
      comt.appendChild(li);
    });
    btn1.addEventListener("click" , ()=>{
    nlist.style.textDecorationLine="line-through"; color="green" ;
    });


    //nlist.addEventListener("click", ()=>{
    // nlist.style.color="green";
    //});
    
  }

  
});

















/*document.querySelector('#apply').onclick = function(){
  if(document.querySelector('#myinput').value== 0){
      alert("Please Enter a Task")
    }
    else if(document.querySelector("#date").value==0){
    alert("enter the date")

   }
  
  else{
    document.querySelector('#tasklist').innerHTML += `
    

    <li class="check">${document.querySelector('#myinput').value} 
    ${document.querySelector('#date').value} 
     </li>`;
    
    document.getElementById('myinput').value="";
    document.getElementById('date').value="";
    
    }
    document.querySelector(".check").onclick=function(){
        doccument.getElementById("check").style.backgroundColor = 'salmon';
        
    }

    // var current_tasks = document.querySelectorAll(".delete");
    // for(var i=0; i<current_tasks.length; i++){
    //     current_tasks[i].onclick = function(){
    //         this.parentNode.remove();
    //     }
    // }
    /*<li class="check">${document.querySelector('#myinput').value} 
${document.querySelector('#date').value} 


</li>`;

document.getElementById('myinput').value="";
document.getElementById('date').value="";
let click=document.querySelector(".check")
console.log(click)
}
}*/
