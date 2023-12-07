// Income Source Block
Blockly.Blocks['income_source'] = {
  init: function() {
    // Define the dropdown options
    var dropdownOptions = [
      ["Wages", "WAGES"],
      ["Investments", "INVESTMENTS"],
      ["Gifts", "GIFTS"],
      ["Other", "OTHER"]
    ];

    // Add the dropdown field to the block
    this.appendDummyInput()
        .appendField("Income")
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "SOURCE")
        .appendField("Amount")
        .appendField(new Blockly.FieldNumber(0, 0), "AMOUNT");

    // Add the value input for the amount
    this.appendValueInput("AMOUNT")
        .setCheck("Number");

    // Set the block output to a number
    this.setOutput(true, "Number");

    // Set the block color
    this.setColour(230);

    // Set tooltip and help URL if needed
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['income_source'] = function(block) {
  // Get the selected source from the dropdown
  var source = block.getFieldValue('SOURCE');
  
  // Get the amount value
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';

  // Generate JavaScript code using the selected source
  return ['addIncome("' + source + '", ' + amount + ');\n', Blockly.JavaScript.ORDER_ATOMIC];
};

// Expense Block
Blockly.Blocks['expense'] = {
  init: function() {
    // Define the dropdown options
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

    // Add the dropdown field to the block
    this.appendDummyInput()
        .appendField("Expense")
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "CATEGORY")
        .appendField("Amount")
        .appendField(new Blockly.FieldNumber(0, 0), "AMOUNT");
    
    // Add the value input for the amount
    this.appendValueInput("AMOUNT")
        .setCheck("Number");

    // Set the block output to a number
    this.setOutput(true, "Number");

    this.setColour(0);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['expense'] = function(block) {
  var category = block.getFieldValue('CATEGORY');
  var amount = Number(block.getFieldValue('AMOUNT'));
  return 'addExpense("' + category + '", ' + amount + ');\n';
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
    init: function () {
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
    },
    mutationToDom: function () {
        var container = document.createElement('mutation');
        var inputCount = this.inputList.length - 3; // Subtract the initial three inputs
        container.setAttribute('inputs', inputCount);
        return container;
    },
    domToMutation: function (xmlElement) {
        var inputCount = parseInt(xmlElement.getAttribute('inputs'), 10);
        for (var i = 0; i < inputCount; i++) {
            this.appendValueInput('AMOUNT' + i)
                .setCheck("Number")
                .appendField("Amount");
        }
    },
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('budget_container');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;

        for (var i = 3; i < this.inputList.length; i++) {
            var inputBlock = workspace.newBlock('budget_amount');
            inputBlock.initSvg();
            connection.connect(inputBlock.previousConnection);
            connection = inputBlock.nextConnection;
        }

        return containerBlock;
    }
};

Blockly.JavaScript['budget'] = function (block) {
    // Get the values from the "Amount" fields in the connected "income" and "expense" blocks
    var income = block.getFieldValue('INCOME') || '0';
    var expenses = block.getFieldValue('EXPENSES') || '0';

    // Get the value from the connected "savings" block
    var savingsBlock = block.getInputTargetBlock('SAVINGS');
    var savings = Blockly.JavaScript.valueToCode(savingsBlock, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';

    // Create the budget formula
    var budget = '(' + income + ' - ' + expenses + ' - ' + savings + ')';
    return [budget, Blockly.JavaScript.ORDER_ATOMIC];
};


// Container for dynamic input blocks
Blockly.Blocks['budget_container'] = {
    init: function () {
        this.setColour(290);
        this.appendDummyInput()
            .appendField("Budget - Income");
        this.appendStatementInput('STACK');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

// Dynamic input block for amounts
Blockly.Blocks['budget_amount'] = {
    init: function () {
        this.setColour(290);
        this.appendDummyInput()
            .appendField("Amount")
            .appendField(new Blockly.FieldNumber(0, 0), "AMOUNT");
        this.setOutput(true, 'Number');
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['budget_amount'] = function (block) {
    var amount = block.getFieldValue('AMOUNT');
    return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Example functions (replace with your actual functions)
function addIncome(source, amount) {
  amount = Number(amount); // Ensure it's treated as a number
  console.log('Adding income:', source, amount);
  // Your logic for adding income...
}

function addExpense(category, amount) {
  amount = Number(amount); // Ensure it's treated as a number
  console.log('Adding expense:', category, amount);
  // Your logic for adding expense...
}

function addSavings(amount) {
  amount = Number(amount); // Ensure it's treated as a number
  console.log('Adding savings:', amount);
  // Your logic for adding savings...
}

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
