function addFigureHasNOtParent(fig, tab, p = 1, dama = 0) {

    let figParent = fig.parentNode
    let blackKingTable = document.querySelector('.blackKing').parentNode
    let whiteKingTable = document.querySelector('.whiteKing').parentNode




    fig.removeAttribute("style")
    tab.append(fig)

    let rezCheck = 1;

    if (fig.getAttribute('class').search('white') != -1) {
        rezCheck = check(whiteKingCheck.parentNode, 'white')
    } else if (fig.getAttribute('class').search('black') != -1) {
        rezCheck = check(blackKingCheck.parentNode, 'black')
    }

    if (rezCheck) {

        if (p) {
            if (posMove < moveArr.length) {
                moveArr = moveArr.filter((el, index) => index < posMove)
            }


            moveArr.push({
                eat: false,
                fromWhere: figParent,
                toWhere: tab,
                figure: fig,
                dama: dama
            })

            posMove++

            audio.innerHTML = '<audio src="mp3/addFigure.mp3" autoplay></audio>'


            console.log(moveArr)

            let rezCheck2 = 1;

            if (fig.getAttribute('class').search('white') != -1) {
                rezCheck2 = check(blackKingCheck.parentNode, 'black')
            } else if (fig.getAttribute('class').search('black') != -1) {
                rezCheck2 = check(whiteKingCheck.parentNode, 'white')
            }

           
                blackKingTable.style.backgroundImage = ''
                whiteKingTable.style.backgroundImage = ''
           


            if (rezCheck2 == 0 && fig.getAttribute('class').search('white') != -1) {
                blackKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
            }
            if (rezCheck2 == 0 && fig.getAttribute('class').search('black') != -1) {
                whiteKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
            }

          
       

            count++
            whoMove()
            return 1
        }
    } else {
        figParent.append(fig)

        whoMove()
        return 0
    }
}

function figureNotMove(fig) {
    // audio.innerHTML = '<audio src="mp3/notM.mp3" autoplay></audio>'
    fig.removeAttribute("style")
    whoMove()
}


function figureEat(fig, tab, dama = 0) {

    let figParent = fig.parentNode
    let figEatParent = tab.parentNode

    let blackKingTable = document.querySelector('.blackKing').parentNode
    let whiteKingTable = document.querySelector('.whiteKing').parentNode

    fig.removeAttribute("style")
    tab.parentNode.append(fig)
    tab.remove()

    let rezCheck = 1;

    if (fig.getAttribute('class').search('white') != -1) {

        rezCheck = check(whiteKingCheck.parentNode, 'white')

    } else if (fig.getAttribute('class').search('black') != -1) {

        rezCheck = check(blackKingCheck.parentNode, 'black')

    }
    if (rezCheck) {

        audio.innerHTML = '<audio src="mp3/eatFigure.mp3" autoplay></audio>'
        // audio.innerHTML = ''
        if (posMove < moveArr.length) {
            moveArr = moveArr.filter((el, index) => index < posMove)
        }
        moveArr.push({
            eat: true,
            fromWhere: figParent,
            toWhere: figEatParent,
            figure: fig,
            figureEat: tab,
            dama: dama
        })
        console.log(moveArr)
        posMove++


        if (tab.getAttribute("class").search("white") != -1) {
            figureImgWhite = figureImgWhite.filter(el => el != tab)
            // console.log(figureImgWhite)
        } else if (tab.getAttribute("class").search("black") != -1) {
            figureImgBlack = figureImgBlack.filter(el => el != tab)
            // console.log(figureImgBlack)
        }


        let rezCheck2 = 1;

        if (fig.getAttribute('class').search('white') != -1) {
            rezCheck2 = check(blackKingCheck.parentNode, 'black')
        } else if (fig.getAttribute('class').search('black') != -1) {
            rezCheck2 = check(whiteKingCheck.parentNode, 'white')
        }

       
            blackKingTable.style.backgroundImage = ''
            whiteKingTable.style.backgroundImage = ''
       


        if (rezCheck2 == 0 && fig.getAttribute('class').search('white') != -1) {
            blackKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
        }
        if (rezCheck2 == 0 && fig.getAttribute('class').search('black') != -1) {
            whiteKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
        }


        count++
        whoMove()
        return 1

    } else {
        figParent.append(fig)
        figEatParent.append(tab)
        whoMove()
        return 0
    }



}

