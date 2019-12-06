// Module Patterns

// BUDGET CONTROLLER
var budgetController = (function() {
    
    var Expense = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var Income = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var allExpenses = [];
    var allExpenses = [];
    var totalExpenses = 0;
    
    var data = {
        allItems : {
            exp: [],
            inc: []
        },
        totals : {
            exp: 0,
            inc: 0
        }
    }
    
})();


// UI CONTROLLER
var UIController = (function() {
    
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn'
    };
    
    return {
        getIntput: function() {
            return {
                type : document.querySelector(DOMStrings.inputType).value, // inc or exp
                desc : document.querySelector(DOMStrings.inputDescription).value,
                value : document.querySelector(DOMStrings.inputValue).value
            };
        },
        
        getDOMStrings: function() {
            return DOMStrings;
        }
    };
    
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListners = function(){
        var DOM = UICtrl.getDOMStrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function(event) {
        // 'Enter' = keycode 13
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
    }
    
    
    
    var ctrlAddItem = function(){
        // 1. Get the input field data
        var input = UICtrl.getIntput();
        console.log(input);
        
        // 2. Add item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget
        
        // 6. Apply the above to hitting Enter
        console.log('ctrlAddItem function was called');
    };
    
   /* document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
       // console.log(event);
        // 'Enter' = keycode 13
        if (event.keyCode === 13 || event.which === 13){
          //  console.log('you pressed Enter');
            
            ctrlAddItem();
        }
        else {
           // console.log('you pressed something else');
        }
    })*/
    
    return {
        init: function(){
            console.log('Application has started!');
            setupEventListners();
        }
    };
    
})(budgetController, UIController);

controller.init();