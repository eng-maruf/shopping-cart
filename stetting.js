// aita hocce case ar pricing and case contiti update area**************
let updateunitePrice = 0; 
let updateunitePriceCase= 0;



document.getElementById('decrement-case').addEventListener('click',function(){
    manageCaseContiti(false);
});
document.getElementById('increment-case').addEventListener('click',function(){
    manageCaseContiti(true);
});
function manageCaseContiti(inputValue){
    
    const increseItem = document.getElementById('contiti-case');
    const itemUpdate = parseInt(increseItem.value);
    let totalItem = itemUpdate   
    if (inputValue == true){
        totalItem = itemUpdate + 1;    
    }
    else if(inputValue == false && itemUpdate>0){
        totalItem = itemUpdate - 1;
    }
    increseItem.value=totalItem;
    updateunitePriceCase= totalItem * 59;
    document.getElementById('case-price').innerText=updateunitePriceCase;
    updateTotalCost();
    return updateunitePriceCase;
};


// aita hocce iphone ar pricing and case contiti update area**************


document.getElementById('decrement-iphone').addEventListener('click',function(){
    manageIphoneContiti(false);
});
document.getElementById('increment-iphone').addEventListener('click',function(){
    manageIphoneContiti(true);
});
function manageIphoneContiti(inputValue){
    
    const increseItem = document.getElementById('contiti-iphone');
    const itemUpdate = parseInt(increseItem.value);
    let totalItem = itemUpdate   
    if (inputValue == true){
        totalItem = itemUpdate + 1;    
    }
    else if(inputValue == false && itemUpdate>0){
        totalItem = itemUpdate - 1;
    }
    increseItem.value=totalItem;
    updateunitePrice= totalItem * 1219;
    document.getElementById('iphone-price').innerText=updateunitePrice;
    updateTotalCost();
    return updateunitePrice;
};


// total pricing area

function updateTotalCost() {
    let totalCost = updateunitePrice + updateunitePriceCase;
    console.log(totalCost);

    document.getElementById('Subtotalprice').innerText = totalCost;
    document.getElementById('totalprice').innerText = totalCost;
    
}