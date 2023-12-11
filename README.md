# FinPlan

**[Blockly Link](https://michelleezhangg.github.io/FinPlan/src/)**

**Group Members**: Apoorva Chilukuri, Briana Craig, Cece Hagen, Michelle Zhang

## **Motivation**

Our motivation for this project is to improve financial literacy as well as make it easier for others who struggle with financial planning and budgeting. This topic has affected our entire group in its own ways, and it was a perfect way to give back to the community as well as push our own learning.

## **Project Description**

A financial planning DSL where users can create budgets, investment strategies, and savings plans. Verification will ensure no overspending and that financial goals are achievable. It will help users familiarize themselves with financial terms and concepts to improve their financial literacy in a way that is tailored to their situation. Different blocks will represent different inputs and outputs regarding money, with feedback included on whether a routine or budget is feasible. It will include blocks that easily allow users to adjust their goals in case their financial situation changes.  Other examples include users who want to set up a long-term savings plan or budget given their financial situation but aren’t sure how much to cap their spending, put into savings, etc. It will also serve as a guide to help users get more in touch with their finances as well as provide an educational opportunity for the average user to understand finances more in-depth.

## **Relevance to parsing, interpretation, and compilation**

When users input their financial goals and strategies, the system needs to parse that input to understand its structure and meaning. After parsing, the DSL would interpret the user's instructions to assess the feasibility of their financial plans, and offer feedback regarding their decisions. This involves running routines that verify the user's budget, savings, and investment goals. If the DSL offers the ability to produce executable strategies or visual models, then compilation would come into play, converting user-defined financial plans into a form that can be executed or displayed. Thus, the core processes of this project—taking financial plans, analyzing their viability, and possibly producing actionable strategies or visual outputs—are deeply tied to the concepts of parsing, interpretation, and compilation.

## **Informational Videos**

1. [FinPlan Introduction](https://youtu.be/Vc_oa7QE6V0)

In this video, we go over an introduction of FinPlan, the motivation behind the project, and future steps that can be made to the project since this is an open source project.

2. [The technical introduction](https://www.youtube.com/watch?v=LPewF0CQQJE)

In this video, we go over the technical side of FinPlan specifically each of the blocks and what they do and how to add more blocks and features in the future.

## **Functionality**

1. **Budget Blocks**: This block calculates the budget for the user by adding their income and substracting their expenses and savings

    1. **Income Source Block**: This block allows the user to input their sources of income. The dropdown includes Salary, Investments, Gifts, and Other. These blocks can be vertically stacked for different types of income.
    2. **Expense Source Blocks**: This block allows the user to input their different types of expenses. The dropdown includes Rent, Utilities, Phone Plan, Car Payment, Subscriptions, Debt, Grocery, Spending, and Other. These blocks can be vertically stacked for different types of income.

2. **Simulated Investment Blocks**: This blocks allows the user to simulate an investment for a specific number of year (default: 10 years).

    1. **Asset Allocation Block**: This block allows the user to allocate their assets between Stocks, Bonds, and Others (percentages) based on their risk tolerance.
    2. **Risk Tolerance Block**: This block allows the user to choose the type of risk tolerance to take. The options are Low, Medium, and High.

3. **Currency Conversion Block**: This block allows the user to switch between different types of currencies and convert them to the user's liking. The types of currencies available are USD, EUR, and GBP which can be converted in any arrangement.

4. **Educational Blocks**

    1. **Financial Term Block**: This block allows the user to search up a financial term and FinPlan would output the definition on the screen which would give them better context during their financial planning.
    2. **Financial Scenario Block**: This block allows the user to choose different financial scenarios and learn more about the financial terms and knowledge needed for those situations. The scenarios are Buying a House, Planning for Retirement. We are planning on implementing more in the future.
    3. **Quiz Topic Block**: This block allows the user to be quizzed on specific financial topics as an educational tool. The topics in the dropdown are Basic Finance and Investing. We are planning on implementing more in the future.

## **Future Work**

### **Short-Term**
Below is a list of short-term fixes and future work that we plan to do for FinPlan.

1. Implement more types of savings
2. Add more options for Financial Scenario
3. Add more options for Quiz Topic
4. Connect the Financial Term block to a Financial Glossary/Definition API
5. Add better ways to quiz the user using Quiz Topic
6. Expand the Budget block to include more than Income, Expenses, and Savings

### **Long-Term**
Below is a list of potential future long-term work that FinPlan can include.

1. Integrating an AI Financial Advisor
2. Credit Card Tracking System
3. Credit Card Management Tool
4. Expense Forcasting
5. Sustainability Index

The overall goal is to make FinPlan more dynamic and comprehensive for users so they can learn as much as possible and it can make their lives as easy as possible.

## **Contributions**

### **Apoorva Chilukuri**
- Worked on the first video

### **Briana Craig**
- Worked on the second video

### **Cece Hagen**
- Worked on the second video

### **Michelle Zhang**
- Organized the GitHub repository including the README and documentation
- Worked on debugging the code and the error-handling for the blocks
- Worked on the first video