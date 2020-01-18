    //BUDGET CONTROLLER
 BudgetController = (function(){

  
 })();

    //UI CONTROLLER
 var UIController = (function(){


 })();

    //GLOABAL APP CONTROLLER
 var controller = (function(budgetctrl,UIctrl){
  
    var ctrlAddItem = function (){

        // Get input data

        //Add the item to the budget controller

        //Add the new item to the UI

        //Calculate the budget

        //Display the budget on the UI
        console.log('working');
    }


    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress',function(event){
        if (event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
        else{
        //
        }
    });
    

 })(BudgetController,UIController);