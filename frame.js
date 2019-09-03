var fimage=null;
var imgcanvas=null;
var imggray=null;
var imgred=null;
var imggreen=null;
var imgu=null;
var imgindigo=null;
var imgrain=null;
var imgres=null;
function upload(){
  imgcanvas=document.getElementById("can1");
  var fileinput=document.getElementById("finput");
  fimage=new SimpleImage(fileinput);
  imggray=new SimpleImage(fileinput);
  imgred=new SimpleImage(fileinput);
  imgu=new SimpleImage(fileinput);
  imggreen=new SimpleImage(fileinput);
  imgindigo=new SimpleImage(fileinput);
  imgrain=new SimpleImage(fileinput);
  imgres=new SimpleImage(fileinput);
  fimage.drawTo(imgcanvas);
}
function makeGray(){
  imgcanvas=document.getElementById("can1");
  for(var pixel of imggray.values()){
    var avg=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
  imggray.drawTo(imgcanvas);
}
function makeRed(){
  imgcanvas=document.getElementById("can1");
  for(var pixel of imgred.values()){
    pixel.setRed(255);
  }
  imgred.drawTo(imgcanvas);
}
function makeGreen(){
  imgcanvas=document.getElementById("can1");
  for(var pixel of imggreen.values()){
    pixel.setGreen(250);
  }
  imggreen.drawTo(imgcanvas);
}
function makeUnique(){
  imgcanvas=document.getElementById("can1");
  for(var pixel of imgu.values()){
    var avg1=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg1<128){
      pixel.setRed(2*avg1);
      pixel.setGreen(0);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(2*avg1-255);
      pixel.setBlue(2*avg1-255);
    }
  }
  imgu.drawTo(imgcanvas);
}
function makeIndigo(){
  imgcanvas=document.getElementById("can1");
  for(var pixel of imgindigo.values()){
    var avg2=(pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg2<128){
      pixel.setRed(0.8*avg2);
      pixel.setGreen(0);
      pixel.setBlue(2*avg2);
    }
    else{
      pixel.setRed(1.2*avg2-51);
      pixel.setGreen(2*avg2-255);
      pixel.setBlue(255);
    }
  }
  imgindigo.drawTo(imgcanvas);
}
function makeRainbow(){
  var imgcanvas=document.getElementById("can1");
  var fw=imgrain.getWidth();
  var n=(1/3)*fw;
  var r=(1/3)*fw;
  for(var pixel of imgrain.values()){
    if(pixel.getX()<n){
      pixel.setRed(255-pixel.getRed());
    }
    else if(pixel.getX()>=n && pixel.getX()<r){
      pixel.setGreen(255-pixel.getGreen());
    }
    else if(pixel.getX()>=r){
      pixel.setBlue(255-pixel.getBlue());
    }
  }
  imgrain.drawTo(imgcanvas);
}
function reSet(){
  var imgcanvas=document.getElementById("can1");
  imgres.drawTo(imgcanvas);
}




