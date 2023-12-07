// Supporting Functions with UI Updates
let totalIncome = 0;
let totalExpenses = 0;

// Define the vertical stacking 'income_block'
Blockly.Blocks['income_block'] = {
  init: function() {
    // Define the dropdown options
    var dropdownOptions = [
      ["Wages", "WAGES"],
      ["Investments", "INVESTMENTS"],
      ["Gifts", "GIFTS"],
      ["Other", "OTHER"]
    ];
    this.appendDummyInput()
        .appendField("Budget - Income Source:")
        //.appendField(new Blockly.FieldTextInput("Wages"), "SOURCE")
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "SOURCE")
        //.appendField("Amount:")
        //.appendField(new Blockly.FieldNumber(1000, 0), "AMOUNT");
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Amount:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
  }
};

// Define the vertical stacking 'expense_block'
Blockly.Blocks['expense_block'] = {
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
        .appendField("Expense Category:")
        //.appendField(new Blockly.FieldTextInput("Rent"), "CATEGORY")
        .appendField(new Blockly.FieldDropdown(dropdownOptions), "CATEGORY")
        //.appendField("Amount:")
        //.appendField(new Blockly.FieldNumber(500, 0), "AMOUNT");
    this.appendValueInput("AMOUNT")
        .setCheck("Number")
        .appendField("Amount:");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
  }
};

// Define the vertical stacking 'budget_calculator_block'
Blockly.Blocks['budget_calculator_block'] = {
  init: function() {
    this.appendStatementInput("INCOME")
        .setCheck(null)
        .appendField("Income");
    this.appendStatementInput("EXPENSES")
        .setCheck(null)
        .appendField("Expenses");
    this.appendValueInput("SAVINGS")
        .setCheck("Number")
        .appendField("Savings");
    this.setColour(60);
    this.setOutput(true, "Number");
    this.setTooltip("Calculate your budget by subtracting expenses from income.");
  }
};

