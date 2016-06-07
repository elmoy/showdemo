   $(function() {
  
  // Set canvas drawing surface
  var space = document.getElementById("surface");
  var surface = space.getContext("2d");
  surface.scale(1,1);

  // Set Particles
  var particles = [];
  var particle_count = 150;
  for(var i = 0; i < particle_count; i++) {
    particles.push(new particle());
  }
  var time = 0;
  // Set wrapper and canvas items size
  var canvasWidth=100 + '%';
  var canvasHeight=100 + '%';
  $(".wrapper").css({width:canvasWidth,height:canvasHeight});
  $("#surface").css({width:canvasWidth,height:canvasHeight});

  // shim layer with setTimeout fallback from Paul Irish
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 6000 / 60);
            };
  })(); 

  function particle() {
     
    this.speed = {x: -1+Math.random()*2, y: -5+Math.random()*5};
     canvasWidth = (document.getElementById("surface").width);
     canvasHeight= (document.getElementById("surface").height);
     this.location = {x: canvasWidth/2+10, y: (canvasHeight/2)+45};

    this.radius = .5+Math.random()*35;

    this.life = 10+Math.random()*10;
    this.death = this.life;

    this.r = 255;
    this.g = Math.round(Math.random()*155);
    this.b = 0;
  }
  
  function ParticleAnimation(){
    // surface.globalCompositeOperation = "source-over";
    // surface.fillStyle = "#4BBFC3";

  
    surface.fillRect(0, 0, canvasWidth, canvasHeight);
    // surface.globalCompositeOperation = "lighter";
    
    for(var i = 0; i < particles.length; i++)
    {
      var p = particles[i];
        
      surface.beginPath();

      p.opacity = Math.round(p.death/p.life*100)/100
      var gradient = surface.createRadialGradient(p.location.x, p.location.y, 0, p.location.x+5, p.location.y, p.radius);
      gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
      gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
      gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
      surface.fillStyle = gradient;

// surface.moveTo(p.location.x,p.location.y);

// surface.lineTo(150,100);

// surface.lineTo(100,100);

// surface.closePath();
  var img1 = new Image();
  var img2 = new Image();
  var img3 = new Image();
  var img4 = new Image();
  img1.src = 'img/a1.png';
  img2.src = 'img/a2.png';
  img3.src = 'img/a3.png';
  img4.src = 'img/a4.png';
    img1.onload = function(){
      var swidth = $('.second .logo').width();
      // console.log(swidth)
      surface.drawImage(img1,canvasWidth/3,0, canvasWidth/3,canvasWidth/3);
      surface.drawImage(img2,canvasWidth/3,canvasHeight-canvasWidth/6, canvasWidth/5,canvasWidth/6);
      surface.drawImage(img3,canvasWidth/1.85,canvasHeight-canvasWidth/9, canvasWidth/9,canvasWidth/9);
      surface.drawImage(img4,canvasWidth/1.7,canvasHeight-canvasWidth/6, canvasWidth/18,canvasWidth/18);
    }
      surface.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
      surface.fill();
      p.death--;
      p.radius++;
      p.location.x += (p.speed.x);
      p.location.y += (p.speed.y);
      
      //regenerate particles
      if(p.death < 0 || p.radius < 0){
        //a brand new particle replacing the dead one
        particles[i] = new particle();
      }
    }


    
  requestAnimFrame(ParticleAnimation);

}

ParticleAnimation();

});
