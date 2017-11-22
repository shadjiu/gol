

//AJAX///
$( document ).ready(function() {
	var obj = {};
	 $.ajax({
			url: "http://localhost:3000/file",
			async: false,
			success: function (data){
					obj = JSON.parse(data).array;
					var afis =$( "#afis" ) ;
					for (i = 0; i < obj.length; i++) {
					//	console.log(parseInt(obj[i][0]));
						 afis.append(obj[i] + '<br>'); 
					}
			}
	}); 



//console.log(obj);




//GRID

function Cell(x,y,active){
  this.x=x;
  this.y=y;
	this.active=active;

  this.cell=document.createElement('cell');
	document.getElementById("grid").appendChild(this.cell); 
	

    this.cell.classList.add('space')
  if (this.active) {
		
    this.cell.classList.add('active');
	}
	if (y === 0) {
		this.cell.classList.add('clear');
	}
}


Cell.prototype.change = function(){
  if(this.active){
	
    if (this.near < 2 || this.near > 3) {
			this.active=false;
			this.cell.classList.remove('active');
    }
  }else if (this.near === 3) {
    this.active = true;
    this.cell.classList.add('active');
  }
	this.near=0;
}

Cell.prototype.nb=function(Cell){
  if (Cell.active) {
		this.near++;
	} 
}

var temp = [];
var count = 0;

function alive(){
  for (var i = 0; i < obj.length; i++) {
    for (var j = 0; j < obj[i].length; j++)
 	{ 
		 
			array[i][j].change();
    }
	}
}



var array=[];
var active = 1;

for (var i = 0; i < obj.length; i++) {
array[i] = []
temp[i] = [];
  for (var j = 0; j < obj.length; j++) {
   temp[i][j] = array[i][j] = (new Cell(i,j, parseInt(obj[i][j])));
	}
}

//check for neighbours
function nb(){
  for( var i = 0; i < obj.length; i++ ){
  			for( var j = 0; j < obj[i].length; j++ ){
  				if( i === 0 && j === 0 ){ //left up corner position
            array[i][j].nb(array[i][j+1]);
  					array[i][j].nb(array[i+1][j+1]);
  					array[i][j].nb(array[i+1][j]);
  				}	else if( i === 0 && j === array[i].length-1){ // left down corner position
  					array[i][j].nb(array[i][j-1]);
  					array[i][j].nb(array[i+1][j-1]);
  					array[i][j].nb(array[i+1][j]);
  				}else if( i === array.length-1 && j ===0){ //right up corner position
  					array[i][j].nb(array[i-1][j]);
  					array[i][j].nb(array[i-1][j+1]);
  				  array[i][j].nb(array[i][j+1]);
  				}else if( i === array.length-1 && j === array[i].length-1){ //right down corner position
  					array[i][j].nb(array[i-1][j]);
  					array[i][j].nb(array[i-1][j-1]);
  					array[i][j].nb(array[i][j-1]);
  				}else if( i === 0 ){ // left margin position
  					array[i][j].nb(array[i][j-1]);
  					array[i][j].nb(array[i][j+1]);
  					array[i][j].nb(array[i+1][j-1]);
  					array[i][j].nb(array[i+1][j]);
  					array[i][j].nb(array[i+1][j+1]);
  				}else if( i === array.length-1 ){ //right margin position
  					array[i][j].nb(array[i][j-1]);
  					array[i][j].nb(array[i][j+1]);
  					array[i][j].nb(array[i-1][j-1]);
  					array[i][j].nb(array[i-1][j]);
  					array[i][j].nb(array[i-1][j+1]);
  				}else if( j === 0 ){ //top margin position
  					array[i][j].nb(array[i-1][j]);
  					array[i][j].nb(array[i+1][j]);
  					array[i][j].nb(array[i-1][j+1]);
  					array[i][j].nb(array[i][j+1]);
  					array[i][j].nb(array[i+1][j+1]);
  				}else if( j === array[i].length-1 ){  //bottom margin position
  					array[i][j].nb(array[i-1][j]);
  					array[i][j].nb(array[i+1][j]);
  					array[i][j].nb(array[i-1][j-1]);
  					array[i][j].nb(array[i][j-1]);
  					array[i][j].nb(array[i+1][j-1]);
  				}else{  // somewhere in center
  					array[i][j].nb(array[i][j-1]);
  					array[i][j].nb(array[i][j+1]);
  					array[i][j].nb(array[i-1][j-1]);
  					array[i][j].nb(array[i-1][j]);
  					array[i][j].nb(array[i-1][j+1]);
  					array[i][j].nb(array[i+1][j-1]);
  					array[i][j].nb(array[i+1][j]);
  					array[i][j].nb(array[i+1][j+1]);
  				}
  			}
  		}  
	}


	

var inter = setInterval(function(){
	
	nb(); alive();
	
},100);

}); 
