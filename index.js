run = false

function findWords() {
    if(!run) {
        phonenumber = document.getElementById('box1').value + document.getElementById('box2').value + document.getElementById('box3').value
        if(phonenumber.length == 10){
            document.getElementById('warning').style.color = "black"
            document.getElementById('startbutton').innerHTML = "Running..."
            wordlist = [];
            if(document.getElementById('intact').checked) {
                wordlist.push(phonenumber.slice(0,3))
                wordlist.push(phonenumber.slice(3,6))
                wordlist.push(phonenumber.slice(6,11))
            } else {
                for(i = 0; i < 11; i++) {
                    for(j = (i+1); j < 11; j++) {
                        if(((j-i) >= document.getElementById('minlen').value) && ((j-i) <= document.getElementById('maxlen').value))
                        wordlist.push(phonenumber.slice(i,j))
                    }
                }
            }
            console.debug(wordlist)
            q = 0
            offset = 0
            document.getElementById('outputbox').innerHTML = ""
            run = true
        } else {
            document.getElementById('warning').style.color = "red"
        }   
    } else {
        run = false
        document.getElementById('startbutton').innerHTML = "Find Words"
    }
}

function findEngine() {
    if(run) {
        console.debug(wordlist[q])
        if(words[wordlist[q]] != undefined) {
            wordsarray = words[wordlist[q]]
            containernumber = phonenumber.split(wordlist[q])
            console.debug(containernumber[0], wordsarray, containernumber[1])
            for(i = 0; i < wordsarray.length; i++) {
                fill = containernumber[0]+wordsarray[i]+containernumber[1]
                fill = "(" + fill.slice(0,3) + ")-" + fill.slice(3,6) + "-" + fill.slice(6,11)
                document.getElementById('outputbox').innerHTML += `<p style="top: ${Math.floor(offset/4)*10}%; left: ${(offset%4)*25}%; font-size:20px;">${wordsarray[i]}</p>`
                document.getElementById('outputbox').innerHTML += `<p style="top: ${(Math.floor(offset/4)*10)+4}%; left: ${(offset%4)*25}%";>${fill}</p>`
                offset += 1
            }
        }
        if(q >= wordlist.length) {
            run = false
            document.getElementById('startbutton').innerHTML = "Find Words"
        } else {
            q++
        }
    }
}

function validate(field, type, max="", min="") {
    if(type == 0) {
        regex = RegExp('[^A-Z,a-z]')
        field.value = field.value.replace(regex, '')
        if(max != "") {
            field.value = field.value.slice(0,max)
        }
    } else if (type == 1) {
        regex2 = RegExp('[^0-9]')
        field.value = field.value.replace(regex2, '')
        if(max != "") {
            if (field.value > max) {field.value = max}
        }
        if(min != "") {
            if ((field.value < min) && (field.value != "")) {field.value = min}
        }
    }
}

setInterval(findEngine, 1);