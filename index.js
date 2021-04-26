const chessTable = document.querySelector('.chessTable');
let moveArr = []
let posMove = 0
let temp = 1;
let count = 0;
let kingWhite = 0;
let kingBlack = 0;
let rookWhite11 = 0;
let rookBlack18 = 0;
let rookWhite81 = 0;
let rookBlack88 = 0;
let audio = document.querySelector('.audio');


for (let i = 1; i <= 8; ++i) {
    for (let j = 1; j <= 8; ++j) {
        let square = document.createElement('div')
        square.dataset.x = j;
        square.dataset.y = 9 - i;
        if (temp % 2) {
            square.classList.add('tableBox', 'white')
            //   console.log( square)
        } else {
            // console.log( square)
            square.classList.add('tableBox', 'black')
        }
        chessTable.append(square);
        // if((i == 1 && j == 1)){
        // square.innerHTML = `<img class ="figureImg" draggable ="true" >`
        // }
        temp++
    }
    temp++
}






let tableBox = document.querySelectorAll('.tableBox')

tableBox.forEach(elem => {

    elem.addEventListener('mouseup', (e) => {

        if (e.target.classList.contains('chessFigure')) {
            e.target.hidden = true
            let elemBelow = document.elementFromPoint(e.clientX, e.clientY);
            e.target.hidden = false

            console.log(elemBelow)
            if (!elemBelow.classList.contains('tableBox') && !elemBelow.classList.contains('figureImg')) {
                figureNotMove(e.target)
            } else {
                if (1) {
                    switch (e.target.getAttribute('id')) {
                        case 'Pawn':
                            pawn(e.target, elemBelow)
                            break
                        case 'Hors':
                            hors(e.target, elemBelow)
                            break
                        case 'Rook':
                            rook(e.target, elemBelow)
                            break
                        case 'Elephant':
                            elephant(e.target, elemBelow)
                            break
                        case 'Queen':
                            queen(e.target, elemBelow)
                            break
                        case 'King':
                            king(e.target, elemBelow)
                            break
                    }
                } else {
                    figureNotMove(e.target)
                }
            }


        }
    })
})


function addImg() {
    tableBox.forEach((elem, index) => {
        if (elem.dataset.y == 1 || elem.dataset.y == 2 || elem.dataset.y == 7 || elem.dataset.y == 8) {
            elem.innerHTML = `<img class ="figureImg" draggable="false" >`;
        }
    })
}

addImg();

// /=====================================/ 
function addFigure(figureImg) {

    for (let i = 0; i < figureImg.length; ++i) {
        figureImg[i].classList.add('chessFigure')
        if (i > 7 && i < 16) {
            figureImg[i].classList.add('blackPawn')
            figureImg[i].setAttribute('src', 'img/blackPawn.png')
            figureImg[i].setAttribute('id', 'Pawn')
        }
        if (i > 15 && i < 24) {
            figureImg[i].classList.add('whitePawn')
            figureImg[i].setAttribute('src', 'img/whitePawn.png')
            figureImg[i].setAttribute('id', 'Pawn')
        }

        switch (i) {
            case 0:
            case 7:
                figureImg[i].classList.add('blackRook')
                figureImg[i].setAttribute('src', 'img/blackRook.png')
                figureImg[i].setAttribute('id', 'Rook')
                break
            case 1:
            case 6:
                figureImg[i].classList.add('blackHors')
                figureImg[i].setAttribute('src', 'img/blackHors.png')
                figureImg[i].setAttribute('id', 'Hors')
                break
            case 2:
            case 5:
                figureImg[i].classList.add('blackElephant')
                figureImg[i].setAttribute('src', 'img/blackElephant.png')
                figureImg[i].setAttribute('id', 'Elephant')
                break
            case 3:
                figureImg[i].classList.add('blackQueen')
                figureImg[i].setAttribute('src', 'img/blackQueen.png')
                figureImg[i].setAttribute('id', 'Queen')
                break
            case 4:
                figureImg[i].classList.add('blackKing')
                figureImg[i].setAttribute('src', 'img/blackKing.png')
                figureImg[i].setAttribute('id', 'King')
                break

            case 24:
            case 31:
                figureImg[i].classList.add('whiteRook')
                figureImg[i].setAttribute('src', 'img/whiteRook.png')
                figureImg[i].setAttribute('id', 'Rook')
                break
            case 25:
            case 30:
                figureImg[i].classList.add('whiteHors')
                figureImg[i].setAttribute('src', 'img/whiteHors.png')
                figureImg[i].setAttribute('id', 'Hors')
                break
            case 26:
            case 29:
                figureImg[i].classList.add('whiteElephant')
                figureImg[i].setAttribute('src', 'img/whiteElephant.png')
                figureImg[i].setAttribute('id', 'Elephant')
                break
            case 27:
                figureImg[i].classList.add('whiteQueen')
                figureImg[i].setAttribute('src', 'img/whiteQueen.png')
                figureImg[i].setAttribute('id', 'Queen')
                break
            case 28:
                figureImg[i].classList.add('whiteKing')
                figureImg[i].setAttribute('src', 'img/whiteKing.png')
                figureImg[i].setAttribute('id', 'King')
                break
        }

    }

}

