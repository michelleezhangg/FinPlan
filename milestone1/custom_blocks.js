
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

// Placeholder for exchange rates (replace with actual rates)
const exchangeRates = {
  USD_TO_EUR: 0.93,
  USD_TO_GBP: 0.75,
  EUR_TO_USD: 1.08,
  EUR_TO_GBP: 0.86,
  GBP_TO_USD: 1.26,
  GBP_TO_EUR: 1.16
};

// Currency Conversion Block
Blockly.Blocks['currency_conversion'] = {
  init: function() {
    var dropdownOptions = [
      ["USD to EUR", "USD_TO_EUR"],
      ["USD to GBP", "USD_TO_GBP"],
      ["EUR to USD", "EUR_TO_USD"],
      ["EUR to GBP", "EUR_TO_GBP"],
      ["GBP to USD", "GBP_TO_USD"],
      ["GBP to EUR", "GBP_TO_EUR"]
    ];

    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Convert");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "CONVERSION");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

Blockly.JavaScript['currency_conversion'] = function(block) {
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  var conversionType = block.getFieldValue('CONVERSION');
  return ['convertCurrency(' + amount + ', "' + conversionType + '");\n', Blockly.JavaScript.ORDER_ATOMIC];
};

// Conversion Function (replace with actual conversion logic)
function convertCurrency(amount, conversionType) {
  // Check if the conversion type is valid
  if (!(conversionType in exchangeRates)) {
    console.error('Invalid conversion type:', conversionType);
    return null;
  }

  // Get the exchange rate
  var exchangeRate = exchangeRates[conversionType];

  // Perform the currency conversion
  var convertedAmount = amount * exchangeRate;

  // Log the result (replace with actual handling logic)
  console.log('Converted amount:', convertedAmount);

  // Return the converted amount
  return convertedAmount;
}

