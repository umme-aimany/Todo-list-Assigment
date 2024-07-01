import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let questions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "string",
            message: "what would you like to add in your todo ?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Would you like add more thing in your todo ?",
            default: "true", ////////agar yes or no ma answer nhi mila to by default wo true manai ga /////////
        }
    ]);
    todos.push(questions.firstQuestion);
    console.log(todos);
    condition = questions.secondQuestion;
}
