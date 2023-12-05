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
// Blockly.Blocks['input_number'] = {
//   init: function() {
//     this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
//     this.setColour(Blockly.Msg.MATH_HUE);
//     this.appendDummyInput()
//         .appendField(new Blockly.FieldNumber(0), 'NUM');
//     this.setOutput(true, 'Number');
//     this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
//   }
// };

Blockly.JavaScript['input_number'] = function(block) {
  var number = block.getFieldValue('NUM');
  if (number < 0) {
    console.error("Error: Negative value not allowed"); // Print an error message to the console
    // Return an error value or use NaN if you prefer
    return ["Error", Blockly.JavaScript.ORDER_ATOMIC];
  }
  return [number, Blockly.JavaScript.ORDER_ATOMIC];
};
/*  
// Added functionality for 'Goal Months' block 
// This block calculates how many months it would take to reach a certain amount in Savings given 
// how much you are saving per month. 
Blockly.Blocks['goal_months'] = {
  init: function() {
    this.appendValueInput("SAVINGS_PER_MONTH")
        .setCheck("Number")
        .appendField("Savings per month");
    this.appendValueInput("GOAL_AMOUNT")
        .setCheck("Number")
        .appendField("Goal savings amount");
    this.setOutput(true, "Number");
    this.setColour(160);
    this.setTooltip("Calculates the months to reach the goal savings amount.");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['goal_months'] = function(block) {
  var savingsPerMonth = Blockly.JavaScript.valueToCode(block, 'SAVINGS_PER_MONTH', Blockly.JavaScript.ORDER_NONE);
  var goalAmount = Blockly.JavaScript.valueToCode(block, 'GOAL_AMOUNT', Blockly.JavaScript.ORDER_NONE);
  if (savingsPerMonth === '0') {
    return ['"Cannot calculate months with zero savings per month"', Blockly.JavaScript.ORDER_ATOMIC];
  } else {
    var code = '(' + goalAmount + ' / ' + savingsPerMonth + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
  }
};*/
