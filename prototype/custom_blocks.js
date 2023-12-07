// Updated Income Source Block
Blockly.Blocks['income_source'] = {
  init: function() {
    var dropdownOptions = [
      ["Wages", "WAGES"],
      ["Investments", "INVESTMENTS"],
      ["Gifts", "GIFTS"],
      ["Other", "OTHER"]
    ];

    this.appendDummyInput()
        .appendField("Income")
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "SOURCE")
        .appendField("Amount");

    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['income_source'] = function(block) {
  var source = block.getFieldValue('SOURCE');
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return ['addIncome("' + source + '", ' + amount + ');\n', Blockly.JavaScript.ORDER_ATOMIC];
};

// Updated Expense Block
Blockly.Blocks['expense'] = {
  init: function() {
    var dropdownOptions = [
      ["Rent", "RENT"],
      ["Utilities", "UTILITIES"],
      ["Phone Plan", "PHONE_PLAN"],
      ["Car Payment", "CAR_PAYMENT"],
      ["Subscriptions", "SUBSCRIPTIONS"],
      ["Debt", "DEBT"],
      ["Grocery", "GROCERY"],
      ["Spending", "SPENDING"],
      ["Other", "OTHER"]
    ];

    this.appendDummyInput()
        .appendField("Expense")
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "CATEGORY")
        .appendField("Amount");

    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['expense'] = function(block) {
  var category = block.getFieldValue('CATEGORY');
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return ['addExpense("' + category + '", ' + amount + ');\n', Blockly.JavaScript.ORDER_ATOMIC];
};

// Updated Savings Block
Blockly.Blocks['savings'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Savings")
        .appendField("Amount");

    this.setOutput(true, "Number");
    this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['savings'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  return ['addSavings(' + amount + ');\n', Blockly.JavaScript.ORDER_ATOMIC];
};

// Updated Budget Block
Blockly.Blocks['budget'] = {
  init: function () {
    this.appendValueInput("INCOMES")
        .setCheck(null)
        .appendField("Budget - Incomes");

    this.appendValueInput("EXPENSES")
        .setCheck(null)
        .appendField("Expenses");

    this.appendValueInput("SAVINGS")
        .setCheck(null)
        .appendField("Savings");

    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['budget'] = function (block) {
  var incomeCode = Blockly.JavaScript.valueToCode(block, 'INCOMES', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var expensesCode = Blockly.JavaScript.valueToCode(block, 'EXPENSES', Blockly.JavaScript.ORDER_ATOMIC) || '0';
  var savingsCode = Blockly.JavaScript.valueToCode(block, 'SAVINGS', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  return 'calculateBudget(' + incomeCode + ', ' + expensesCode + ', ' + savingsCode + ');\n';
};

// Supporting Functions with UI Updates
let totalIncome = 0;
let totalExpenses = 0;
let totalSavings = 0;

function addIncome(source, amount) {
  totalIncome += amount;
  updateIncomeDisplay(); // Update the income display on the UI
}

function addExpense(category, amount) {
  totalExpenses += amount;
  updateExpenseDisplay(); // Update the expense display on the UI
}

function addSavings(amount) {
  totalSavings += amount;
  updateSavingsDisplay(); // Update the savings display on the UI
}

function calculateBudget(incomesCode, expensesCode, savingsCode) {
  // Calculate total income
  eval(incomesCode);

  // Calculate total expenses
  eval(expensesCode);

  // Calculate total savings
  eval(savingsCode);

  let netBudget = totalIncome - totalExpenses - totalSavings;
  updateBudgetDisplay(netBudget); // Update the budget display on the UI
}

// Additional UI Update Functions
function updateIncomeDisplay() {
  document.getElementById('incomeDisplay').textContent = `Total Income: ${totalIncome}`;
}

function updateExpenseDisplay() {
  document.getElementById('expenseDisplay').textContent = `Total Expenses: ${totalExpenses}`;
}

function updateSavingsDisplay() {
  document.getElementById('savingsDisplay').textContent = `Total Savings: ${totalSavings}`;
}

function updateBudgetDisplay(netBudget) {
  document.getElementById('budgetDisplay').textContent = `Net Budget: ${netBudget}`;
}

