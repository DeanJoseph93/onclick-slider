/**
 * Created by  Dean Dolev Joseph.
 */



/*/!************************************** Main Index*/


function showPic1() {
/*
   console.log(document.getElementById("bannerHead").style.backgroundImage);
*/

   document.getElementById("bannerHead").style.backgroundImage = "url('Images/banner_main.jpeg')";
}//showPic1

function showPic2() {
/*
 console.log(document.getElementById("bannerHead").style.backgroundImage);
 */

document.getElementById("bannerHead").style.backgroundImage = "url('Images/banner_main2.jpg')";
}//showPic2


function showPic3() {
    /*
     console.log(document.getElementById("bannerHead").style.backgroundImage);
     */

    document.getElementById("bannerHead").style.backgroundImage = "url('Images/banner_main3.jpg')";
}//showPic3



var

    status 				= ['english'],

    /*paraMain1		    = document.getElementById("paraMain1"),*/
    spanishBtn			= document.getElementById("spanishBtn"),
    englishBtn			= document.getElementById("englishBtn"),
    germanBtn			= document.getElementById("germanBtn"),
    italianBtn			= document.getElementById("italianBtn"),
    frenchBtn			= document.getElementById("frenchBtn")


   /* path                 = '/Dean_Joseph_JS_project/Images',
    mainPic				 = document.getElementById("mainPic"),
    prevBtn1			 = document.getElementById("prevBtn1"),
    nextBtn1			 = document.getElementById("nextBtn1"),*/

    /*pics				 = ["Images/ChampionsLeague_1.jpg","Images/PL-Logo.jpg",
                            "Images/laliga.png","Images/bundesliga.jpg"],
*/
//---- flag for gallery
   /* index = 0*/
;


window.onload = init;

//init foo

function init(){
    bindBtns();
//console.log(bindBtns);
}//end init




/**
 * subscribing handlers to click events on buttons
 */

function bindBtns(){

    englishBtn.addEventListener		("click", changeTextEnglish);
    spanishBtn.addEventListener		("click", changeTextSpanish);
    germanBtn.addEventListener		("click", changeTextGerman);
    italianBtn.addEventListener		("click", changeTextItalian);
    frenchBtn.addEventListener		("click", changeTextFrench);




    /*nextBtn1.addEventListener	    ("click", function(){ rollGallery("next"); } );
    prevBtn1.addEventListener	    ("click", function(){ rollGallery("prev"); } );*/

}// bindBtns



//--------------------CHANGE TEXT - TRANSLATING
/*document.getElementById("paraMain1").innerHTML = "#";*/

function changeTextEnglish(){

    if(status === "english") {
        document.getElementById("paraMain1").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
        status = "english";
    } else {
        document.getElementById("paraMain1").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";
        status = "english";
    }

}//end changeTextSpanish



function changeTextSpanish(){
    // element.attributeName = new value
    if(status === "english") {
        document.getElementById("paraMain1").innerHTML = "This is spanish.";

    } else {
        document.getElementById("paraMain1").innerHTML = "This is spanish.";

    }

}//end changeTextSpanish



function changeTextGerman(){
    // element.attributeName = new value
    if(status === "english") {
        document.getElementById("paraMain1").innerHTML = "This is german.";

    } else {
        document.getElementById("paraMain1").innerHTML = "This is german.";

    }

}//end changeTextGerman



function changeTextItalian(){
    // element.attributeName = new value
    if(status === "english") {
        document.getElementById("paraMain1").innerHTML = "This is italian.";

    } else {
        document.getElementById("paraMain1").innerHTML = "This is italian.";

    }

}//end changeTextItalian


function changeTextFrench(){
    // element.attributeName = new value
    if(status === "english") {
        document.getElementById("paraMain1").innerHTML = "This is french.";

    } else {
        document.getElementById("paraMain1").innerHTML = "This is french.";

    }

}//end changeTextFrench





//---------Gallery--------------------------//

/*
var indexSide = 0;


function rollGallery(direction){
    if(direction === "next"){
        // next
        if(indexSide < pics.length - 1){
            indexSide++;
        } else {
            index = 0;
        }
    } else {
        // prev
        if(indexSide > 0){
            indexSide--;
        } else {
            indexSide = pics.length -1;
        }
    }// if direction

    mainPic.src = path + pics[indexSide];

}//end moveGallery*!/
*/
