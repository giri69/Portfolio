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
  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('img');
    let imagesLoaded = 0;

    function imageLoaded() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            const loader = document.querySelector('.loader-container');
            const container = document.querySelector('.container');

            setTimeout(() => {
                loader.style.display = 'none';
                container.style.opacity = '1';
                locoScroll.update(); // Update Locomotive Scroll
            }, 1000); // Adjust the duration as needed
        }
    }

    images.forEach(img => {
        if (img.complete) {
            imageLoaded();
        } else {
            img.addEventListener('load', imageLoaded);
        }
    });

    
});
  