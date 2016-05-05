 $(function(){
            var canvas = document.getElementById('canvas');  
            var ctx = canvas.getContext('2d');  
            canvas.width = canvas.parentNode.clientWidth;  
            canvas.height = canvas.parentNode.clientHeight;
            console.log(canvas.height);
            window.requestAnimFrame = (function(){  
                return  window.requestAnimationFrame       ||  
                        window.webkitRequestAnimationFrame ||  
                        window.mozRequestAnimationFrame    ||  
                function( callback ){  
                    window.setTimeout(callback, 1000 / 60);  
                };  
            })();  
            var step = 0;      //初始角度为0
            var lines = ["rgba(0,222,255, 0.2)",   //定义三条不同波浪的颜色 
                        "rgba(157,192,249, 0.2)",  
                        "rgba(0,168,255, 0.2)"];  
            function loop(){  
                ctx.clearRect(0,0,canvas.width,canvas.height);  
                step++;  
                for(var j = lines.length - 1; j >= 0; j--) {     //画3个不同颜色的矩形 
                    ctx.fillStyle = lines[j];  
                    var angle = (step+j*45)*Math.PI/180;  //每个矩形的角度都不同，每个之间相差45度 
                    var deltaHeight   = Math.sin(angle) * 50;  
                    var deltaHeightRight   = Math.cos(angle) * 50;  
                    ctx.beginPath();  
                    ctx.moveTo(0, canvas.height/1.8+deltaHeight);  
                    ctx.bezierCurveTo(canvas.width /1.8, canvas.height/1.8+deltaHeight-50, canvas.width / 1.8, canvas.height/1.8+deltaHeightRight-50, canvas.width, canvas.height/1.8+deltaHeightRight);  
                    ctx.lineTo(canvas.width, canvas.height);  
                    ctx.lineTo(0, canvas.height);  
                    ctx.lineTo(0, canvas.height/2+deltaHeight);  
                    ctx.closePath();  
                    ctx.fill();  
                }  
                requestAnimFrame(loop);  
            }  
            loop();
        }); 