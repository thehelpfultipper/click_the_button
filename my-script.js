// reset function
const reset = () =>  {
  // reset body and styles button
  body.style.backgroundColor = '#333333';
  styleBtn.style.display = 'inline-block';

  // reset text and text button
  h1.innerText = 'Are you ready?';
  h3.style.display = 'block';
  textBtn[1].style.display = 'inline-block';

  // reset special and reset buttons
  specialBtn.style.display = 'inline-block';
  resetBtn.classList.add('hide');
}

// get variables from DOM
const styleBtn = document.getElementById("b1");
const textBtn = document.getElementsByTagName("button");
const specialBtn = document.querySelector("#b3");
const resetBtn = document.querySelector("#b4");

const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");

const err = document.querySelector(".error");
let error = false;
let isFirstClicked = false;

styleBtn.addEventListener('click', function() {
  !error && (err.style.visibility = 'hidden');
  body.style.backgroundColor = '#2C3E50';
  this.style.display = 'none';
  isFirstClicked = true;
});
 

textBtn[1].addEventListener('click', function() {
  if(isFirstClicked === true) { 
    !error && (err.style.visibility = 'hidden');
    h1.innerHTML = 'Hi there <span>______</span>!';
    h3.style.display = 'none';
    this.style.display = 'none';
  } else {
    !error && (err.style.visibility = 'visible');
  }
});

specialBtn.addEventListener('click', function() { 
    // ask user for name and display it
    const userName = prompt("Enter a name: ");
    try {
      document.querySelector('span').innerText = userName;
    } catch (error) {
      err.style.visibility = 'visible';
      error = true;
      return
    }

    // hide third button
    this.style.display = 'none';
    resetBtn.classList.remove('hide');
});

resetBtn.addEventListener('click', function() {
  reset();
  isFirstClicked = false;
});



