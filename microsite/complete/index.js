// home page animation 
document.addEventListener("DOMContentLoaded", function() {
    const frames = document.querySelectorAll(".frame");
    console.log(frames);
    let currentFrame = 0;
  
    function showFrame(frameIndex) {
        frames.forEach(frame => frame.classList.remove("active"));
        frames[frameIndex].classList.add("active");
    }
  
    function animateFrames() {
        showFrame(currentFrame);
        if(currentFrame == 5){
          currentFrame = 0;
          setTimeout(animateFrames, 1000); 
        }
        else{
          currentFrame++;
          setTimeout(animateFrames, 300); 
        }
  
    }
  
    animateFrames();
  });
  