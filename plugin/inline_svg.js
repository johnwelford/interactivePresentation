// document.querySelectorAll("object").forEach(function(e) {
//   e.addEventListener("load", makeInline);
// //   console.log(e);
// });

function makeInline(e) {
  var svg = e.contentDocument.documentElement.cloneNode(true);
  e.parentElement.replaceChild(svg, e); // replace object with inline svg
  var params = e.querySelectorAll("param");
  params.forEach(function(p){ // apply formating according to params
    var svg_e = svg.querySelector("#".concat(p.getAttribute("id")));
    var attrs = p.attributes;
    for(var i = attrs.length - 1; i >= 0; i--) {
      if (attrs[i].name!="id")
       svg_e.setAttribute(attrs[i].name, attrs[i].value);
     }
  });
};