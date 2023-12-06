
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
        .appendField("Income Source")
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "SOURCE");

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
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);

  // Generate JavaScript code using the selected source
  return ['addIncome("' + source + '", ' + amount + ');\n', Blockly.JavaScript.ORDER_ATOMIC];
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
