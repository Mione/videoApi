var mio = mio || {};

mio.video = (function (document) {
    'use strict';
    var init = function (options, parent) {
        var video = document.createElement('video');
        video.style.width = '100%';
        video.style.height = '100%';
        //video.setAttribute('autoplay', '');
        for(var key in options.sources){
          var source = document.createElement('source');
          source.src = options.sources[key];
          source.type = options.types[key];
          video.appendChild(source);
      }

      parent.appendChild(video);
    };

    return {
      init: init,

    };

}(window.document));

var options = {
  sources : ['video/bum.mp4','dunk.mp4'],
  types :['video/mp4', 'video/mp4']
  },
  videoContainer = document.querySelector('.video__container'),
  playBtn = document.querySelector('.play_border'),
  video;


mio.video.init(options, videoContainer);
video = videoContainer.querySelector('video');
playBtn.addEventListener('click', function () {
  if (video.paused) {
    video.play();
  }
  else{
    video.pause();
  }
});