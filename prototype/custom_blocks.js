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
  init: function() {
    this.appendDummyInput()
        .appendField("Budget");
    this.setOutput(true, "Number");
    this.setColour(290);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['budget'] = function(block) {
  var totalIncome = 0;
  var totalExpenses = 0;
  var totalSavings = 0;

  // Iterate over connected blocks and sum values based on their types
  var connectedBlocks = block.getChildren();
  connectedBlocks.forEach(function(childBlock) {
    var type = childBlock.type;
    var value = Blockly.JavaScript.valueToCode(childBlock, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';

    if (type === 'income_source') {
      totalIncome += Number(value);
    } else if (type === 'expense') {
      totalExpenses += Number(value);
    } else if (type === 'savings') {
      totalSavings += Number(value);
    }
  });

  var budget = '(' + totalIncome + ' - ' + totalExpenses + ' - ' + totalSavings + ')';
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
