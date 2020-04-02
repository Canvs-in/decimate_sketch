          var onRun = function(context) {
          var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var selectedLayers = document.selectedLayers;
var sg = sketch.getSelectedDocument().selectedLayers.layers[0].sketchObject;
var sg_s=sketch.getSelectedDocument().selectedLayers.layers[0]

// log(selectedLayers.layers[0].type)

l=selectedLayers.layers[0]

function roundoff(h){
      
      if ((h% 1) > 0.5) {h = Math.ceil(h);} 
      else {h = Math.floor(h);}
      return h
}

function iter(layer) {

    if (layer.layers) {
      layer.layers.forEach(iter);
    }
//     log(layer.type)
//     log("- - - ")
    

    if (layer.type == "Text") { 
      fs=layer.style.fontSize
        
      layer.style.fontSize=roundoff(fs)}
    
    if (layer.type == "ShapePath") { 
      w=layer.frame.width
      h=layer.frame.height  
      layer.frame.width=roundoff(w)
      layer.frame.height=roundoff(h)

      points=layer.points
//       log(layer.name)
// //       log(layer)
//       log(points)
      if(points){
      points.forEach(function(point){
          cr=point.cornerRadius
//           log(cr)
          point.cornerRadius=roundoff(cr)
      })}
      }
}

iter(l)

          };
          