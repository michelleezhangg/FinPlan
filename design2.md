Pseudocode:
Block 1: Income source
	Get the incometype, amount, and frequency from user input per month
	Define a total income variable
	Totalincome += amount * frequency
	Return totalincome as global variable
Block 2: expense
	Get rent, utilities, grocery, debt, gas, and other expenses per month
	Define total expenses variable
	Totalexpenses = rent + utilities + debt…
Return totalexpenses as a global variable
Block 3: saving
Get currsavings, targetamount, and end date from user input
Define progress var
Progress += currsavings
If (totalincome > totalexpenses)
Progress += (totalincome - totalexpenses)
Return progress as global variable
Block 4: budget
	Get incometotal and expense total from previous blocks
	Define saving variable
	Ask user how much they want to contribute to their savings this month
	Budget = totalincome - expenses - savings
	Return budget and global variable
	


Recursive use case:
One use case for a recursive Blockly program for our financial planning project is to calculate investment growth. The base case would be in it is their first year using our program, the return on their investment is their initial investment. The recursive case would calculate investment growth for the number of years and multiply it by the investment rate to get their return on investment.


Data information:
User inputs: data entered by the user such as income, expense details, savings goals, and frequencies will be stored and used to create an accurate financial plan for the user
Calculations: Our program will use data to calculate the users total income, their total expenses, and their progress towards their savings goals
Output: the program will interact with the user to get input, maintain the data through calculations, then generate a budget for the user
Database: our program will likely have a database that stores the users income, saving, expenses, progress, and goal in addition to basic user info like a name, etc. 

