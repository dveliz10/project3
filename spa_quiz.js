async function getdata(){
        const response = await fetch('https://my-json-server.typicode.com/dveliz10/project3/');
        const data = await response.json();
        console.log(data);"
}
var quizzes;

fetch(questionURL).then(function(res) {
  res.json().then(function(data) {
    quizzers=data;
  }).catch(function(err);
           console.log(err);
});

document.addEvent Listener('DOMContentLoaded', function() => {
  
  widget_html = render_view("#enter_view2");
  
  document.querySelector(#quiz_widget").onSubmit = function;
                         {
       appState.name = documentt.querySelector('#name').value;
  let temp = document.getElementsByName('quiz')
  for(i = 0; i<temp.length; i++)
        {
            if(temp[i].checked)
            {
                appState.quiz_num = temp[i].value;
            }
        }

  function show_quizquestions()
render_view("#quiz_start")
{
  let vars = {
   
   correct: appState.correct,
        total: appState.total
    }
  const question = await get_quiz_info(appState.quiz_num, appState.question_num);
  let vars = {
            current_question: question["Question_Num"],
            question: question["Question"],
            choice1: question["Choice1"],
            choice2: question["Choice2"],
            choice3: question["Choice3"],
            choice4: question["Choice4"]
        }
        load_view('#mc-question', '#question-view', vars)
    }
    load_view('#quiz-view', '#view-widget', vars)
    load_question();
}
  const data = await fetch"https://my-json-server.typicode.com/dveliz10/project3/")
  const model = await data.json()
  const html_element = render_widget(model,'#userview')

  document.querySelector("#quiz_widget").innerHTML = html_element;
}
  
const render_view = (model, view) => {

  template_source = document.querySelector(view.innerHTML)

  var template = Handlebars.compile(template_source);

}
  console.log(model)
  var html_widget_element = template(model)
console.log(html_widget_element)
  return html_widget_element
}
