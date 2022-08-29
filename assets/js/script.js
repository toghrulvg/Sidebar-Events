


 let showSidebar = document.querySelector(".show-sidebar");
 let hideSidebar = document.querySelector(".close-sidebar");

 let sidebar = document.querySelector(".sidebar");

 let icons = document.querySelectorAll(".sidebar .icon i");





 showSidebar.addEventListener("click",function(){

     if(sidebar.classList.contains("hide")){
         sidebar.classList.remove("hide")
     }

     for (const item of icons) {
         item.classList.remove("d-none")
     }

     this.classList.add("d-none")

 })


 hideSidebar.addEventListener("click",function(){
     hideSide(this)
 })



 let hideSide = (elem) =>{
     if(!sidebar.classList.contains("hide")){
         sidebar.classList.add("hide")
     }

    for (const item of icons) {
         item.classList.remove("d-none")
     }

     elem.classList.add("d-none")
 }




