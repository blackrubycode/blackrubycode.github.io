window.onload = function(){

    let nav = document.querySelector(".site-header .mobile");
    let navTab = document.querySelector(".site-header .mobile > ul")
    let navBtn = nav.querySelector(".fa-bars");

    navBtn.addEventListener("click", function(){
        if(navTab.className !== "on"){
            navTab.classList.add("on");            
        }else {
            navTab.classList.remove("on");  
        }
    })

}