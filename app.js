    //BUDGET CONTROLLER
 BudgetController = (function(){

  
 })();

    //UI CONTROLLER
 var UIController = (function(){

        var DOMstrings = {
            inputType: '.add__type',
            inputDesc: '.add__description',
            inputValue: '.add__value',
            inputBtn: '.add__btn'
        };
    return{
        getInput: function(){
            return{
                type: document.querySelector(DOMstrings.inputType).value, //will be eithre inc or exp
                description: document.querySelector(DOMstrings.inputDesc).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
            
        }, 
        getDOMstrings: function(){
            return DOMstrings;
        }
    };
 })();

    //GLOABAL APP CONTROLLER
 var controller = (function(budgetctrl,UIctrl){
    
    var DOM = UIctrl.getDOMstrings();
    var ctrlAddItem = function (){

        // Get input data
            var input = UIctrl.getInput();
            console.log(input);
        //Add the item to the budget controller

        //Add the new item to the UI

        //Calculate the budget

        //Display the budget on the UI
         
    }


    document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress',function(event){
        if (event.keycode === 13 || event.which === 13){
            ctrlAddItem();
        }
        else{
        //
        }
    });
    

 })(BudgetController,UIController);