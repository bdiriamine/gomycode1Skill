var nbrBaskets = 0;
var nbrSocks = 0;
var nbrBag = 0;
var totalPrice = 0;

function addPn(e){
console.log("addPn" + e)
switch (e) {
    case 'Baskets':
        nbrBaskets +=1;
        totalPrice= totalPrice + 100  ; 
        document.getElementById("total").innerHTML = totalPrice;
        console.log("numbre des baskets : "+nbrBaskets)
        document.getElementById("quantityBaskets").innerHTML = nbrBaskets;
       
      break;
    case 'Socks':
        nbrSocks +=1;
        console.log("numbre des Socks : "+nbrSocks) ;
        totalPrice= totalPrice + 20  ; 
        document.getElementById("total").innerHTML = totalPrice;
        document.getElementById("quantitySocks").innerHTML = nbrSocks;
        break;
    case 'Bag':
        nbrBag +=1;
        console.log("numbre des Bag : "+nbrSocks) ; 
        document.getElementById("quantityBag").innerHTML = nbrBag;
        totalPrice= totalPrice + 50  ; 
        document.getElementById("total").innerHTML = totalPrice;
      break;
    default:
      break;
  }

}
function alertmsg(msg){
    switch (msg) {
        case 'Baskets':
            nbrBaskets = 0 ; 
            
            break ;
        case 'Socks':
            nbrSocks = 0 ; 
            break ;
        case 'Bag':
            nbrBag = 0 ; 
            break ;
        default:
            break;
    }
        window.alert(" le nombre de quantite doit etre superrieur  ou égal a 0")
}
function removePn(e){

        switch (e) {
            case 'Baskets':
                nbrBaskets -=1;
                if(nbrBaskets< 0){
                    alertmsg('Baskets');
                }else{
                    totalPrice= totalPrice - 100  ; 
                    document.getElementById("total").innerHTML = totalPrice;
                    console.log("numbre des baskets : "+nbrBaskets)
                    document.getElementById("quantityBaskets").innerHTML = nbrBaskets;
                }
     
               
              break;
            case 'Socks':
                nbrSocks -=1;
                if(nbrSocks< 0){
                    alertmsg('Socks');
                }else{
                console.log("numbre des Socks : "+nbrSocks) ;
                totalPrice= totalPrice - 20  ; 
                document.getElementById("total").innerHTML = totalPrice;
                document.getElementById("quantitySocks").innerHTML = nbrSocks;
                }
                break;
            case 'Bag':
                nbrBag -=1;
                if(nbrBag< 0){
                    alertmsg('Bag');
                }else{
                console.log("numbre des Bag : "+nbrSocks) ; 
                document.getElementById("quantityBag").innerHTML = nbrBag;
                totalPrice= totalPrice - 50  ; 
                document.getElementById("total").innerHTML = totalPrice;
                }
              break;
            default:
              break;
          }
  
}
function heartcolor(msg){
    console.log(msg) ;
    switch (msg) {
        case 'Baskets':
            console.log(msg) ;
            document.getElementById("Baskets").style.color = 'red';
            break;
        case 'Socks':
            document.getElementById("Socks").style.color = 'red';
            break;
        case 'Bag':
            document.getElementById("Bag").style.color = 'red';
            break;
        default:
            break;
    }
    
}
function removeCd(msg){
    console.log(msg) ;
    switch (msg) {
        case 'Baskets':
            console.log(msg) ;
            var dom=  document.getElementById("first");
            dom.parentNode.removeChild(dom);
            totalPrice= totalPrice - (nbrBaskets * 100);
            document.getElementById("total").innerHTML = totalPrice;
            break;
        case 'Socks':
            var dom=  document.getElementById("second");
            dom.parentNode.removeChild(dom);
            totalPrice= totalPrice - (nbrSocks * 20);
            document.getElementById("total").innerHTML = totalPrice;
            break;
        case 'Bag':
            var dom=  document.getElementById("third")
            dom.parentNode.removeChild(dom);
            totalPrice= totalPrice - (nbrBag * 50);
            document.getElementById("total").innerHTML = totalPrice;
            break;
        default:
            break;
    }
    
}