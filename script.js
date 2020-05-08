
const options=document.querySelector(".options").children;
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");	
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;

// My Questions and Answer//

const questions=[
    {
        q: 'HTML is Referred to as...?',
        options:['Hypertext-Makeup-Language','Hypertext-Mock-Language','Hypertext-Markup-Language','Hypertest-Makeup-Language'],
        answer:2
    },
    {
        q: 'Which of These property used to set background color in CSS?...',
        options:['color','background-color','background color','none'],
        answer:1
    },
    {
        q: 'What is the appropiate HTML tag used in displaying largest headings?...',
        options:["headings",'head','h1', 'h6'],
        answer:2
    },
    {
        q: 'Which of these tags is used to make a list with numbers?...',
        options:['ol','List','ul','oi'],
        answer:0
    },
    {
        q: 'One of the following is the correct HTML tag to make a bold text?...',
        options:['b','bold','bb','bo'],
        answer:0
    }
]

totalQuestionSpan.innerHTML=questions.length;
function load(){
    questionNumberSpan.innerHTML=index+1;
    question.innerHTML=questions[questionIndex].q;
    op1.innerHTML=questions[questionIndex].options[0];
    op2.innerHTML=questions[questionIndex].options[1];
    op3.innerHTML=questions[questionIndex].options[2];
    op4.innerHTML=questions[questionIndex].options[3];
    index++;
}

function check(element){
    if(element.id==questions[questionIndex].answer){
        element.classList.add("correct")
        score++;
        console.log("score:"+score)
    }
    else{
        element.classList.add("wrong");

    }
    disabledOptions()
}

function disabledOptions(){
    for(let i=0; i<options.length; i++) {
    options[i].classList.add("disabled");
    if(options[i].id==questions[questionIndex].answer){
        options[i].classList.add("correct");
        
         }   

    }
}

function enableOptions(){
    for(let i=0; i<options.length; i++){
        options[i].classList.remove("disabled", "correct", "wrong");
    }
}

function validate(){
    if(!options[0].classList.contains("disabled")){
        alert("please Select at least one option")
    }
    else{
        enableOptions();
        randomQuestion();
    }
}

function next(){
    validate();
}

    function randomQuestion(){
     let randomNumber=Math.floor(Math.random()*questions.length);
     let hitDuplicate=0;
        if(index==questions.lenght){
            quizOver();
        }
        else{
            if(myArray.length>0){
                for(let i=0; i<myArray.length; i++){
                    if(myArray[i]==randomNumber){
                        hitDuplicate=1;
                        break;
                    }
                }
                if(hitDuplicate==1){
                    randomQuestion();
                }
                else{
                    questionIndex=randomNumber;
                    load();
                    myArr.push(questionIndex);
                }
            }
            if(myArray.length==0){
            questionIndex=randomNumber;
            load();
            myArr.push(questionIndex);
            }

        myArray.push(randomNumber);

        }
}

function quizOver(){
    document.querySelector(".quiz-over").classList.add("show");
    correctAnswerSpan.innerHTML=score;
    totalQuestionSpan2.innerHTML=questions.length;
    percentage.innerHTML=(score/questions.length)*100 + "%";
}

function tryAgain(){
    window.location.reload();
}
window.onload=function(){
    randomQuestion();
}