let figureImg = document.querySelectorAll('.figureImg')

addFigure(figureImg)
let figureImgWhite = []
let figureImgBlack = []
figureImg.forEach((el, ind) => {
    if (el.getAttribute("class").search('white') != -1) {
        figureImgWhite.push(el)
    } else {
        figureImgBlack.push(el)
    }
})


let blackKingCheck = document.querySelector(`.tableBox[data-x="5"][data-y="8"]`).firstChild
let whiteKingCheck = document.querySelector(`.tableBox[data-x="5"][data-y="1"]`).firstChild

// whiteKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'

console.log(blackKingCheck)
console.log(whiteKingCheck)
// console.log(figureImg )
// console.log(figureImgWhite)
// console.log(figureImgBlack)


// tableBox.forEach((elem, index) => {
//     if (elem.dataset.y == 2 ) {
//         console.log(elem)
//         elem.innerHTML = ''
//     }
// })



// console.log(figureImgWhite)
// console.log(figureImgBlack)



// console.log(figureImgWhite[0].outerHTML)

// let arr = [4, 46 ,"dsfds",66]
// console.log(arr)
// delete arr[1]
// console.log(arr)

document.querySelector('.restart').addEventListener('click', (e) => {
    tableBox.forEach(elem => {
        elem.innerHTML = '';
    })
    addImg();
    figureImg = document.querySelectorAll('.figureImg')
    addFigure(figureImg)
    delete figureImgWhite
    delete figureImgBlack
    figureImg.forEach((el, ind) => {
        if (el.getAttribute("class").search('white') != -1) {
            figureImgWhite.push(el)
        } else {
            figureImgBlack.push(el)
        }
    })
    delete moveArr;
    posMove = 0;
    rookWhite11 = 0;
    rookBlack18 = 0;
    rookWhite81 = 0;
    rookBlack88 = 0;
    kingWhite = 0;
    kingBlack = 0;
    count = 0;
    whoMove()
})



function posFigure(figureImg, color) {


    for (let i = 0; i < figureImg.length; ++i) {
        if (figureImg[i].classList.contains('chessFigure')) {
            figureImg[i].onmousedown = function (e) {





                figureImg[i].style.position = 'absolute'
                figureImg[i].style.zIndex = 1000;
                moveAt(e.pageX, e.pageY);


                function moveAt(pageX, pageY) {
                    figureImg[i].style.left = pageX - figureImg[i].offsetWidth / 2 + 'px';
                    figureImg[i].style.top = pageY - figureImg[i].offsetHeight / 2 + 'px';
                }

                document.onmousemove = function (e) {
                    moveAt(e.pageX, e.pageY);

                }

                figureImg[i].addEventListener('mouseup', (e) => {

                    document.onmousemove = null;
                    figureImg[i].onmouseup = null;


                    for (let i = 0; i < figureImg.length; ++i) {
                        if (color == 1) {
                            try {
                                figureImgBlack[i].onmousedown = null
                            } catch (e) {

                            }
                        }
                        if (color == 0) {
                            try {
                                figureImgWhite[i].onmousedown = null
                            } catch (e) {

                            }

                        }
                    }

                })

                // figureImg[i].ondragstart = function () {
                //     return false;
                // };






            }

        }
    }


}


