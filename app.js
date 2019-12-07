// Module Patterns
// 084
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
    
    var data = {
        allItems : {
            expense: [],
            income: []
        },
        totals : {
            expense: 0,
            income: 0
        }
    };
    
    return {
        addItem: function(type, des, val){
            var newItem, ID;
            
            // ID of new item should be one greater than size of array
            if (data.allItems[type].length > 0) {
                console.log('37');
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            }
            else {
                console.log('41');
               ID = 0; 
            }
             
            // Create new item based on 'inc' or 'exp'
            if (type === 'expense'){
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'income'){
                newItem = new Income(ID, des, val);
            }
            
            // Push into new data structure
            data.allItems[type].push(newItem);
            console.log('new item = ' + newItem);  
            
            // Returen the new element
            return newItem;
        },
        
        // For Testing, remove when finished
        testing: function(){
            console.log(data);
        }
    };
    
})();


// UI CONTROLLER
var UIController = (function() {
    
    var DOMStrings = {
        inputType : '.add__type',
        inputDescription : '.add__description',
        inputValue : '.add__value',
        inputBtn : '.add__btn',
        incomeContainer : '.income__list',
        expensesContainer : '.expenses__list'
    };
    
    return {
        getIntput: function() {
            return {
                type : document.querySelector(DOMStrings.inputType).value, // inc or exp
                desc : document.querySelector(DOMStrings.inputDescription).value,
                value : parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        
        addListItem: function(obj, type) {
            // 1. Create HTML string with placeholder text
            if (type === 'income'){
                element = DOMStrings.incomeContainer;
                
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else if (type === 'expense'){ //replace percentage 
                element = DOMStrings.expensesContainer;
                
                 html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // Replace placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);
            
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        
        clearFields: function() {
            var fieldsList, fieldsArray;
            fieldsList = document.querySelectorAll(DOMStrings.inputDescription + ', ' + DOMStrings.inputValue);
            
            // Use the slice function of the Array prototype
            fieldsArray = Array.prototype.slice.call(fieldsList);
            
            fieldsArray.forEach(function(current, index, array) {
                current.value = null;
            })
            
            // Set focus back to description field
            fieldsArray[0].focus();
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
        var input, newItem;
        
        // 1. Get the input field data
        input = UICtrl.getIntput();
        console.log(input);
        
        if (input.desc !== "" && !isNaN(input.value) && input.value > 0){
            
            // 2. Add item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.desc, input.value);

            // 3. Add the item to the UI
            UICtrl.addListItem(newItem, input.type);

            // 4. Clear input fields
            UICtrl.clearFields();

            // Calculate and update budget
            updateBudget();

            console.log('new item id = ' + newItem.id);
            console.log('new item desc = ' + newItem.description);
            console.log('new item value = ' + newItem.value);
            console.log('ctrlAddItem function was called');
        }
    };
    
    var updateBudget = function() {
        
        // 1. Calculate the budget
        console.log('upDateBudget called!');
        // 2. Display the budget
        
        // 3. Apply the above to hitting Enter
    };
    
    return {
        init: function(){
            console.log('Application has started!');
            setupEventListners();
        }
    };
    
})(budgetController, UIController);

controller.init();