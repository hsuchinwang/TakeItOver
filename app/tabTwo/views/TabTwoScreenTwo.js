'use strict'
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Canvas from 'react-native-canvas-native';

function renderCanvas(canvas) {
  alert(this.message);
  // Canvas demo is from here: http://codepen.io/antoniskamamis/pen/ECrKd
  var ctx = canvas.getContext('2d'),
    particles = [],
    patriclesNum = 50,
    w = 200,
    h = 200,
    colors = ['#f35d4f','#f36849','#c0d988','#6ddaf1','#f1e85b'];

  canvas.width = 200;
  canvas.height = 200;
  canvas.style.left = (window.innerWidth - 200)/2+'px';

  if(window.innerHeight>200)
  canvas.style.top = (window.innerHeight - 200)/2+'px';

  function Factory(){  
    this.x =  Math.round( Math.random() * w);
    this.y =  Math.round( Math.random() * h);
    this.rad = Math.round( Math.random() * 1) + 1;
    this.rgba = colors[ Math.round( Math.random() * 3) ];
    this.vx = Math.round( Math.random() * 3) - 1.5;
    this.vy = Math.round( Math.random() * 3) - 1.5;
  }

  function draw(){
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for(var i = 0;i < patriclesNum; i++){
      var temp = particles[i];
      var factor = 1;

      for(var j = 0; j<patriclesNum; j++){

         var temp2 = particles[j];
         ctx.linewidth = 0.5;

         if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<50){
            ctx.strokeStyle = temp.rgba;
            ctx.beginPath();
            ctx.moveTo(temp.x, temp.y);
            ctx.lineTo(temp2.x, temp2.y);
            ctx.stroke();
            factor++;
         }
      }


      ctx.fillStyle = temp.rgba;
      ctx.strokeStyle = temp.rgba;

      ctx.beginPath();
      ctx.arc(temp.x, temp.y, temp.rad*factor, 0, Math.PI*2, true);
      ctx.fill();
      ctx.closePath();

      ctx.beginPath();
      ctx.arc(temp.x, temp.y, (temp.rad+5)*factor, 0, Math.PI*2, true);
      ctx.stroke();
      ctx.closePath();


      temp.x += temp.vx;
      temp.y += temp.vy;

      if(temp.x > w)temp.x = 0;
      if(temp.x < 0)temp.x = w;
      if(temp.y > h)temp.y = 0;
      if(temp.y < 0)temp.y = h;
    }
  }

  function findDistance(p1,p2){  
    return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
  }

  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

  (function init(){
    for(var i = 0; i < patriclesNum; i++){
      particles.push(new Factory);
    }
  })();

  (function loop(){
    draw();
    requestAnimFrame(loop);
  })();
}
export default class TabTwoScreenTwo extends React.Component {
  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
      }}>
        <Text>{ 'Tab Two Screen Two' }</Text>
        <Canvas
          context={{message: 'Hello!'}}
          render={renderCanvas}
          style={{height: 200, width: 200}}
        />
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={{
            padding:20,
            borderRadius:20,
            backgroundColor:'purple',
            marginTop:20
          }}>
          <Text>{'Go back a screen this tab'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
