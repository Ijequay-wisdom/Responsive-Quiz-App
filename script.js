
const options=document.querySelector(".options").children;
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".correct-answers");
const totalQuestionSpan2=document.querySelector(".total-questions");
const percentage=document.querySelector(".percentage");
const question=document.querySelector(".question");	
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
let questionIndex;
let index=0;
let myArray[];
let myarr[];
let score=0;


// questions

const questions=[
{
	q: 'HTML is Referred to as?',
	options:['Hypertext-Makeup-Language','Hypertext-Mock-Language','Hypertext-Markup-Language'],
	answer:2
},
{
	q: 'CSS is Referred to as?',
	options:['Cascading Style Sheet','Cascade Sheet Style','Cascarding Style Sheet'],
	answer:0
},
{
	q: 'One of the following is a tag in html?',
	options:['<br>','<z>','<pat>'],
	answer:0
},
{
	q: 'What does the tag <br> stand for in html?',
	options:['base','break','bracket'],
	answer:1
},
{
	q: 'The following a Mentors in start.ng Except?',
	options:['Oyindamola','Xyluz','Jeff'],
	answer:0
}
]

//question and Answer Number
totalQuestionSpan.innerHTML=questions.length;
function load(){
		questionNumberSpan.innerHTML=index+1;
		question.innerHTML=questions[questionIndex].q;
		op1.innerHTML=questions[questionIndex].options[0];
		op2.innerHTML=questions[questionIndex].options[1];
		op3.innerHTML=questions[questionIndex].options[2];
		index++;
}

function check(element){
	if(element.id==questions[questionIndex].answer){
		element.classList.add("correct");
		score++
		console.log
	}
	else{
		element.classList.add("wrong");
	}

	disabledOptions()
}

function disabledOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.add("disabled");
		if(option[i].id==questions[questionIndex].answer){
			options[i].classList.add("correct");
		}

	}
}

function enableOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.remove("disabled","correct","wrong");
	}
}


function validate(){
	if(!options[0].classList.contains("disabled")){
		alert("Please Select at least one option");
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
	 	if(index==questions.length){
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
	 	console.log("myArr": +myArr);

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
