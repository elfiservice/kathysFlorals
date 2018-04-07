// Get the modal
var modal = document.getElementById('myModal');
modal.style.display = "none";

var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

// Get the image and insert it inside the modal - 
//
let worbookContainer = document.getElementById("portfolio");

worbookContainer.onclick = function(cb) {
    console.log(cb.target.src);
    modal.style.display = "block";
    modalImg.src = cb.target.src;
    captionText.innerHTML = cb.target.alt;
    let getElemteHeader = document.querySelector('.modal-header');
    getElemteHeader.innerHTML = cb.target.title;
    
}


// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
   modal.style.display = "none";
    let modalBack = document.querySelectorAll(".modal-backdrop.in");
    modalBack[0].remove();
    modalBack[1].remove();
    modal.classList.remove("in");
    document.body.classList.remove("modal-open");
    
};