function mouseUp(figureImg, color) {
    document.onmouseup = null;
    document.onmousemove = null;
    for (let i = 0; i < figureImg.length; ++i) {

        figureImg[i].onmouseup = null;
        figureImg[i].onmousedown = null

    }


    console.log(figureImgWhite)
    console.log(figureImgBlack)
}
// posFigure(figureImg, 0)

function whoMove() {

    if (count % 2 == 0) {
        posFigure(figureImgWhite, 0)

    } else {
        posFigure(figureImgBlack, 1)

    }
}

whoMove()


let damaWhite = document.getElementById('damaWhite')
let damaBlack = document.getElementById('damaBlack')

damaWhite.addEventListener('click', (e) => {
    if (e.target.classList.contains('damaImg')) {
        for (let i = 0; i <= 7; i++) {
            if (tableBox[i].innerHTML != '' && tableBox[i].firstChild.classList.contains('whitePawn')) {
                figureImgWhite = figureImgWhite.filter(el => el != tableBox[i].firstChild)
                tableBox[i].innerHTML = `<img class="figureImg chessFigure white${e.target.getAttribute('id')}" draggable="false" src="img/white${e.target.getAttribute('id')}.png" id="${e.target.getAttribute('id')}">`
                document.querySelector('.wrapNoCursor1').classList.add('damaNone')
                figureImgWhite.push(tableBox[i].firstChild)
                moveArr[posMove - 1].dama = tableBox[i].firstChild
                break
            }
        }
        let rezCheck = 1;

        rezCheck = check(blackKingCheck.parentNode, 'black')
        if (rezCheck == 0) {
            blackKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
        }

    }

})


damaBlack.addEventListener('click', (e) => {
    if (e.target.classList.contains('damaImg')) {
        for (let i = 56; i <= 63; i++) {
            if (tableBox[i].innerHTML != '' && tableBox[i].firstChild.classList.contains('blackPawn')) {
                figureImgBlack = figureImgBlack.filter(el => el != tableBox[i].firstChild)
                tableBox[i].innerHTML = `<img class="figureImg chessFigure black${e.target.getAttribute('id')}" draggable="false" src="img/black${e.target.getAttribute('id')}.png" id="${e.target.getAttribute('id')}">`
                document.querySelector('.wrapNoCursor2').classList.add('damaNone')
                figureImgBlack.push(tableBox[i].firstChild)
                moveArr[posMove - 1].dama = tableBox[i].firstChild
                break
            }
        }
        let rezCheck = 1;
        rezCheck = check(whiteKingCheck.parentNode, 'white')
        if (rezCheck == 0) {
            whiteKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
        }

    }

})


let starBtn = document.querySelector('.start_btn')
let play = document.querySelector('.li2')
let home = document.querySelector('.li1')

starBtn.addEventListener('click', (e) => {
    document.querySelector('.section_1').classList.add('gameActiv')
    document.querySelector('.wrapper').classList.remove('gameActiv')
    document.querySelector('.bordHeader').classList.remove('bordHeader')
    play.classList.add('bordHeader')
})


play.addEventListener('click', (e) => {
    document.querySelector('.section_1').classList.add('gameActiv')
    document.querySelector('.wrapper').classList.remove('gameActiv')
    document.querySelector('.bordHeader').classList.remove('bordHeader')
    play.classList.add('bordHeader')
})

home.addEventListener('click', (e) => {
    document.querySelector('.wrapper').classList.add('gameActiv')
    document.querySelector('.section_1').classList.remove('gameActiv')
    document.querySelector('.bordHeader').classList.remove('bordHeader')
    home.classList.add('bordHeader')
})



