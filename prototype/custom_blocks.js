// Income Source Block
Blockly.Blocks['income_source'] = {
    init: function () {
        var dropdownOptions = [
            ["Wages", "WAGES"],
            ["Investments", "INVESTMENTS"],
            ["Gifts", "GIFTS"],
            ["Other", "OTHER"]
        ];

        this.appendDummyInput()
            .appendField("Income")
            .appendField(new Blockly.FieldDropdown(dropdownOptions), "SOURCE")
            .appendField("Amount")
            .appendField(new Blockly.FieldNumber(0, 0), "AMOUNT");

        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['income_source'] = function (block) {
    var source = block.getFieldValue('SOURCE');
    var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return ['addIncome("' + source + '", ' + amount + ');\n', Blockly.JavaScript.ORDER_ATOMIC];
};

// Expense Block
Blockly.Blocks['expense'] = {
    init: function () {
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
            .appendField("Amount")
            .appendField(new Blockly.FieldNumber(0, 0), "AMOUNT");

        this.setOutput(true, "Number");
        this.setColour(0);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['expense'] = function (block) {
    var category = block.getFieldValue('CATEGORY');
    var amount = Number(block.getFieldValue('AMOUNT'));
    return 'addExpense("' + category + '", ' + amount + ');\n';
};

// Savings Block
Blockly.Blocks['savings'] = {
    init: function () {
        this.appendValueInput("AMOUNT")
            .setCheck("Number")
            .appendField("Savings");

        this.setOutput(true, "Number");
        this.setColour(110);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['savings'] = function (block) {
    var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
    return [amount, Blockly.JavaScript.ORDER_ATOMIC];
};

// Budget Container Block
Blockly.Blocks['budget_container'] = {
    init: function () {
        this.setColour(290);
        this.appendDummyInput()
            .appendField("Budget - Income");
        this.appendStatementInput('STACK')
            .setCheck("budget_amount");
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

// Budget Block
Blockly.Blocks['budget'] = {
    init: function () {
        this.appendValueInput("INCOME")
            .setCheck("budget_container")
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

Blockly.JavaScript['budget'] = function (block) {
    var income = processStatements(block, 'INCOME');
    var expenses = Blockly.JavaScript.valueToCode(block, 'EXPENSES', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    var savings = Blockly.JavaScript.valueToCode(block, 'SAVINGS', Blockly.JavaScript.ORDER_ATOMIC) || '0';

    var budget = '(' + income + ' - ' + expenses + ' - ' + savings + ')';
    return [budget, Blockly.JavaScript.ORDER_ATOMIC];
};

function processStatements(block, inputName) {
    var statements = Blockly.JavaScript.statementToCode(block, inputName);
    var code = '';

    // Iterate over connected blocks and sum values based on their types
    var blocks = statements.split('\n');
    blocks.forEach(function (value) {
        if (value.trim() !== '') {
            code += value + ' + ';
        }
    });

    // Remove the trailing ' + ' and return the code
    return code.replace(/ \+ $/, '');
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
