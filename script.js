const ratingCard = document.querySelector(".rating-card")
const thankYouCard = document.querySelector(".thank-you-card")
const thankYouText = document.querySelector(".thank-you-text p span");
const submit = document.querySelector("a");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");

//one
one.onmouseenter = function () {
    one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'

    one.onclick = function () {
        //unique to one

        //add attribute and remove it from others
        one.setAttribute('clicked', "")
        two.removeAttribute('clicked')
        three.removeAttribute('clicked')
        four.removeAttribute('clicked')
        five.removeAttribute('clicked')
        //

        //color change
        one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        two.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        three.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        four.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        five.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        //

        //

        one.onmouseleave = () => {
            one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)';
        }

        //when the mouse enters after leaving a click event
        one.onmouseenter = () => {
            one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            one.onmouseleave = () => {
                one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            }
        }
        //

        submit.onclick = () => {
            if (one.hasAttribute('clicked')) {
                thankYouText.innerHTML = 1;
                ratingCard.style.cssText += 'animation: fade-out 1s forwards;';
                ratingCard.addEventListener('animationend', () => {
                    ratingCard.style.display = 'none'
                })
                thankYouCard.style.cssText += 'animation: fade-in 1s forwards;';
                thankYouCard.addEventListener('animationend', () => {
                    thankYouCard.style.display = 'block'
                })
            }
        }
    }

    one.onmouseleave = function () {
        one.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    }
}

//two
two.onmouseenter = function () {
    two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    if (one.hasAttribute('clicked')) {
        one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    } else {
        //grey shed
        one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
    }

    two.onclick = function () {
        //unique to two

        //add attribute and remove it from others
        one.removeAttribute('clicked')
        two.setAttribute('clicked', "")
        three.removeAttribute('clicked')
        four.removeAttribute('clicked')
        five.removeAttribute('clicked')
        //

        //color change
        one.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        three.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        four.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        five.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        //

        //

        two.onmouseleave = () => {
            two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        }

        //when the mouse enters after leaving a click event
        two.onmouseenter = () => {
            two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            two.onmouseleave = () => {
                two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            }
        }
        //

        submit.onclick = () => {
            if (two.hasAttribute('clicked')) {
                thankYouText.innerHTML = 2;
                ratingCard.style.cssText += 'animation: fade-out 1s forwards;';
                ratingCard.addEventListener('animationend', () => {
                    ratingCard.style.display = 'none'
                })
                thankYouCard.style.cssText += 'animation: fade-in 1s forwards;';
                thankYouCard.addEventListener('animationend', () => {
                    thankYouCard.style.display = 'block'
                })
            }
        }
    }

    two.onmouseleave = function () {
        two.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        if (one.hasAttribute('clicked')) {
            one.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        } else {
            //grey shed
            one.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
        }
    }
}

//three
three.onmouseenter = function () {
    three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    if (two.hasAttribute('clicked')) {
        two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    } else {
        //grey shed
        two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
    }

    three.onclick = function () {
        //unique to three

        //add attribute and remove it from others
        one.removeAttribute('clicked')
        two.removeAttribute('clicked')
        three.setAttribute('clicked', "")
        four.removeAttribute('clicked')
        five.removeAttribute('clicked')
        //

        //color change
        one.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        two.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        four.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        five.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        //

        //

        three.onmouseleave = () => {
            three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        }

        //when the mouse enters after leaving a click event
        three.onmouseenter = () => {
            three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            three.onmouseleave = () => {
                three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            }
        }
        //

        submit.onclick = () => {
            if (three.hasAttribute('clicked')) {
                thankYouText.innerHTML = 3;
                ratingCard.style.cssText += 'animation: fade-out 1s forwards;';
                ratingCard.addEventListener('animationend', () => {
                    ratingCard.style.display = 'none'
                })
                thankYouCard.style.cssText += 'animation: fade-in 1s forwards;';
                thankYouCard.addEventListener('animationend', () => {
                    thankYouCard.style.display = 'block'
                })
            }
        }
    }

    three.onmouseleave = function () {
        three.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        if (two.hasAttribute('clicked')) {
            two.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        } else {
            //grey shed
            two.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
        }
    }
}

//four
four.onmouseenter = function () {
    four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    if (three.hasAttribute('clicked')) {
        three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    } else {
        //grey shed
        three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
    }

    four.onclick = function () {
        //unique to four

        //add attribute and remove it from others
        one.removeAttribute('clicked')
        two.removeAttribute('clicked')
        three.removeAttribute('clicked')
        four.setAttribute('clicked', "")
        five.removeAttribute('clicked')
        //

        //color change
        one.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        two.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        three.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        five.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        //

        //

        four.onmouseleave = () => {
            four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        }

        //when the mouse enters after leaving a click event
        four.onmouseenter = () => {
            four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            four.onmouseleave = () => {
                four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            }
        }
        //

        submit.onclick = () => {
            if (four.hasAttribute('clicked')) {
                thankYouText.innerHTML = 4;
                ratingCard.style.cssText += 'animation: fade-out 1s forwards;';
                ratingCard.addEventListener('animationend', () => {
                    ratingCard.style.display = 'none'
                })
                thankYouCard.style.cssText += 'animation: fade-in 1s forwards;';
                thankYouCard.addEventListener('animationend', () => {
                    thankYouCard.style.display = 'block'
                })
            }
        }
    }

    four.onmouseleave = function () {
        four.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        if (three.hasAttribute('clicked')) {
            three.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        } else {
            //grey shed
            three.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
        }
    }
}

//five
five.onmouseenter = function () {
    five.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    if (four.hasAttribute('clicked')) {
        four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
    } else {
        //grey shed
        four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
    }

    five.onclick = function () {
        //unique to five

        //add attribute and remove it from others
        one.removeAttribute('clicked')
        two.removeAttribute('clicked')
        three.removeAttribute('clicked')
        four.removeAttribute('clicked')
        five.setAttribute('clicked', "")
        //

        //color change
        one.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        two.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        three.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        four.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        five.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        //

        //

        five.onmouseleave = () => {
            five.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        }

        //when the mouse enters after leaving a click event
        five.onmouseenter = () => {
            five.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            five.onmouseleave = () => {
                five.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
            }
        }
        //

        submit.onclick = () => {
            if (five.hasAttribute('clicked')) {
                thankYouText.innerHTML = 5;
                ratingCard.style.cssText += 'animation: fade-out 1s forwards;';
                ratingCard.addEventListener('animationend', () => {
                    ratingCard.style.display = 'none'
                })
                thankYouCard.style.cssText += 'animation: fade-in 1s forwards;';
                thankYouCard.addEventListener('animationend', () => {
                    thankYouCard.style.display = 'block'
                })
            }
        }
    }

    five.onmouseleave = function () {
        five.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        if (four.hasAttribute('clicked')) {
            four.style.cssText += 'color: hsl(0, 0%, 100%); background-color: hsl(25, 97%, 53%)'
        } else {
            //grey shed
            four.style.cssText -= 'color: hsl(0, 0%, 100%); background-color: hsl(216, 12%, 54%)'
        }
    }
}

//alert when no rating button is clicked
submit.onclick = () => {
    if (one.hasAttribute('clicked') || two.hasAttribute('clicked') || three.hasAttribute('clicked') || four.hasAttribute('clicked') || five.hasAttribute('clicked')) {
        return;
    }

    alert('Please choose a rating.')
}
