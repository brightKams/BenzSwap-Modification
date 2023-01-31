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

        if(dots[i].style.display ==="none") {
            dots[i].style.display = "inline";
            moreText[i].style.display = "none";
            learnMoreBtn[i].innerText = "Learn More.....";
            learnMoreParagraph[i].style.height = "initial";
            learnMoreBtn[i].style.background = "initial"
            // learnMoreBtn[i].innerText = "Read Less.....";
        }

        else

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



console.log(dotsArray[1]);
console.log(moreTextArray);
console.log(btnArray);
console.log(btnArray[2]);

// class LearnMore {
//     constructor(dots, moreText, learnMoreBtn) {
//         this.dots = dots;
//         this.moreText = moreText;
//         this.learnMoreBtn = learnMoreBtn;
//         return;



//         if (dots.style.display === "none") {
//             dots.style.display = "inline";
//             moreText.style.display = "none";
//             learnMoreBtn.innerText = "Learn More.....";
//         }


//         else {
//             dots.style.display = "none";
//             moreText.style.display = "inline";
//             learnMoreBtn.innerText = "Read less.....";
//         }
//     }
// }

// let learnMore = new LearnMore(dotsArray[1], moreTextArray[1], btnArray[1]);







// btnArray.forEach(item => {
//     console.log(item);
// })
// function learnMore() {

//     moreText = moreText.forEach(eachMoreText => {
//         // eachMoreText.style.display = "none";

//     });

//     learnMoreBtn = learnMoreBtn.forEach(eachLearnMoreText => {
//         // eachLearnMoreText.innerText = "Read Less..."
//     });



//     dots.forEach(eachdot => {
//         if (eachdot.style.display === "none"){
//             eachdot.style.display = "inline";
//             moreText.eachMoreText.style.display ="none";
//             learnMoreBtn.eachLearnMoreText.innerText = "Read More..."

            
            
//             l
//         }
//         else
    
//         {
//             eachdot.style.display = "none";
//             moreText.eachMoreText.style.display = "inline";
//             learnMoreBtn.eachLearnMoreText.innerText = "Read less....."
    
//         }

//     })

// }