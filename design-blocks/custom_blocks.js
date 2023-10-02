Blockly.Blocks['income_source'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Income Source");
    this.appendValueInput("INCOME_AMOUNT")
        .setCheck(["Number", "var", "exp"])
        .appendField("Amount");
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['expense'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Expense");
    this.appendValueInput("EXPENSE_AMOUNT")
        .setCheck(["Number", "var", "exp"])
        .appendField("Amount");
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['savings'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Savings");
    this.appendValueInput("SAVINGS_AMOUNT")
        .setCheck(["Number", "var", "exp"])
        .appendField("Amount");
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(120);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.Blocks['budget'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Budget");
    this.appendValueInput("INCOME")
        .setCheck("exp")
        .appendField("Income");
    this.appendValueInput("EXPENSES")
        .setCheck("exp")
        .appendField("Expenses");
    this.appendValueInput("SAVINGS")
        .setCheck("exp")
        .appendField("Savings");
    this.setInputsInline(true);
    this.setOutput(true, "exp");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

