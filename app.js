 BudgetController = (function(){

    var x=23;
    var add = function(a){
        return x+a;

    }
    return{
        publicTest: function(b){
            return (add(b))
        }
    }

 })();

 var UIController = (function(){


 })();

 var controller = (function(budgetctrl,UIctrl){
    var z=budgetctrl.publicTest(5);

    return {
        anotherPublic: function(){
            console.log(z);
        }
    }
    

 })(BudgetController,UIController);