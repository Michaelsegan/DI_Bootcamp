let pallet = document.getElementById('pallet');
let canvas = document.getElementById('canvas');
let clear = document.getElementsByTagName('clear');
let clickToRetrive;



const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#E6B333",
    "#3366E6",
    "#999966",
    "#99FF99",
    "#B34D4D",
    "#80B300",
    "#809900",
    "#E6B3B3",
    "#6680B3",
    "#66991A",
    "#FF99E6",
    "#CCFF1A",
    "#FF1A66",
    "#E6331A",
    "#33FFCC",
    "#66994D",
    "#B366CC",
    
  ];
  // THE PALLET
         function colorsPallet (){
             for (let i = 0; i < colors.length; i++) {

                 let boxColors = document.createElement('div');
                 boxColors.className = "brush-Color";
                 boxColors.style.backgroundColor = colors[i]
                 boxColors.style.width = "70px";
                 boxColors.style.height = "80px";
                 boxColors.style.border = "thin solid black";
                 boxColors.addEventListener('click',retriveColor);
                 pallet.appendChild(boxColors);

                     
             }
         }
         colorsPallet();

         //Function for Take colors
         function retriveColor (e){

             clickToRetrive = e.target.style.backgroundColor;
             console.log(clickToRetrive);




            }
         // THE CANVAS
         function mathamaticBox () {
             for (let j = 0; j < 24*60; j++){
             let miniBox = document.createElement('div');
             miniBox.className = "small-box"
             miniBox.style.backgroundColor = "white";
             miniBox.style.border = " solid 2px grey"
             miniBox.style.width = "16px";
             miniBox.style.height = "25px";
             miniBox.addEventListener('click',paint);
             canvas.appendChild(miniBox);
            

             }

             
         }
         mathamaticBox();

         // Clicks funcions
         function paint (e){
             e.target.style.backgroundColor = clickToRetrive;
             
          }

          //Clear

        
          


         
         









              
         