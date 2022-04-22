document.querySelector('.addedValue').style.display = 'none';



document.querySelector(".cartButton").addEventListener("click", function () {
  const mainValue = document.querySelector(".inputValue").value;
  document.querySelector(".cart-details").style.visibility = 'visible';
    document.querySelector(".overshadowContainer").style.display = "none";
    document.querySelector(".shadow-images").classList.remove("hidee");
    
    document.querySelector('.addedValue').style.display = 'block';
    
    document.querySelector('.addedValue').innerText = mainValue;
    const totalPrice = parseInt(125) * parseInt(mainValue);
    document.querySelector(
      ".finalValue"
    ).innerText = `$125.00 * ${mainValue}  =   ${totalPrice} `;
  });




document.querySelector(".deleteValue").addEventListener("click", function () {
  document.querySelector(".finalValue").innerText = ``;
});

let count = 2;

document.querySelector(".arrow-right").addEventListener("click", function () {
  if (count > 4) {
    count = 1;
    document.querySelector(
      ".lightBox"
    ).src = `./images/image-product-${count}.jpg`;

    let checkOpa = document.querySelectorAll(".changeOpacity");
    checkOpa[count].firstElementChild.classList.remove("thumbOpa");
  }

  document.querySelector(
    ".lightBox"
  ).src = `./images/image-product-${count}.jpg`;
  let checkOpa = document.querySelectorAll(".changeOpacity");

  checkOpa[count - 1].firstElementChild.classList.add("thumbOpa");
  count++;

});

let preCount = 1;
document.querySelector(".arrow-left").addEventListener("click", function () {
  if (preCount == 1) {
    preCount = 4;
    document.querySelector(
      ".lightBox"
    ).src = `./images/image-product-${preCount}.jpg`;
    let checkOpa = document.querySelectorAll(".changeOpacity");
    checkOpa[preCount - 1].firstElementChild.classList.add("thumbOpa");
  } else {
    preCount--;
    document.querySelector(
      ".lightBox"
    ).src = `./images/image-product-${preCount}.jpg`;

    let checkOpa = document.querySelectorAll(".changeOpacity");
    checkOpa[preCount - 1].firstElementChild.classList.add("thumbOpa");
    checkOpa[preCount].firstElementChild.classList.remove("thumbOpa");
  }
});



document.querySelector(".close").addEventListener("click", function () {
  document.querySelector('.overshadowContainer').style.display = 'none';
  document.querySelector(".shadow-images").style.visibility = 'hidden';

  document
    .querySelector(".Big-container")
    .classList.remove("big-container-shadow");
  document.querySelector(".close").style.visibility = "hidden";
  document.querySelector(".thumbnails").style.display = 'none';
});



document.querySelector(".thumbnails").addEventListener("click", function () {
  
  document
    .querySelector(".Big-container")
    .classList.add("big-container-shadow");
    document.querySelector(".overshadowContainer").style.display = "block";
  document.querySelector(".shadow-images").style.visibility = 'visible';
  document.querySelector(".close").style.visibility = "visible";
});


document.querySelector(".checkout").addEventListener("click", function () {
  document.querySelector(".overshadowContainer").style.display = "none";
  document.querySelector(".shadow-images").classList.remove("hidee");
  document.querySelector('.addedValue').style.display = 'none';
  
  document
    .querySelector(".Big-container")
    .classList.remove("big-container-shadow");
  document.querySelector(".close").style.visibility = "hidden";
  document.querySelector(".cart-details").style.display = "none";
  document.querySelector('.inputValue').value = 0;
  
});


let slide = false;
document.querySelector(".mobileMenu").addEventListener("click", function () {
  if(!slide)
  {
    document.querySelector('.menu-links').style.display ='block';
    document.querySelector('.menu-links').classList.add('menuAnimationIn');
    document.querySelector('.menu-links').classList.remove('menuAnimationOut');
    
    slide = true;
  }
  else{    
    document.querySelector('.menu-links').classList.add('menuAnimationOut');
    document.querySelector('.menu-links').style.display = 'none';
    slide = false;
  }  
});
