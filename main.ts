let Input_value = ""
let A = ""
let B = ""
let C = ""
let D = ""
let E = ""
let F = ""
let G = ""
let H = ""
let i = ""
let j = ""
let k = ""
let L = ""
let M = ""
let N = ""
let O = ""
let P = ""
let Q = ""
let R = ""
let S = ""
let T = ""
let U = ""
let V = ""
let W = ""
let X = ""
let Y = ""
let Z = ""
input.onButtonPressed(Button.A, function () {
    Input_value = "" + Input_value + "0"
})
input.onButtonPressed(Button.AB, function () {
    images.createBigImage(`
        . # # . . # # # . #
        # . . # . # . . . #
        # . # . . # # . . #
        # # # . . # . . . .
        # . . # . # # # . #
        `).scrollImage(1, 200)
    images.createBigImage(`
        # # . # # # . # # #
        . . . # . . . . # .
        # # . # # . . . # .
        . # . # . . . . # .
        # # . # # # . . # .
        `).scrollImage(1, 300)
    images.createBigImage(`
        . . . . . # . . . #
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . # . . . #
        `).scrollImage(1, 200)
})
input.onButtonPressed(Button.B, function () {
    Input_value = "" + Input_value + "1"
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (Input_value == "1" + "1" + "0" + "0") {
        A = "A"
        basic.showString(A)
    } else if (Input_value == "0" + "1" + "1" + "0" + "0" + "1" + "1") {
        B = "B"
        basic.showString(B)
    } else if (Input_value == "1" + "0" + "0" + "1" + "1") {
        C = "C"
        basic.showString(C)
    } else if (Input_value == "1" + "1" + "0" + "1") {
        D = "D"
        basic.showString(D)
    } else if (Input_value == "1" + "1" + "1") {
        E = "E"
        basic.showString(E)
    } else if (Input_value == "0" + "1" + "1" + "0" + "1" + "1") {
        F = "F"
        basic.showString(F)
    } else if (Input_value == "0" + "1" + "1" + "0" + "1" + "0") {
        G = "G"
        basic.showString(G)
    } else if (Input_value == "1" + "0" + "1" + "0") {
        H = "H"
        basic.showString(H)
    } else if (Input_value == "1" + "0" + "1" + "1") {
        i = "i"
        basic.showString(i)
    } else if (Input_value == "0" + "1" + "0" + "0" + "0" + "0" + "1" + "1" + "0" + "0") {
        j = "j"
        basic.showString(j)
    } else if (Input_value == "0" + "1" + "0" + "0" + "0" + "0" + "1" + "0") {
        k = "k"
        basic.showString(k)
    } else if (Input_value == "1" + "0" + "0" + "0") {
        L = "L"
        basic.showString(L)
    } else if (Input_value == "1" + "0" + "0" + "1" + "0") {
        M = "M"
        basic.showString(M)
    } else if (Input_value == "0" + "1" + "0" + "1") {
        N = "N"
        basic.showString(N)
    } else if (Input_value == "0" + "0" + "0" + "1") {
        O = "O"
        basic.showString(O)
    } else if (Input_value == "0" + "1" + "1" + "0" + "0" + "0") {
        P = "P"
        basic.showString(P)
    } else if (Input_value == "0" + "1" + "0" + "0" + "0" + "0" + "1" + "1" + "0" + "1" + "1") {
        Q = "Q"
        basic.showString(Q)
    } else if (Input_value == "0" + "1" + "1" + "1") {
        R = "R"
        basic.showString(R)
    } else if (Input_value == "0" + "0" + "0" + "0") {
        S = "S"
        basic.showString(S)
    } else if (Input_value == "0" + "0" + "1") {
        T = "T"
        basic.showString(T)
    } else if (Input_value == "0" + "1" + "0" + "0" + "1") {
        U = "U"
        basic.showString(U)
    } else if (Input_value == "0" + "1" + "1" + "0" + "0" + "1" + "0") {
        V = "V"
        basic.showString(V)
    } else if (Input_value == "0" + "1" + "0" + "0" + "0" + "1") {
        W = "W"
        basic.showString(W)
    } else if (Input_value == "0" + "1" + "0" + "0" + "0" + "0" + "1" + "1" + "1") {
        X = "X"
        basic.showString(X)
    } else if (Input_value == "0" + "1" + "0" + "0" + "0" + "0" + "0") {
        Y = "Y"
        basic.showString(Y)
    } else if (Input_value == "0" + "1" + "0" + "0" + "0" + "0" + "1" + "1" + "0" + "1" + "0") {
        Z = "Z"
        basic.showString(Z)
    } else {
        images.createImage(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `).showImage(0)
    }
})
