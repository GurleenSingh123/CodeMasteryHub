fetch("navBar.html")
.then(res => res.text())
.then(data => {

    document.getElementById('navBar').innerHTML = data;

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");

    /* open / close menu */

    menuBtn.addEventListener("click", function(e){
        e.stopPropagation();
        menu.classList.toggle("showMenu");
    });

    /* close menu when clicking anywhere */

    document.addEventListener("click", function(){
        menu.classList.remove("showMenu");
    });

    /* prevent menu closing when clicking inside menu */

    menu.addEventListener("click", function(e){
        e.stopPropagation();
    });

});

fetch("footer.html")
.then(res => res.text())
.then(data => {
    document.getElementById('footer').innerHTML = data;
});