//ход назад вперед
// console.log( moveArr[moveArr.length - 1].fromWhere)
// console.log( moveArr[moveArr.length - 1].toWhere)
// console.log( moveArr[moveArr.length - 1].figure)

let forward = document.querySelector('.chessForward')
let back = document.querySelector('.chessBack')

back.addEventListener('click', backFigure)

function backFigure() {
    if (moveArr[posMove - 1] != undefined && !moveArr[posMove - 1].eat) {
        moveArr[posMove - 1].fromWhere.append(moveArr[posMove - 1].figure)
        moveArr[posMove - 1].toWhere.innerHTML = ''
        if (moveArr[posMove - 1].figure.getAttribute("class").search("white") != -1) {
            if (moveArr[posMove - 1].dama) {
                figureImgWhite = figureImgWhite.filter(el => el != moveArr[posMove - 1].dama)
                figureImgWhite.push(moveArr[posMove - 1].figure)
            }
            console.log(figureImgWhite)
        } else if (moveArr[posMove - 1].figure.getAttribute("class").search("black") != -1) {

            if (moveArr[posMove - 1].dama) {
                figureImgBlack = figureImgBlack.filter(el => el != moveArr[posMove - 1].dama)
                figureImgBlack.push(moveArr[posMove - 1].figure)
            }
            console.log(figureImgBlack)
        }

        posMove--

    } else if (moveArr[posMove - 1] != undefined && moveArr[posMove - 1].eat) {
        moveArr[posMove - 1].fromWhere.append(moveArr[posMove - 1].figure)
        moveArr[posMove - 1].toWhere.innerHTML = ''
        moveArr[posMove - 1].toWhere.append(moveArr[posMove - 1].figureEat)
        if (moveArr[posMove - 1].figureEat.getAttribute("class").search("white") != -1) {
            figureImgWhite.push(moveArr[posMove - 1].figureEat)
            if (moveArr[posMove - 1].dama) {
                figureImgBlack = figureImgBlack.filter(el => el != moveArr[posMove - 1].dama)
                figureImgBlack.push(moveArr[posMove - 1].figure)
            }
            console.log(figureImgWhite)
        } else if (moveArr[posMove - 1].figureEat.getAttribute("class").search("black") != -1) {
            figureImgBlack.push(moveArr[posMove - 1].figureEat)
            if (moveArr[posMove - 1].dama) {
                figureImgWhite = figureImgWhite.filter(el => el != moveArr[posMove - 1].dama)
                figureImgWhite.push(moveArr[posMove - 1].figure)
            }
            console.log(figureImgBlack)
        }


        posMove--
    }

    if (moveArr[posMove - 1].figure.getAttribute('class').search('white') == -1) {

        mouseUp(figureImgBlack, 1)

    } else if (moveArr[posMove - 1].figure.getAttribute('class').search('black') == -1) {
        mouseUp(figureImgWhite, 0)
    }
    count++
    whoMove()


}

forward.addEventListener('click', (e) => {

    if (moveArr[posMove] != undefined && moveArr[posMove].dama) {
        moveArr[posMove].toWhere.innerHTML = ''
        moveArr[posMove].fromWhere.innerHTML = ''
        moveArr[posMove].toWhere.append(moveArr[posMove].dama)
        posMove++

    } else if (moveArr[posMove] != undefined) {
        if (!moveArr[posMove].eat) {
            moveArr[posMove].toWhere.append(moveArr[posMove].figure)

        }
        if (moveArr[posMove].eat) {
            moveArr[posMove].toWhere.innerHTML = ''
            moveArr[posMove].toWhere.append(moveArr[posMove].figure)
            if (moveArr[posMove].figureEat.getAttribute("class").search("white") != -1) {
                figureImgWhite = figureImgWhite.filter(el => el != moveArr[posMove].figureEat)
                // console.log(figureImgWhite)
            } else if (moveArr[posMove].figureEat.getAttribute("class").search("black") != -1) {
                figureImgBlack = figureImgBlack.filter(el => el != moveArr[posMove].figureEat)
                // console.log(figureImgBlack)
            }

        }
        posMove++

    }
})

// console.log(moveArr[10])