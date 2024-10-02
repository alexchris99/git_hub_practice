//Cypher Text
const squareCode = function (message) {
    message = message.split(" ")
    message = message.join("")
    let numberPerLine = 0
    let textRow = ""
    let new_string = ""
    numberPerLine = Math.ceil(Math.sqrt(message.length))
    
    column = numberPerLine
    leterIndex = 0

    for(let i = 0; i < numberPerLine; i++){      
        if( leterIndex >= message.length){
        leterIndex = numberPerLine - column
        }
        textRow = " "
        while(leterIndex < message.length){
        textRow += message[leterIndex]
        leterIndex +=numberPerLine
        }

        new_string += textRow + " "
        column--
    }
    
    return new_string
};

module.exports = {
    squareCode
};
