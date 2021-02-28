function convertToRoman(num) {
    let out = "";

    while (num > 0){
        if (num >= 1000) {
            out += "M"; num -= 1000; continue;
        }
        if (num >= 900) {
            out += "CM"; num -= 900; continue;
        }
        if (num >= 500) {
            out += "D"; num -= 500; continue;
        }
        if (num>=400) {
            out += "CD"; num -=400;continue
        }
        if (num >= 100) {
            out += "C"; num -= 100; continue;
        }
        if(num>=90){
            out+="XC";num-=90;continue
        }
        if (num >= 50) {
            out += "L"; num -= 50; continue;
        }
        if (num >= 40) {
            out += "XL"; num -= 40; continue;
        }
        if (num >= 10) {
            out += "X"; num -= 10; continue;
        }
        if(num>=9){out+="IX";num-=9;continue;}
        if (num >= 5) {
            out += "V"; num -= 5; continue;
        }
        if (num >= 4) {
            out += "IV"; num -= 4; continue;
        }
        if (num >= 1) {
            out += "I"; num -= 1; continue;
        }
    }
 return out;
}

console.log(convertToRoman(2014))
