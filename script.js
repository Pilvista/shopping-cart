function itemAddDeduct (id1,id2,id3){
    const ButtonFirst = document.getElementById(id1);
    ButtonFirst.addEventListener("click",function(){
    const inputOne = document.getElementById(id2).value;
    const inputOneNum = parseFloat(inputOne);
    const updatedUnit = inputOneNum + 1;
    document.getElementById(id2).value = updatedUnit;
    const itemOnePrice = document.getElementById(id3).innerText;
    const itemOnePriceNum = parseFloat(itemOnePrice);
        document.getElementById(id3).innerText = itemOnePriceNum * updatedUnit;
        //subtotal and total calculation
        document.getElementById("subtotal").innerText = itemOnePriceNum;
        document.getElementById("total").innerText = document.getElementById("subtotal").innerText ;

    });  
}
// Item Adding by clicking Plus Button
itemAddDeduct("plusButtonFirst", "inputOne", "itemOnePrice"); 
itemAddDeduct("plusButtonSecond", "inputTwo", "itemTwoPrice"); 
// Item Decreasing by clicking Minus Button
itemAddDeduct("minusButtonFirst", "inputOne", "itemOnePrice");
itemAddDeduct("minusButtonSecond", "inputTwo", "itemTwoPrice"); 


