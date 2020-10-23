document.addEvent Listener('DOMContentLoaded', () => {
  
  widget_html = render_view("#enter_view2");
  
  document.querySelector(#quiz_widget").innerHTML = widget_html;
        });
  const create_user_view = async(user_idx) => {

  const data = await fetch"https://randomuser.me/api/?results=1")
  const model = await data.json()
  const html_element = render_widget(model,'#userview')

  document.querySelector("#quiz_widget").innerHTML = html_element;
}
  
const render_view = (model, view) => {

  template_source = document.querySelector(view.innerHTML)

  var template = Handlebars.compile(template_source);

var model = {
  first_name : 'Daniel'
}
  console.log(model)
  var html_widget_element = template(model)
console.log(html_widget_element)
  return html_widget_element
}
