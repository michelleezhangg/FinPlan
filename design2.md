### Pseudocode: Block 1: Income Source
1. Get the income type, amount, and frequency from user input per month.
2. Define a total income variable.
3. `TotalIncome += amount * frequency`
4. Return `TotalIncome` as a global variable.

### Block 2: Expense
1. Get rent, utilities, grocery, debt, gas, and other expenses per month.
2. Define a total expenses variable.
3. `TotalExpenses = rent + utilities + debt...`
4. Return `TotalExpenses` as a global variable.

### Block 3: Savings
1. Get current savings, target amount, and end date from user input.
2. Define a progress variable.
3. `Progress += currsavings`
4. If `(totalincome > totalexpenses)`, then `Progress += (totalincome - totalexpenses)`
5. Return `Progress` as a global variable.

### Block 4: Budget
1. Get `IncomeTotal` and `ExpenseTotal` from previous blocks.
2. Define a saving variable.
3. Ask the user how much they want to contribute to their savings this month.
4. `Budget = totalincome - expenses - savings`
5. Return `Budget` as a global variable.

### Recursive Use Case
One use case for a recursive Blockly program for our financial planning project is to calculate investment growth. The base case would be if it is their first year using our program, the return on their investment is their initial investment. The recursive case would calculate investment growth for the number of years and multiply it by the investment rate to get their return on investment.

### Data Information
**User Inputs:** Data entered by the user such as income, expense details, savings goals, and frequencies will be stored and used to create an accurate financial plan for the user.

**Calculations:** Our program will use data to calculate the user's total income, their total expenses, and their progress towards their savings goals.

**Output:** The program will interact with the user to get input, maintain the data through calculations, then generate a budget for the user.

**Database:** Our program will likely have a database that stores the user's income, saving, expenses, progress, and goal in addition to basic user info like a name, etc.
