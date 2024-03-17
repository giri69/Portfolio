const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
     
    multiplier: 1, 
    reloadOnContextChange: true,
    touchMultiplier: 4, 
    smoothMobile: 1,
    smartphone: {
      smooth: !0,
      multiplier: 3,
      breakpoint: 767,
    },
    tablet: {
      smooth: !1,
      multiplier: 3,
      breakpoint: 1024,
    },
  });


function showWebsiteContent() {
    document.getElementById('main').classList.remove('hidden');
    document.getElementById('main').classList.add('visible');
    document.querySelector('.loading-text').classList.add('hidden');
  }
  
  // Show website content after 4 seconds
  setTimeout(showWebsiteContent, 3000);
  