var button = document.getElementById('MD_btn');
var picture = document.getElementById('the_image');
var fullname = document.getElementById('ceo_md_name');
var titles = document.getElementById('the_titles');
var roles = document.getElementById('the_roles');
var desc = document.getElementById('about-quote');
var msg = document.getElementById("message");

function changeInfo() {
    if(button.textContent=="Our MD"){
        picture.src = "../static/Images/man (3).png"
        fullname.textContent = "Dayton Costantini"
        titles.textContent = "Managing Director of Captivate Interiors"
        roles.textContent = "Designer & Procurements"
        desc.textContent = "Dayton is the co-founder of Captivate Interiors. He looks after the procurement side of things. To ensure our clients experience an excellent service, Dayton works through every project, teaming with the designers to ensure finances, fee claims and product claims are all on track."
        msg.style.display = "none";
        button.textContent = "Our CEO"
    } else{
        picture.src = "../static/Images/woman.png"
        fullname.textContent = "Valentina Carter"
        titles.textContent = "Chief Executive Officer of Captivate Interiors"
        roles.textContent = "Designer"
        desc.textContent = "Valentina established Captivate Interiors with Dayton in 2010. She has been designing and working in the building industry for more than 20 years and has vast experience in commercial and residential projects, from office fit outs to cafes and private homes."
        msg.style.display = "block";
        button.textContent = "Our MD"
    }
}

var staff1 = document.getElementById("staff1");
var staff2 = document.getElementById("staff2");
var staff3 = document.getElementById("staff3");
var staff4 = document.getElementById("staff4");
var staff5 = document.getElementById("staff5");
var hideBtn1 = document.getElementById("hide1");
var hideBtn2 = document.getElementById("hide2");
var hideBtn3 = document.getElementById("hide3");
var hideBtn4 = document.getElementById("hide4");
var hideBtn5 = document.getElementById("hide5");
var allStaff = document.getElementById("all_staff");

function showButton1(){
    if (hideBtn1.style.display === "block") {
        hideBtn1.style.display = "none";
    } else {
        hideBtn1.style.display = "block";
        hideBtn1.style.visibility = "visible";
    }
}
function showButton2(){
    if (hideBtn2.style.display === "block") {
        hideBtn2.style.display = "none";
    } else {
        hideBtn2.style.display = "block";
        hideBtn2.style.visibility = "visible";
    }
}
function showButton3(){
    if (hideBtn3.style.display === "block") {
        hideBtn3.style.display = "none";
    } else {
        hideBtn3.style.display = "block";
        hideBtn3.style.visibility = "visible";
    }
}
function showButton4(){
    if (hideBtn4.style.display === "block") {
        hideBtn4.style.display = "none";
    } else {
        hideBtn4.style.display = "block";
        hideBtn4.style.visibility = "visible";
    }
}
function showButton5(){
    if (hideBtn5.style.display === "block") {
        hideBtn5.style.display = "none";
    } else {
        hideBtn5.style.display = "block";
        hideBtn5.style.visibility = "visible";
    }
}

function hideStaff1(){
    if (staff1.style.display === "none") {
        staff1.style.display = "block";
    } else {
        staff1.style.display = "none";
    }
}
function hideStaff2(){
    if (staff2.style.display === "none") {
        staff2.style.display = "block";
    } else {
        staff2.style.display = "none";
    }
}
function hideStaff3(){
    if (staff3.style.display === "none") {
        staff3.style.display = "block";
    } else {
        staff3.style.display = "none";
    }
}
function hideStaff4(){
    if (staff4.style.display === "none") {
        staff4.style.display = "block";
    } else {
        staff4.style.display = "none";
    }
}
function hideStaff5(){
    if (staff5.style.display === "none") {
        staff5.style.display = "block";
    } else {
        staff5.style.display = "none";
    }
}

function hideShowAll(){
    if (staff1.style.display == "block" || staff2.style.display == "block" || staff3.style.display == "block" || staff4.style.display == "block" || staff5.style.display == "block"){
        staff1.style.display = "none";
        staff2.style.display = "none";
        staff3.style.display = "none";
        staff4.style.display = "none";
        staff5.style.display = "none";
        allStaff.textContent = "Show All";
    }
    else{
        staff1.style.display = "block";
        staff2.style.display = "block";
        staff3.style.display = "block";
        staff4.style.display = "block";
        staff5.style.display = "block";
        allStaff.textContent = "Hide All";
    }
}