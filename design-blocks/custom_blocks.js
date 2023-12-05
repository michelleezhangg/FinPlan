// Define the 'income_block'
Blockly.Blocks['income_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Income Source:")
        .appendField(new Blockly.FieldTextInput("Salary"), "SOURCE")
        .appendField("Amount:")
        .appendField(new Blockly.FieldNumber(1000, 0), "AMOUNT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// Define the 'expense_block'
Blockly.Blocks['expense_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Expense Category:")
        .appendField(new Blockly.FieldTextInput("Rent"), "CATEGORY")
        .appendField("Amount:")
        .appendField(new Blockly.FieldNumber(500, 0), "AMOUNT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

// Define the 'budget_calculator_block'
Blockly.Blocks['budget_calculator_block'] = {
  init: function() {
    this.appendStatementInput("INCOME")
        .setCheck(null)
        .appendField("Income");
    this.appendStatementInput("EXPENSES")
        .setCheck(null)
        .appendField("Expenses");
    this.setColour(60);
    this.setTooltip("Calculate your budget by subtracting expenses from income.");
  }
};

// Define the JavaScript generator for 'income_block'
Blockly.JavaScript['income_block'] = function(block) {
  var source = block.getFieldValue('SOURCE');
  var amount = Number(block.getFieldValue('AMOUNT'));
  return 'addIncome("' + source + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'expense_block'
Blockly.JavaScript['expense_block'] = function(block) {
  var category = block.getFieldValue('CATEGORY');
  var amount = Number(block.getFieldValue('AMOUNT'));
  return 'addExpense("' + category + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'budget_calculator_block'
Blockly.JavaScript['budget_calculator_block'] = function(block) {
  var incomeCode = Blockly.JavaScript.statementToCode(block, 'INCOME');
  var expenseCode = Blockly.JavaScript.statementToCode(block, 'EXPENSES');
  return 'calculateBudget();\n';
};

// Supporting Functions
let totalIncome = 0;
let totalExpenses = 0;

function addIncome(source, amount) {
  totalIncome += amount;
  // Additional logic for handling income
}

function addExpense(category, amount) {
  totalExpenses += amount;
  // Additional logic for handling expenses
}

function calculateBudget() {
  let netBudget = totalIncome - totalExpenses;
  console.log("Net Budget: ", netBudget);
  // Additional UI update logic
}

// Supporting Functions with UI Updates
let totalIncome = 0;
let totalExpenses = 0;

function addIncome(source, amount) {
  totalIncome += amount;
  updateIncomeDisplay(); // Update the income display on the UI
}

function addExpense(category, amount) {
  totalExpenses += amount;
  updateExpenseDisplay(); // Update the expense display on the UI
}

function calculateBudget() {
  let netBudget = totalIncome - totalExpenses;
  updateBudgetDisplay(netBudget); // Update the budget display on the UI
}

// Additional UI Update Functions
function updateIncomeDisplay() {
  document.getElementById('incomeDisplay').textContent = `Total Income: ${totalIncome}`;
}

function updateExpenseDisplay() {
  document.getElementById('expenseDisplay').textContent = `Total Expenses: ${totalExpenses}`;
}

function updateBudgetDisplay(netBudget) {
  document.getElementById('budgetDisplay').textContent = `Net Budget: ${netBudget}`;
}


/*
// Income Source Block
Blockly.Blocks['income_source'] = {
  init: function() {
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Income Source");
    this.setOutput(true, "Number");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['income_source'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Expense Block
Blockly.Blocks['expense'] = {
  init: function() {
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Expense");
    this.setOutput(true, "Number");
    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['expense'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Savings Block
Blockly.Blocks['savings'] = {
  init: function() {
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Savings");
    this.setOutput(true, "Number");
    this.setColour(110);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['savings'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Budget Block
Blockly.Blocks['budget'] = {
  init: function() {
    this.appendValueInput("INCOME")
        .setCheck("Number")
        .appendField("Budget - Income");
    this.appendValueInput("EXPENSES")
        .setCheck("Number")
        .appendField("Expenses");
    this.appendValueInput("SAVINGS")
        .setCheck("Number")
        .appendField("Savings");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['budget'] = function(block) {
  var income = Blockly.JavaScript.valueToCode(block, 'INCOME', Blockly.JavaScript.ORDER_NONE);
  var expenses = Blockly.JavaScript.valueToCode(block, 'EXPENSES', Blockly.JavaScript.ORDER_NONE);
  var savings = Blockly.JavaScript.valueToCode(block, 'SAVINGS', Blockly.JavaScript.ORDER_NONE);
  var budget = '(' + income + ' - ' + expenses + ' - ' + savings + ')';
  return [budget, Blockly.JavaScript.ORDER_ATOMIC];
};

// Input Number Block
Blockly.Blocks['input_number'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg.MATH_HUE);
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(0), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.JavaScript['input_number'] = function(block) {
  var number = block.getFieldValue('NUM');
  return [number, Blockly.JavaScript.ORDER_ATOMIC];
};
*/
