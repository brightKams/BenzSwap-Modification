console.log("Hello World!!!");

let dots = document.querySelectorAll("#dots");
let moreText = document.querySelectorAll("#moreText");
let learnMoreBtn = document.querySelectorAll("#learnMoreBtn");
let learnMoreParagraph = document.querySelectorAll(".third-section.all-borders .general-crypto-images.all-borders > div > div p");

console.log(dots);
console.log(moreText);
console.log(learnMoreBtn.length);
console.log(learnMoreParagraph);
for(let i = 0; i <= learnMoreBtn.length-1; i++) {
    console.log(learnMoreBtn[i]);
    // btnArray.push(learnMoreBtn[i]);
    learnMoreBtn[i].addEventListener("click", 
    function () {

        if(dots[i] >=4 && dots[i].style.display ==="none") {
            dots[i].style.display = "inline";
            moreText[i].style.display = "none";
            learnMoreBtn[i].innerText = "Learn More.....";
            learnMoreParagraph[i].style.height = "initial";
            learnMoreBtn[i].style.background = "initial"
        }

        else if (dots[i] >=4 && dots[i].style.display !=="none")

        {
            dots[i].style.display = "none";
            moreText[i].style.display = "inline";
            learnMoreBtn[i].innerText = "Read less.....";
            learnMoreParagraph[i].style.height = "fit-content";
            learnMoreBtn[i].style.background = "linear-gradient(90.16deg, rgb(6, 78, 227) 0.14%, rgb(1, 147, 250) 99.87%)"
        }

        
        
    }
    )










    // learnMoreBtn[i].addEventListener("mouseover", 
    // () => {
    //     learnMoreBtn[i].style.background = "linear-gradient(90.16deg, rgb(6, 78, 227) 0.14%, rgb(1, 147, 250) 99.87%)"
    // })
}
// let dotsArray = [];
// let moreTextArray = [];
// let btnArray = [];

// for(let i = 0; i <= dots.length-1; i++) {
//     console.log(dots[i]);
//     dotsArray.push(dots[i]);
// }

// for(let i = 0; i <= moreText.length-1; i++) {
//     console.log(moreText[i]);
//     moreTextArray.push(moreText[i]);
// }



// console.log(dotsArray[1]);
// console.log(moreTextArray);
// console.log(btnArray);
// console.log(btnArray[2]);

// Beginning of Mobile Screen Display 
generalContainer = document.querySelector("div.general-content.all-borders");
menuIcon = document.querySelector("label.menu-icon");
menuIcon2 = document.querySelector("label.menu-icon.menu-icon-2")
main = document.querySelector("main");
footer = document.querySelector("footer");
console.log(generalContainer);
console.log(menuIcon);
console.log(menuIcon2);
console.log(main);
console.log(footer);


menuIcon.addEventListener("click",   function () {
  
            main.style.display = "none";
            footer.style.display = "none";
            generalContainer.style.minHeight = "100vh"
    }
)

menuIcon2.addEventListener("click", () => {
            main.style.display = "revert";
            footer.style.display = "revert";
    }
)

// End of Mobile Screen display


