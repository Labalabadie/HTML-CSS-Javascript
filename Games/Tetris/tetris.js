document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div'))
    const width = 10
    const startBtn = document.getElementById("star-btn")
    const score = document.getElementById("score")
    let random = 0
    let nextRandom = 0

    


    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width+0, width+1, width+2, width*2+2],
        [width*2, 1, width+1, width*2+1],
        [width, width*2, width*2+1,width*2+2]
    ]
    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width*2+1, width+2 ],
        [width, width+1, width+2, width*2+1],
        [1, width,  width+1, width*2+1]
    ]
    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ]
    const sTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ]
    const zTetromino = [
        [width*2, width+1, width*2+1, width+2],
        [0, width, width+1, width*2+1],
        [width*2, width+1, width*2+1, width+2],
        [0, width, width+1, width*2+1]
    ]

    const theTetrominoes = [zTetromino,sTetromino,iTetromino,tTetromino,lTetromino]
    nextRandom = Math.floor(Math.random()*theTetrominoes.length)
    random = nextRandom
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex = 0


    const upNextTetrominoes = [
        [displayWidth*2, displayWidth+1, displayWidth*2+1, displayWidth+2],//zTetromino
        [0, 1, displayWidth, displayWidth+1],//sTetromino
        [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1],//iTetromino
        [1, displayWidth, displayWidth+1, displayWidth+2],//tTetromino
        [1, displayWidth+1, displayWidth*2+1, 2] //lTetromino
    ]
    
    let currentPosition = 4
    let currentRotation = 0
    let current = theTetrominoes[random][currentRotation]


    function draw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino')
        })
    }
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
        })
    }
    timerId = setInterval(moveDown, 250)

    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze()
    }

    function freeze() {
        if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            random = nextRandom
            nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes[random][currentRotation]
            currentPosition = 4
            draw()
            displayShape()
        }
    }
    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)
        if (!isAtLeftEdge) currentPosition -=1

        if (current.some(index => squares(currentPosition + index).classList.contains('taken')))
            currentPosition += 1
        draw()
    }
    function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width-1)
        if(!isAtRightEdge) currentPosition +=1

        if (current.some( index => squares(currentPosition + index).classList.contains('taken')))
            currentPosition -=1
        draw()
    }
    function rotate() {
        undraw()
        currentRotation ++
        if (currentRotation === current.length)
        currentRotation = 0
        current = theTetrominoes[random][currentRotation]
        draw()
    }

    function displayShape() {
        displaySquares.forEach(square => {
            square.classList.remove('tetromino')
        })
        upNextTetrominoes[nextRandom].forEach( index => {
            displaySquares[displayIndex + index].classList.add('tetromino')
        })
    }
    displayShape()

    //Assign function to KeyCodes
    function control(k) {
        if(k.keyCode === 37) {
            moveLeft()
        }
        if(k.keyCode === 38){
            rotate()
        }
        if(k.keyCode === 39) {
            moveRight()
        }
        if(k.keyCode === 40) {
            moveDown()
        }
    }

    document.addEventListener('keyup', control)
})