function figureEatTab(fig, tab, dama = 0) {


    let figParent = fig.parentNode
    let tabChild = tab.firstChild

    let blackKingTable = document.querySelector('.blackKing').parentNode
    let whiteKingTable = document.querySelector('.whiteKing').parentNode

    fig.removeAttribute("style")
    tab.innerHTML = ''
    tab.append(fig)

    let rezCheck = 1;

    if (fig.getAttribute('class').search('white') != -1) {

        rezCheck = check(whiteKingCheck.parentNode, 'white')

    } else if (fig.getAttribute('class').search('black') != -1) {

        rezCheck = check(blackKingCheck.parentNode, 'black')

    }
    if (rezCheck) {

        audio.innerHTML = '<audio src="mp3/eatFigure.mp3" autoplay></audio>'

        if (posMove < moveArr.length) {
            moveArr = moveArr.filter((el, index) => index < posMove)
        }
        moveArr.push({
            eat: true,
            fromWhere: figParent,
            toWhere: tab,
            figure: fig,
            figureEat: tabChild,
            dama: dama
        })
        console.log(moveArr)
        posMove++


        if (tab.firstChild.getAttribute("class").search("white") != -1) {
            figureImgWhite = figureImgWhite.filter(el => el != tabChild)
            // console.log(figureImgWhite)
        } else if (tab.firstChild.getAttribute("class").search("black") != -1) {
            figureImgBlack = figureImgBlack.filter(el => el != tabChild)
            // console.log(figureImgBlack)
        }


        let rezCheck2 = 1;

        if (fig.getAttribute('class').search('white') != -1) {
            rezCheck2 = check(blackKingCheck.parentNode, 'black')
        } else if (fig.getAttribute('class').search('black') != -1) {
            rezCheck2 = check(whiteKingCheck.parentNode, 'white')
        }

       
            blackKingTable.style.backgroundImage = ''
            whiteKingTable.style.backgroundImage = ''
       


        if (rezCheck2 == 0 && fig.getAttribute('class').search('white') != -1) {
            blackKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
        }
        if (rezCheck2 == 0 && fig.getAttribute('class').search('black') != -1) {
            whiteKingCheck.parentNode.style.backgroundImage = 'radial-gradient(at center center, red 30%, rgb(231, 0, 0) 35%, rgba(169, 0, 0, 0) 85%, rgba(158, 0, 0, 0) 100%)'
        }



        count++
        whoMove()
        return 1
    } else {
        figParent.append(fig)
        tab.append(tabChild)

        whoMove()
        return 0
    }

}


function rookKing(figure) {
    if (figure.getAttribute("class").search("black") != -1) {
        if (rookBlack18 == 0 && figure.parentNode.dataset.y == 8 && figure.parentNode.dataset.x == 1) {
            rookBlack18 = 1
        }
        if (rookBlack88 == 0 && figure.parentNode.dataset.y == 8 && figure.parentNode.dataset.x == 8) {
            rookBlack88 = 1
        }
    } else {
        if (rookWhite11 == 0 && figure.parentNode.dataset.y == 1 && figure.parentNode.dataset.x == 1) {
            rookWhite11 == 1
        }
        if (rookWhite81 == 0 && figure.parentNode.dataset.y == 1 && figure.parentNode.dataset.x == 8) {
            rookWhite81 = 1
        }
    }
}



