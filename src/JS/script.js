let words = "";
function greater20(x) {
    switch (x) {
        case 2:
            return "twenty ";
        case 3:
            return "thirty ";
        case 4:
            return "forty ";
        case 5:
            return "fifty ";
        case 6:
            return "sixty ";
        case 7:
            return "seventy ";
        case 8:
            return "eighty ";
        case 9:
            return "ninty ";
    }
}

function less20(x) {
    switch (x) {
        case 0:
            return ""
        case 1:
            return "one ";
        case 2:
            return "two";
        case 3:
            return "three";
        case 4:
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7:
            return "seven";
        case 8:
            return "eight";
        case 9:
            return "nine";
        case 10:
            return "ten";
        case 11:
            return "eleven";
        case 12:
            return "tweleve";
        case 13:
            return "thirteen";
        case 14:
            return "fourteen";
        case 15:
            return "fifteen";
        case 16:
            return "sixteen";
        case 17:
            return "seventeen";
        case 18:
            return "eighteen";
        case 19:
            return "nineteen";
    }
}

function convert(n, text) {
    if (n > 0) {
        let ans = "";
        if (n >= 20) {
            console.log(n);
            console.log(n / 10);
            ans += greater20(Math.floor(n / 10)) + less20(n % 10);
        } else {
            ans += less20(n);
        }
        if (n > 0) {
            ans += text;
        }
        return ans;
    } else {
        return "";
    }
}

function fun() {
    let words = "";
    let a = document.getElementById("number").value;

    words += convert(Math.floor(a / 10000000), " crore ");
    words += convert(Math.floor((a / 100000) % 100), " lakhs ");
    words += convert(Math.floor((a / 1000) % 100), " thousand ");
    words += convert(Math.floor((a / 100) % 10), " hundred ");
    if (a > 100 && a % 100) {
        words += "and ";
    }
    words += convert(Math.floor(a % 100), " only");
    document.getElementById("msg").innerHTML = words;
}
