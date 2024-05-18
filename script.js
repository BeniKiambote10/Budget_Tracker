class Budget {
    constructor() {
        // Initialize arrays to store income and expenses
        this.income = [];
        this.expenses = [];
    }

    // Method to add an income 
    addIncome(description, amount) {
        this.income.push({ description, amount });
    }

    // Method to add an expense 
    addExpense(description, amount) {
        this.expenses.push({ description, amount });
    }

    // add method to calculate the total income
    getTotalIncome() {
        return this.income.reduce((acc, item) => acc + item.amount, 0);
    }

    // add method to calculate the total expenses
    getTotalExpenses() {
        return this.expenses.reduce((acc, item) => acc + item.amount, 0);
    }

    // Method to calculate the total budget for the income - expenses
    getTotalBudget() {
        return this.getTotalIncome() - this.getTotalExpenses();
    }
}

// Create a new instance of the Budget class using the new keyword
const budget = new Budget();

// Add event listener for the "Add Income" button
document.getElementById('add-income').addEventListener('click', () => {
    // Get the description and amount from the input fields
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Validate input and add income if valid
    if (description !== '' && !isNaN(amount) && amount > 0) {
        budget.addIncome(description, amount);
        updateUI();  // Update the UI to reflect the new income
    }
});

// Add event listener for the "Add Expense" button
document.getElementById('add-expense').addEventListener('click', () => {
    // Get the description and amount from the input fields
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    // Validate input and add expense if valid
    if (description !== '' && !isNaN(amount) && amount > 0) {
        budget.addExpense(description, amount);
        updateUI();  // Update the UI to reflect the new expense
    }
});

// Function to update the UI with the current budget information
function updateUI() {
    // Displays the total income in the HTML element
    document.getElementById('total-income').textContent = `$${budget.getTotalIncome().toFixed(2)}`;
    // Display the total expenses in the  HTML element
    document.getElementById('total-expenses').textContent = `$${budget.getTotalExpenses().toFixed(2)}`;
    // Display the total budget (income - expenses) in the  HTML element
    document.getElementById('total-budget').textContent = `$${budget.getTotalBudget().toFixed(2)}`;
}
