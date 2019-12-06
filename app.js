// Module Patterns

// BUDGET CONTROLLER
var budgetController = (function() {
    
    // Add code
    
    return {
        publicTest: function(b) {
            return add(b);
        }
    }
    
})();


// UI CONTROLLER
var UIController = (function() {
    
    // Add code
    
})();


// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
    
    var ctrlAddItem = function(){
        // 1. Get the input field data
        
        // 2. Add item to the budget controller
        
        // 3. Add the item to the UI
        
        // 4. Calculate the budget
        
        // 5. Display the budget
        
        // 6. Apply the above to hitting Enter
        console.log('ctrlAddItem function was called');
    }
    
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
    
    document.addEventListener('keypress', function(event) {
        console.log(event);
        // 'Enter' = keycode 13
        if (event.keyCode === 13 || event.which === 13){
            console.log('you pressed Enter');
            
            ctrlAddItem();
        }
        else {
            console.log('you pressed something else');
        }
    })
    
})(budgetController, UIController);