document.addEvent Listener('DOMContentLoaded', () => {
  
  widget_html = render_view("#post_view2");
  
  document.querySelector(#quiz_widget").innerHTML = widget_html;
        });
  
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
