function findWords() {
    wordlist = []
    letters = {
        1: 1,
        2: ["a","b","c"],
        3: ["d","e","f"],
        4: ["g","h","i"],
        5: ["j","k","l"],
        6: ["m","n","o"],
        7: ["p","q","r"],
        8: ["s","t","u"],
        9: ["v","x","y","z"],
        0: 1,
    }
    lengths = {
        1:1,
        2:3,
        3:3,
        4:3,
        5:3,
        6:3,
        7:3,
        8:3,
        9:3,
        0:1,
    }

    phonenumber = `${document.getElementById("box1").value}${document.getElementById("box2").value}${document.getElementById("box3").value}`
    document.getElementById("texthere").value += phonenumber

    
}