function check(tabKing, color) {

    for (let i = +tabKing.dataset.x + 1; i <= 8; i++) {
        let tableBox = document.querySelector(`.tableBox[data-x="${i}"][data-y="${tabKing.dataset.y}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }

        if (i == +tabKing.dataset.x + 1 && tableBox.firstChild.getAttribute('id') == 'King') {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Rook' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Rook' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }

    for (let i = +tabKing.dataset.x - 1; i > 0; i--) {
        let tableBox = document.querySelector(`.tableBox[data-x="${i}"][data-y="${tabKing.dataset.y}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }

        if (i == +tabKing.dataset.x - 1 && tableBox.firstChild.getAttribute('id') == 'King') {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Rook' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Rook' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }

    for (let i = +tabKing.dataset.y + 1; i <= 8; i++) {
        let tableBox = document.querySelector(`.tableBox[data-x="${tabKing.dataset.x}"][data-y="${i}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }

        if (i == +tabKing.dataset.y + 1 && tableBox.firstChild.getAttribute('id') == 'King') {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Rook' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Rook' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }

    for (let i = +tabKing.dataset.y - 1; i > 0; i--) {
        let tableBox = document.querySelector(`.tableBox[data-x="${tabKing.dataset.x}"][data-y="${i}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }

        if (i == +tabKing.dataset.y - 1 && tableBox.firstChild.getAttribute('id') == 'King') {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Rook' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Rook' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }


    // diagonal**************************************************
    let tableCord;
    if (+tabKing.dataset.x < +tabKing.dataset.y) {
        tableCord = +tabKing.dataset.y
    } else {
        tableCord = +tabKing.dataset.x
    }


    for (let i = 1; i <= (8 - tableCord); ++i) {
        let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x + i}"][data-y="${+tabKing.dataset.y + i}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }

        if (i == 1 && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1 && (tableBox.firstChild.getAttribute('id') == 'King' || (tableBox.firstChild.getAttribute('id') == 'Pawn') && color == 'white')) {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Elephant' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Elephant' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }

    if (9 - +tabKing.dataset.x < +tabKing.dataset.y) {
        tableCord = +tabKing.dataset.y
    } else {
        tableCord = 9 - +tabKing.dataset.x
    }

    for (let i = 1; i <= (8 - tableCord); ++i) {
        let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x - i}"][data-y="${+tabKing.dataset.y + i}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }


        if (i == 1 && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1 && (tableBox.firstChild.getAttribute('id') == 'King' || (tableBox.firstChild.getAttribute('id') == 'Pawn') && color == 'white')) {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Elephant' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Elephant' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }



    if (+tabKing.dataset.x < 9 - +tabKing.dataset.y) {
        tableCord = 9 - +tabKing.dataset.y
    } else {
        tableCord = +tabKing.dataset.x
    }

    for (let i = 1; i <= (8 - tableCord); ++i) {
        let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x + i}"][data-y="${+tabKing.dataset.y - i}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }


        if (i == 1 && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1 && (tableBox.firstChild.getAttribute('id') == 'King' || (tableBox.firstChild.getAttribute('id') == 'Pawn') && color == 'black')) {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Elephant' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Elephant' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }

    if (9 - +tabKing.dataset.x < 9 - +tabKing.dataset.y) {
        tableCord = 9 - +tabKing.dataset.y
    } else {
        tableCord = 9 - +tabKing.dataset.x
    }

    for (let i = 1; i <= (8 - tableCord); ++i) {
        let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x - i}"][data-y="${+tabKing.dataset.y - i}"]`)
        if (tableBox.innerHTML == '') {
            continue
        }


        if (i == 1 && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1 && (tableBox.firstChild.getAttribute('id') == 'King' || (tableBox.firstChild.getAttribute('id') == 'Pawn') && color == 'black')) {
            return 0
        }

        if (tableBox.firstChild.getAttribute('class').search(`${color}`) != -1 || (tableBox.firstChild.getAttribute('id') != 'Elephant' && tableBox.firstChild.getAttribute('id') != 'Queen')) {
            break
        }
        if (tableBox.firstChild.getAttribute('id') == 'Elephant' || tableBox.firstChild.getAttribute('id') == 'Queen') {
            return 0
        }
    }

    if (+tabKing.dataset.y + 1 <= 8) {
        if (+tabKing.dataset.x + 2 <= 8) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x + 2}"][data-y="${+tabKing.dataset.y + 1}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
        if (+tabKing.dataset.x - 2 >= 1) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x - 2}"][data-y="${+tabKing.dataset.y + 1}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
    }

    if (+tabKing.dataset.y + 2 <= 8) {
        if (+tabKing.dataset.x + 1 <= 8) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x + 1}"][data-y="${+tabKing.dataset.y + 2}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
        if (+tabKing.dataset.x - 1 >= 1) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x - 1}"][data-y="${+tabKing.dataset.y + 2}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
    }

    if (+tabKing.dataset.y - 1 >= 1) {
        if (+tabKing.dataset.x + 2 <= 8) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x + 2}"][data-y="${+tabKing.dataset.y - 1}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
        if (+tabKing.dataset.x - 2 >= 1) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x - 2}"][data-y="${+tabKing.dataset.y - 1}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
    }

    if (+tabKing.dataset.y - 2 >= 1) {
        if (+tabKing.dataset.x + 1 <= 8) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x + 1}"][data-y="${+tabKing.dataset.y - 2}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
        if (+tabKing.dataset.x - 1 >= 1) {
            let tableBox = document.querySelector(`.tableBox[data-x="${+tabKing.dataset.x - 1}"][data-y="${+tabKing.dataset.y - 2}"]`)
            if (tableBox.innerHTML != '' && tableBox.firstChild.getAttribute('id') == 'Hors' && tableBox.firstChild.getAttribute('class').search(`${color}`) == -1) {
                return 0
            }
        }
    }


    return 1
}