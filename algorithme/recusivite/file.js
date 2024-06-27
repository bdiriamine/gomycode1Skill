function leapYear(year){
return year % 4==0  && year % 400==0 ? true : false
}
function ticketPrice(age){
    switch (true) {
        case age<=12 :
            return"$10"
        case age>12 && age<17 : 
            return "$15"
        case age > 18 :
            return "$20"
        default : 
            break ;
    }
}
function weatherClothingAdviser(temp ,rainy){
    switch (true) {
        case (temp>=25 && !rainy) :
            return "sunny weather ,summer time go to the beach and stay safe " 
        case(temp>=25 && rainy) : 
             return "be careful it's raining outside take umbrella "
        case(temp>=15 && temp<=25 && !rainy) : 
            return "cload weather "
        case(temp>=15 && temp<=25 && rainy) : 
            return "cload and rainy weather "
        case(temp<15 && !rainy) : 
            return "cload and windy weather ,be careful "
        case(temp<15 && rainy) : 
            return "stormy weather ,Stay home "
        default: 
        break;
    }
}

function Palindrome(str){
    if(str.length == 1) return true;
    if(str.length == 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return Palindrome(str.slice(1,-1))
    return false;
}
console.log(Palindrome('anna'))

function pui(n, p)
{
    if(p==0)return(1);

    return(pui(n, p-1)*n);

}

