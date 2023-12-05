## Group Members (FinPlan):
Briana Craig, Cece Hagen, Apoorva Chilukuri, Michelle Zhang

## Setting Up:
1. Run and test our milestone by going to the link in our main repo README.md that goes to our Github Pages site.
2. Ensure `custom_blocks.js`, `index.html`, and `styles.css` are in the same directory.
3. Launch `index.html` in a web browser to initialize the Blockly interface.

## Using the App:
- **Drag Blocks**: Move blocks from the toolbox to the workspace.
- **Set Values**: Tap input fields on blocks, e.g., "Income Source", to input postive values.
- **Connect Blocks**: Link blocks such as "Income Source" or "Expense" to "Budget" block inputs.
- **Generate & Run JS**:
  - Click "Generate JavaScript" to transform blocks into code.
  - Press "Run JavaScript" to execute and see results.
- **Save & Load**:
  - Use "Save JavaScript" and "Save Blocks" for code/block configurations.
  - "Load Blocks" lets you restore a saved `.xml` block layout.

## Testing:
- **Valid Configurations**: Test by combining "Income Source", "Expense", and "Savings" with "Budget".

## Demo Instructions
 
### Set Up
1. Drag in the Budget - Income block (purple) to the middle
2. Put Income Source block (blue), Expense block (red), and Savings block (green) into the corresponding spots on the Budget - Income block.

### Example 1

1. Income Source: 100
2. Expense: 80
3. Savings: 15
4. Click on the "Generate JavaScript" button: 100 - 80 - 15
5. Click on the "Run JavaScript": 5
    - This value represents the remaining amount of money the user has left to spend

### Example 2
1. Income Source: 0
2. Expense: 75
3. Savings: 15
4. Click on the "Run JavaScript": -90
    - This value shows how much debt you are in

## Presentation Slides Link
[Presentation Slides](https://docs.google.com/presentation/d/1YuTZvJ-aFWsFlSW3kzyeNQtCwdzdte3kYYWwLUou9iE/edit#slide=id.p)
