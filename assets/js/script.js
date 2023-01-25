
// TODO: Declare any global variables we need
let headsRolls = 0 
let tailsRolls = 0

document.addEventListener('DOMContentLoaded', function() {

    // TODO: Add event listener and handler for flip and clear buttons
    document.getElementById('flip').addEventListener('click', () => {
    let flippedHeads = Math.random() < 0.5
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
    if (flippedHeads) {
        document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
        document.getElementById('message').textContent = 'You flipped heads!'

        headsRolls += 1
    }
    else {
        document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
        document.getElementById('message').textContent = 'You flipped tails!'

        tailsRolls += 1
    }
    
    let total = headsRolls + tailsRolls

   

    if (total > 0){

        let percentHeads = Math.round(headsRolls / total) * 100
        let percentTails = Math.round(tailsRolls / total) * 100
    }

    document.getElementById('heads').textContent = headsRolls
    document.getElementById('heads-percent').textContent = percentHeads + '%'
    document.getElementById('tails').textContent = tailsRolls
    document.getElementById('tails-percent').textContent = percentTails + '%'
    })

    document.getElementById('clear').addEventListener('click', function() {
        headsRolls = 0
        tailsRolls = 0

        document.getElementById('message').textContent = 'Let\'s get rolling!'

        let total = headsRolls + tailsRolls

        let percentHeads = 0
        let percentTails = 0

        if (total > 0) {

            percentHeads = math.round((headsRolls / total) * 100)
            percentTails = math.round((tailsRolls / total) * 100)
        }

        document.getElementById('heads').textContent = headsRolls
        document.getElementById('heads-percent').textContent = percentHeads + '%'
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('tails-percent').textContent = percentTails + '%'
    })
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})