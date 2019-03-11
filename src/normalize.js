const radiusSeparator = (sketchVersionNumber() < 420) ? '/' : ';'

export function iterate_corner(){

var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var selectedLayers = document.selectedLayers
var selectedCount = selectedLayers.length
const selectedArtboard = document.selectedLayers.layers[0]
const radiusSeparator = (sketchVersionNumber() < 420) ? '/' : ';'

if (selectedArtboard==undefined)
   {sketch.UI.message("You haven't selected an artboard")}

else
   {sketch.UI.message("Here we go.")}

function corners(layer){
    if (layer.layers) {
           layer.layers.forEach(corners)
         }
   
    if (layer.type=="Shape"){ 
    roundoffcorners(layer)}
    document.sketchObject.inspectorController().reload()
    

        }

corners(selectedArtboard)
sketch.UI.message("Done with Corners!")
}
              
export function iterate_length()
{
var sketch = require('sketch')
var document = sketch.getSelectedDocument()
var selectedLayers = document.selectedLayers
var selectedCount = selectedLayers.length
const selectedArtboard = document.selectedLayers.layers[0]
const radiusSeparator = (sketchVersionNumber() < 420) ? '/' : ';'
if (selectedArtboard==undefined)
   {sketch.UI.message("You haven't selected an artboard")}

else
   {sketch.UI.message("Here we go.")}

function length(layer){ 
    if (layer.layers) {
           layer.layers.forEach(length)
         }
    if (layer.type=="Shape"){ 
    // shapeassessment(layer)
    var l=layer.sketchObject.layers()[0]
    if (!l.isKindOfClass(MSRectangleShape)) {return}
    
    var shape=layer.frame
    var w=shape.width
    var h=shape.height
    if ((w%1)>0.5){w = Math.ceil(w)}
    else{w=Math.floor(w)}
    if ((h%1)>0.5){h = Math.ceil(h)}
    else{h=Math.floor(h)}
    
     shape.width=w
     shape.height=h
     document.sketchObject.inspectorController().reload()
     
     
  
  
  
  }
    
    
}

length(selectedArtboard)
sketch.UI.message("Done with Card Lengths!")
}

  
export function iterate_text(){
  var sketch = require('sketch')
  var document = sketch.getSelectedDocument()
  var selectedLayers = document.selectedLayers
  var selectedCount = selectedLayers.length
  const selectedArtboard = document.selectedLayers.layers[0]
  const radiusSeparator = (sketchVersionNumber() < 420) ? '/' : ';'
  if (selectedArtboard==undefined)
   {sketch.UI.message("You haven't selected an artboard")}
  else
   {sketch.UI.message("Here we go.")}

  function text(layer){    
    if (layer.layers) {
           layer.layers.forEach(text)
         }
    if (layer.type=="Text"){ fonts(layer)}
    document.sketchObject.inspectorController().reload()

}
text(selectedArtboard)
sketch.UI.message("Done with Fonts!")
}
  
    
function sketchVersionNumber() {
  var version = NSBundle.mainBundle().objectForInfoDictionaryKey("CFBundleShortVersionString")
  var versionNumber = version.stringByReplacingOccurrencesOfString_withString(".", "") + ""
  while(versionNumber.length != 3) {versionNumber += "0"}
  console.log(versionNumber)
  return parseInt(versionNumber)
}


function roundoffcorners(layer) {
console.log(radiusSeparator)
  layer=layer.sketchObject.layers()[0]
  if (!layer.isKindOfClass(MSRectangleShape)) {return}
  var radii = layer.cornerRadiusString().split(radiusSeparator)
  radii = radii.map(radius => {return Math.round(radius)})
  layer.setCornerRadiusFromComponents(radii.join(radiusSeparator))
}


function fonts(layer){
     console.log("found");
     var fo=layer.sketchObject.font() //font object    
     var tfs=layer.sketchObject.font().pointSize() //fontsize   
     var new_fo=NSFont.fontWithDescriptor_size(fo.fontDescriptor(), Math.round(tfs))     
     layer._object.setFont(new_fo)
     
    }







