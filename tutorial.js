fetch('sideBar.html')
.then(res => res.text())
.then(data => {

    document.getElementById('sideBar').innerHTML = data;

    initSidebar();
    initMenuBtn();   // initialize menu button

});


/* Sidebar chapters accordion */

function initSidebar(){

    const chapters = document.querySelectorAll(".chapterName");

    chapters.forEach(function(chapter){

        const arrow = chapter.querySelector(".arrow");
        const topics = chapter.nextElementSibling;

        chapter.addEventListener("click", function(){

            chapters.forEach(function(otherChapter){

                const otherTopics = otherChapter.nextElementSibling;
                const otherArrow = otherChapter.querySelector(".arrow");

                if(otherChapter !== chapter){

                    otherTopics.classList.remove("show");

                    if(otherArrow){
                        otherArrow.classList.remove("open");
                    }

                }

            });

            topics.classList.toggle("show");

            if(arrow){
                arrow.classList.toggle("open");
            }

        });

    });

}


/* Menu button sidebar toggle */

function initMenuBtn(){

    const menuBtn = document.querySelector(".tutorialMenuBtn");
    const sidebar = document.getElementById("sidebar");

    if(menuBtn && sidebar){

        menuBtn.addEventListener("click", function(e){

            e.stopPropagation();
            sidebar.classList.toggle("showSidebar");

        });

        document.addEventListener("click", function(){
            sidebar.classList.remove("showSidebar");
        });

        sidebar.addEventListener("click", function(e){
            e.stopPropagation();
        });

    }

        window.addEventListener("scroll", function(){
        sidebar.classList.remove("showSidebar");
        }); 

}


/* Try Code Button */

document.addEventListener("DOMContentLoaded", function(){

    const tryButtons = document.querySelectorAll(".tryBtn");

    tryButtons.forEach(function(button){

        button.addEventListener("click", function(){

            let codeBlock = this.previousElementSibling.querySelector("code");
            let code = codeBlock ? codeBlock.innerText : "";

            localStorage.setItem("editorCode", code);

            window.open("editor.html", "_blank");

        });

    });

});





