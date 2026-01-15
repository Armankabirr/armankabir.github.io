var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
// Mobile menu toggle
var navbar = document.getElementById("navbar");

function openmenu() {
    navbar.style.right = "0";
}
function closemenu() {
    navbar.style.right = "-200px";
}




const scriptURL = 'https://script.google.com/macros/s/AKfycbzILvmKS_k7-o9XWmQojPd6ndtBOHGb9tTsUOul7Px81-tiNiKSKLjlbGiNblpDGW_r/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
})