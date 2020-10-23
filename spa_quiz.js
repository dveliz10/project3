document.addEvent Listener('DOMContentLoaded', () => {
  
const render_view = (view) => {

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
