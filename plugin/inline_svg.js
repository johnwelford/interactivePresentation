document.querySelectorAll("object").forEach(function(e) {
  e.addEventListener("load", makeInline);
});

function makeInline() {
  var svg = this.contentDocument.documentElement.cloneNode(true);
  this.parentElement.replaceChild(svg, this); // replace object with inline svg
  var params = this.querySelectorAll("param");
  params.forEach(function(p){ // apply formating according to params
    var svg_e = svg.querySelector("#".concat(p.getAttribute("id")));
    var attrs = p.attributes;
    for(var i = attrs.length - 1; i >= 0; i--) {
      if (attrs[i].name!="id")
       svg_e.setAttribute(attrs[i].name, attrs[i].value);
     }
  });
};

console.log("test")