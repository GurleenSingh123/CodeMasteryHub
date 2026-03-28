// Load button template
fetch("nextPrevBtn.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("lessonBtns").innerHTML = data;
    setupNavigation();
  });

function setupNavigation(){

  // ⭐ Define lesson order manually
  const lessons = [
    "introduction.html",
    "historyOfHtml.html",
    "htmlCssJavaScript.html", 
    "what-is-website.html",
    "howInternetWorks.html", 
    "installingVsCode.html", 
    "htmlStructure.html", 
    "htmlElements.html",
    "htmlAttributes.html",
    "htmlcomments.html", 
    "htmltextformatting.html", 
    "htmltablestructure.html"
  ];

  let current = window.location.pathname.split("/").pop();
  let index = lessons.indexOf(current);

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if(index !== -1){

    // Previous
    if(index > 0){
      prevBtn.onclick = function(){
        window.location.href = lessons[index - 1];
      };
    } else {
      prevBtn.style.visibility = "hidden";
    }

    // Next
    if(index < lessons.length - 1){
      nextBtn.onclick = function(){
        window.location.href = lessons[index + 1];
      };
    } else {
      nextBtn.style.visibility = "hidden";
    }

  }
}

