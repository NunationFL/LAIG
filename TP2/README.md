# LAIG 2020/2021 - TP2

## Group T02G05
| Name                      | Number    | E-Mail               |
| ------------------------- | --------- | ------------------   |
| Luís Miguel Pinto         | 201806206 | up201806206@fe.up.pt |
| Nuno Oliveira             | 201806525 | up201806525@fe.up.pt |


----
## Project information

### Scene
  - The scene we created is a simple outdoor dinning table with an orange, a donut, a napkin, a can of coke and 6 chairs
  - There are also 2 floors, a wall, a BBQ stand and a lamp (with its own light source) to light up the table
  - In this second project we added a fire to the BBQ stand (spritesheet animation), text to the wall (sprite text), animations to multiple items on the table and chairs (keyframe animations), a wine barrel and a bar counter (both NURBS surfaces)
  - We added a small easter egg in the form of a jump scare :)
  - [Scene Running](https://web.fe.up.pt/~up201806206/laig/TP2/)
  - [Scene XML](./scenes/LAIG_TP2_T2_G05.xml)

### Main Strong Points
  - Parsing support for KeyFrame Animations, SpriteText, SpriteAnimation and various NURBS objects: Plane, Patch and Defbarrel
  - Fully functional KeyFrame Animations 
  - Spritesheet based animations with user chosen start and end cells and duration
  - Spritesheet based text with most of the relevant ASCII characters
  - Both Sprite Animations and Text can have transparency activated
  - Planes draws a proper 1x1 square using NURBS
  - Patch draws NURBS based objects with the controlPoints it receives
  - Defbarrel draws half a barrel with varying angle, height, base readius and middle radius

### Adittional Features
  - Nodes that subscribe an animation stay invisible until the first KeyFrame
  - Animations block on xml is optional
  - Some values on the primitives like npartsU and npartsV have defaults
  - Defbarrel has optional angle parameter. If it is not specificied 30º will be used as default
  - Badly declared leafs on xml will not cause any errors. Instead it will produce a warning and will not be drawn

----
## Issues/Problems
  - chars '<' and '>' can't be used with SpriteTexts due to CGF lib limitations
