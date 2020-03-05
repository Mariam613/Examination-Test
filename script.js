var ques=document.querySelector('#question')
var choices=document.querySelectorAll('input')
var label1=document.querySelector('.label1')
var label2=document.querySelector('.label2')
var label3=document.querySelector('.label3')
var label4=document.querySelector('.label4')
var footer=document.querySelector('#footer')
var next=document.querySelector('.next')
var prev=document.querySelector('.prev')
var mark=document.querySelector('.mark')
var markcol=document.querySelector('#columnRight')
let index=0;
var randomQuestion = []

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#","C++", "C"], "C"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("There are ____ main components of object oriented programming.", ["1", "6","2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ____.", ["Language", "Library", "Framework", "All"], "Framework")
];

while(randomQuestion.length< questions.length){
    r = Math.floor(Math.random() * questions.length );
    if (randomQuestion.indexOf(r) === -1){
        randomQuestion.push(r);
    }
}

function load(index=0){
   
        //debugger;
        ques.innerHTML=`${index+1}-${questions[randomQuestion[index]].text}`;
        label1.innerHTML=questions[randomQuestion[index]].choices[0];
        label2.innerHTML=questions[randomQuestion[index]].choices[1];
        label3.innerHTML=questions[randomQuestion[index]].choices[2];
        label4.innerHTML=questions[randomQuestion[index]].choices[3];
        
}

  load();
next.addEventListener('click',function(){
        
    if(index<randomQuestion.length-1){
        console.log(index)
        load(++index)
       // debugger;
    }else if(index==randomQuestion.length){
        alert("this is the last question");
      }
})
prev.addEventListener('click',function(){
    
    if(index>0){
        //index--
        console.log(index)
        load(--index)
        //next.style.display='block'
        //prev.style.display='block'
        //questions.pop(randomQuestion[i])
        
    } else if(index<0){
        alert("this is the first question");
      }
})

mark.addEventListener('click',function(){
   var div= document.createElement('div')
    var split=ques.textContent.split('-')
    console.log(split[0])
    index=split[0]
      div.textContent= `Q : ${index}`
      markcol.appendChild(div)
      div.setAttribute('class','markQuestion')
      div.addEventListener('click',function(){
         load(index);
    // ques.innerHTML=`${split[0]}-${questions[randomQuestion[index]].text}`;
    // label1.innerHTML=questions[randomQuestion[ index]].choices[0];
    // label2.innerHTML=questions[randomQuestion[ index]].choices[1];
    // label3.innerHTML=questions[randomQuestion[ index]].choices[2];
    // label4.innerHTML=questions[randomQuestion[ index]].choices[3];

      })
})

document.querySelectorAll(".pag").forEach(function (curr) {
  // console.log(curr)
  curr.addEventListener("click", function (e) {
    // console.log(this)
    var split = this.id.split('-')
    index = split[1]
    console.log(index)
    //curr.style.backgroundColor='blue'
    if (e.target === this) {

        load(parseInt(index));
        //   numQ = parseInt(indexx);
    //   ques.innerHTML = `${parseInt(index)+1}-${questions[randomQuestion[index]].text}`
    // //   console.log(numQ)
    //   label1.innerHTML=questions[randomQuestion[ index]].choices[0];
    //   label2.innerHTML=questions[randomQuestion[ index]].choices[1];
    //   label3.innerHTML=questions[randomQuestion[ index]].choices[2];
    //   label4.innerHTML=questions[randomQuestion[ index]].choices[3];
    }
  });
});
