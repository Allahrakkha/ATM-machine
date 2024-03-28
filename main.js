import inquirer from "inquirer";
let balance = 10000;
let pin = 1234;
let myPin = await inquirer.prompt([
    {
        name: "pincode",
        type: "number",
        message: "please enter pin code."
    }
]);
if (myPin.pincode === 1234) {
    console.log("correct pin code.");
    console.log(`\n your balance is : ${balance}`);
    let q1 = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "please select operation.",
            choices: ['withdraw', 'fast cash', 'balance']
        }
    ]);
    if (q1.operation === "fast cash") {
        let askAmount = await inquirer.prompt([
            {
                name: "amountList1",
                type: "list",
                message: "please select amonut",
                choices: [1000, 5000, 10000]
            }
        ]);
        if (askAmount.amountList1 === askAmount.amountList1) {
            console.log(`yoyr remaining balance is: ${balance - askAmount.amountList1}`);
        }
    }
    if (q1.operation === "withdraw") {
        let askAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "please enter amonut",
            }
        ]);
        if (askAmount.amount <= balance) {
            console.log(`Your remaining balance is: ${balance -= askAmount.amount}`);
        }
        if (askAmount.amount > balance) {
            console.log("insufficient balance.");
        }
    }
    if (q1.operation === "balance") {
        console.log(`your balance is: ${balance}`);
    }
}
else {
    console.log("invalid pin code. Please insert valid code.");
}
