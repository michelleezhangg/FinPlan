# Financial Planning DSL Blocks Design

## Block 1: Income Source
### Description
This block represents an income source, such as a salary or rental income.
### Inputs
- Income Type (Dropdown): Select the type of income (e.g., Salary, Rental, Business).
- Amount (Number): Specify the amount of income in dollars.
- Frequency (Dropdown): Choose the frequency of income (e.g., Monthly, Annual).

### Semantics
When executed, this block will calculate and return the total income based on the provided inputs.

## Block 2: Expense
### Description
This block represents an expense, such as rent, groceries, or utility bills.
### Inputs
- Expense Type (Dropdown): Select the type of expense (e.g., Rent, Groceries, Utilities).
- Amount (Number): Specify the expense amount in dollars.
- Frequency (Dropdown): Choose the frequency of expense (e.g., Monthly, Annual).

### Semantics
When executed, this block will calculate and return the total expense based on the provided inputs.

## Block 3: Savings
### Description
This block represents a savings goal, such as retirement savings or a vacation fund.
### Inputs
- Savings Goal (Text): Provide a name or description of the savings goal.
- Target Amount (Number): Specify the target savings amount in dollars.

### Semantics
When executed, this block will calculate and return the progress toward the savings goal, indicating how much more is needed to reach the target amount.

## Block 4: Budget
### Description
This block creates a budget by combining income and expenses.
### Inputs
- Income (Block): Connect an Income Source block.
- Expenses (Block): Connect one or more Expense blocks.

### Semantics
When executed, this block will calculate the total income and total expenses, then compute the available budget (income - expenses).
