import inquirer from "inquirer";
let input1 = await inquirer.prompt(
    [
        {
            name: "userAnswer",
            type: "string",
            message: "What is the capital of France?"
        }
    ]
)
function quiz(question:string, correctAnswer: string) {
    if(input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
        console.log("Yayyy.It's Correct!");
    }else{
        console.log("ooppps! It's wrong");
    }
}
quiz("What is the capital of France", "Paris");
let input2 = await inquirer.prompt(
    [
        {
            name: "userAnswer2",
            type: "string",
            message: "Who painted the Mona Lisa?"
        }
    ]
)
function quiz2(question:string, correctAnswer: string) {
    if(input1.userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
        console.log("Yayyy.It's Correct!");
    }else{
        console.log("ooppps! It's wrong");
    }
}
quiz2("Who painted the Mona Lisa?", "Leonardo da vinci");