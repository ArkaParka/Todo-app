const input=document.getElementById("input"),btnSelectAll=document.getElementById("btnSelectAll"),doneBtn=document.getElementById("doneBtn"),edit_panel__buttons_restore=document.getElementsByClassName("edit_panel__buttons_restore"),edit_panel__buttons_remove=document.getElementsByClassName("edit_panel__buttons_remove"),ul=document.getElementsByClassName("todo-list")[0];let inputs=[];function updateList(){ul.innerHTML="";for(let e=0;e<inputs.length;e++){let t=inputs[e],n=document.createElement("li"),l=document.createElement("label"),s=document.createElement("input");s.className="checkbox",s.type="checkbox",s.value="false",s.addEventListener("click",()=>{s.checked?s.value="true":s.value="false"}),n.append(l),l.append(s);let a=document.createElement("span");a.innerText=t+" ",a.className="item "+e,l.append(a);let d=document.createElement("button");d.innerHTML="Done",d.className="todo-list__doneBtn btn "+e,d.addEventListener("click",()=>{a.className="done"});let c=document.createElement("button");c.innerHTML="Remove",c.classList.add("todo-list__removeBtn"),c.classList.add("btn"),c.addEventListener("click",()=>{inputs.filter(e=>{})}),l.append(d),l.append(c),ul.appendChild(n)}document.getElementById("text").style.display="none"}input.addEventListener("keydown",e=>{"Enter"!==e.key&&13!==e.keyCode||""==input.value||(inputs.push(input.value),input.value="",updateList())});let even=0;btnSelectAll.addEventListener("click",()=>{const e=document.getElementsByClassName("checkbox");even++,Array.prototype.map.call(e,e=>{even%2?(e.checked=!0,e.value="true"):(e.checked=!1,e.value="false")})}),doneBtn.addEventListener("click",()=>{const e=document.getElementsByClassName("item"),t=document.getElementsByClassName("btn");for(let n=0;n<e.length;n++)(e[n].checked=!0)&&e[n].classList.add("done"),t[n].className==n&&console.log(t[n])});