// Define the JavaScript generator for 'income_block'
Blockly.JavaScript['income_block'] = function(block) {
  var source = block.getFieldValue('SOURCE');
  //var amount = Number(block.getFieldValue('AMOUNT'));
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return 'addIncome("' + source + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'expense_block'
Blockly.JavaScript['expense_block'] = function(block) {
  var category = block.getFieldValue('CATEGORY');
  //var amount = Number(block.getFieldValue('AMOUNT'));
  var amount = Blockly.JavaScript.valueToCode(block, 'AMOUNT', Blockly.JavaScript.ORDER_NONE);
  return 'addExpense("' + category + '", ' + amount + ');\n';
};

// Define the JavaScript generator for 'budget_calculator_block'
Blockly.JavaScript['budget_calculator_block'] = function(block) {
  var incomeCode = Blockly.JavaScript.statementToCode(block, 'INCOME');
  var expenseCode = Blockly.JavaScript.statementToCode(block, 'EXPENSES');
  return 'calculateBudget();\n';
};

function addIncome(source, amount) {
  totalIncome += amount
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


// OG Income Source Block
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

// OG Expense Block
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

// OG Savings Block
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

// OG Budget Block
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

// Investment Blocks
Blockly.Blocks['risk_assessment_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Risk Tolerance:")
        .appendField(new Blockly.FieldDropdown([["Low", "LOW"], ["Medium", "MEDIUM"], ["High", "HIGH"]]), "RISK");
    this.setOutput(true, "RiskLevel");
    this.setColour(210);
    this.setTooltip("Select your risk tolerance level.");
  }
};

Blockly.JavaScript['risk_assessment_block'] = function(block) {
  var riskLevel = block.getFieldValue('RISK');
  return ['"' + riskLevel + '"', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['asset_allocation_block'] = {
  init: function() {
    this.appendValueInput("RISK_LEVEL")
        .setCheck("RiskLevel")
        .appendField("Asset Allocation based on Risk:");
    this.appendDummyInput()
        .appendField("Stocks (%)")
        .appendField(new Blockly.FieldNumber(60, 0, 100), "STOCKS")
        .appendField("Bonds (%)")
        .appendField(new Blockly.FieldNumber(30, 0, 100), "BONDS")
        .appendField("Others (%)")
        .appendField(new Blockly.FieldNumber(10, 0, 100), "OTHERS");
    this.setInputsInline(true);
    this.setColour(160);
    this.setTooltip("Set your asset allocation based on your risk tolerance.");
    this.setOutput(true, "Allocation");
  }
};

Blockly.JavaScript['asset_allocation_block'] = function(block) {
  var riskLevel = Blockly.JavaScript.valueToCode(block, 'RISK_LEVEL', Blockly.JavaScript.ORDER_ATOMIC);
  var stocks = block.getFieldValue('STOCKS');
  var bonds = block.getFieldValue('BONDS');
  var others = block.getFieldValue('OTHERS');
  var code = `allocateAssets(${riskLevel}, ${stocks}, ${bonds}, ${others})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.Blocks['investment_simulator_block'] = {
  init: function() {
    this.appendValueInput("ALLOCATION")
        .setCheck("Allocation")
        .appendField("Simulate Investment for Allocation:");
    this.appendDummyInput()
        .appendField("Years")
        .appendField(new Blockly.FieldNumber(10, 1), "YEARS");
    this.setColour(60);
    this.setTooltip("Simulate the growth of your investment over a number of years.");
    this.setOutput(true, "Number");
  }
};

Blockly.JavaScript['investment_simulator_block'] = function(block) {
  var allocation = Blockly.JavaScript.valueToCode(block, 'ALLOCATION', Blockly.JavaScript.ORDER_ATOMIC);
  var years = block.getFieldValue('YEARS');
  var code = `simulateInvestment(${allocation}, ${years})`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// Assuming this part remains the same for defining blocks

// Supporting JavaScript function for asset allocation
function allocateAssets(riskLevel) {
  let stocks, bonds, others;
  switch (riskLevel) {
    case 'LOW':
      stocks = 30; // Low risk: Less in stocks
      bonds = 50; 
      others = 20;
      break;
    case 'MEDIUM':
      stocks = 50; // Medium risk: Balanced allocation
      bonds = 30;
      others = 20;
      break;
    case 'HIGH':
      stocks = 70; // High risk: More in stocks
      bonds = 20;
      others = 10;
      break;
    default:
      stocks = 50; // Default to medium risk allocation
      bonds = 30;
      others = 20;
  }
  console.log(`Allocating assets for ${riskLevel} risk: ${stocks}% Stocks, ${bonds}% Bonds, ${others}% Others`);
  return { stocks, bonds, others };
}

// Supporting JavaScript function for investment simulation
function simulateInvestment(allocation, years) {
  // Simple annual compounding formula for each asset class
  const stockGrowth = compoundInterest(allocation.stocks, 0.07, years);
  const bondGrowth = compoundInterest(allocation.bonds, 0.03, years);
  const otherGrowth = compoundInterest(allocation.others, 0.02, years);

  const totalGrowth = stockGrowth + bondGrowth + otherGrowth;
  console.log(`Projected value after ${years} years: ${totalGrowth}`);
  return totalGrowth;
}

function compoundInterest(principal, annualRate, years) {
  return principal * Math.pow((1 + annualRate), years);
}


// financial literacy
Blockly.Blocks['financial_terms_glossary_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Financial Term:")
        .appendField(new Blockly.FieldTextInput("Interest Rate"), "TERM");
    this.setColour(120);
    this.setTooltip("Lookup a financial term.");
    this.setOutput(true, "String");
  }
};

Blockly.JavaScript['financial_terms_glossary_block'] = function(block) {
  var term = block.getFieldValue('TERM');
  var definition = lookUpFinancialTerm(term);
  return [`"${definition}"`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Supporting JavaScript function
async function lookUpFinancialTerm(term) {
  const apiUrl = `https://example-financial-glossary-api.com/terms?query=${encodeURIComponent(term)}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    
    // Assuming the API returns an object with a 'definition' field
    return data.definition || "Definition not found.";
  } catch (error) {
    console.error("Error fetching term definition:", error);
    return "Error fetching definition.";
  }
}

Blockly.Blocks['scenario_based_learning_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Financial Scenario:")
        .appendField(new Blockly.FieldDropdown([["Buying a House", "BUY_HOUSE"], ["Planning for Retirement", "RETIREMENT"]]), "SCENARIO");
    this.setColour(180);
    this.setTooltip("Select a financial scenario to learn about.");
    this.setOutput(true, "String");
  }
};

Blockly.JavaScript['scenario_based_learning_block'] = function(block) {
  var scenario = block.getFieldValue('SCENARIO');
  var details = getScenarioDetails(scenario);
  return [`"${details}"`, Blockly.JavaScript.ORDER_ATOMIC];
};

function getScenarioDetails(scenario) {
  const scenarios = {
    "BUY_HOUSE": "Buying a house involves saving for a down payment, understanding mortgage rates, and managing property taxes.",
    "RETIREMENT": "Planning for retirement includes investment in retirement accounts, understanding of pensions, and long-term healthcare planning.",
    "SAVING_FOR_COLLEGE": "Saving for college involves understanding 529 plans, educational savings accounts, and scholarships.",
    "EMERGENCY_FUND": "Building an emergency fund requires setting aside 3-6 months of expenses for unforeseen circumstances.",
    "INVESTING_IN_STOCKS": "Investing in stocks involves understanding stock markets, diversification, and risk management.",
  };
  return scenarios[scenario] || "Scenario details not available.";
}

Blockly.Blocks['quizzes_and_tests_block'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Quiz Topic:")
        .appendField(new Blockly.FieldDropdown([["Basic Finance", "BASIC_FINANCE"], ["Investing", "INVESTING"]]), "TOPIC");
    this.setColour(240);
    this.setTooltip("Take a quiz on a financial topic.");
    this.setOutput(true, "Number");
  }
};

Blockly.JavaScript['quizzes_and_tests_block'] = function(block) {
  var topic = block.getFieldValue('TOPIC');
  var score = takeQuiz(topic);
  return [score.toString(), Blockly.JavaScript.ORDER_ATOMIC];
};

function takeQuiz(topic) {
  const quizScores = {
    "BASIC_FINANCE": Math.floor(Math.random() * 21) + 80, // Random score between 80 and 100
    "INVESTING": Math.floor(Math.random() * 21) + 70, // Random score between 70 and 90
    "RETIREMENT_PLANNING": Math.floor(Math.random() * 21) + 60, // Random score between 60 and 80
    "SAVING_STRATEGIES": Math.floor(Math.random() * 21) + 75, // Random score between 75 and 95
    "RISK_MANAGEMENT": Math.floor(Math.random() * 21) + 65, // Random score between 65 and 85
  };

  return quizScores[topic] || 0;
}

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
