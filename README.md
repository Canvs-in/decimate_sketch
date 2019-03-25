Installation: 

On terminal:

`git clone https://github.com/Canvs-in/decimate_sketch.git `

Find the sketch plugin (decimate.sketchplugin) and the associated plugin files in the cloned folder.


**Usage:** 

* Select Artboard
* Run Plugin options



Decimate allows you to integerize dimensions and corner radii as a corrective measure, on an artboard. Running Decimate on an Artboard will:

1. Make Rectangle Dimensions Integers
2. Make Corner Radii of Rectangles, Integers
3. Make Fonts Integers



**Why Decimate?**

UI design processes are often filled with shape transformations of components. During such transformations like resizing groups, rescaling objects, we often forget sub entity sizes and dimensions. Decimate takes care of such problems by eradicating/normalizing them. 

So now when you take a screen and increas the dimension using Cmd+K to start making a new screen with a similar layout but higher screen size, you can freely do so by retro-actively running Decimate on the Artboard. 
*This is a retroactive measure to correct flaws, gradually as one progresses in their design processes, a plugin like Decimate shall becomes non useful to them due to the improvement in practices.*


Decimate rounds off Text, Rectangle Dimensions and Corner Radii in sketch Artboards. 



**Warnings:**
Changing dimensions may lead to certain boxes breaking when rounded off to higher values. 
For eg. Text areas can overflow into 2 lines. 
For eg. If you have 2 fonts used within the same text box, Sketch normalizes both to one font when you apply blanket font resizing to that text box.

