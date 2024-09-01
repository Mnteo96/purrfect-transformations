// let bengalBtn = document.getElementById('bengal-kitten-btn');
// let maincoonBtn = document.getElementById('maincoon-kitten-btn');
// let persianBtn = document.getElementById('persian-kitten-btn');
// let scottishBtn = document.getElementById('scottish-kitten-btn');
// let siameseBtn = document.getElementById('siamese-kitten-btn');
// let sphinxBtn = document.getElementById('sphinx-kitten-btn');

// //Elso
// bengalBtn.addEventListener('click', function() {
//     let kittenPic = document.getElementById("bengal-kitten-pic");
//     let adultPic = document.getElementById("bengal-adult-pic");
    
//     if (kittenPic.style.display === "none" || kittenPic.style.opacity === "0" || !kittenPic.classList.contains('active')) {
//         adultPic.classList.add('hidden');
//         adultPic.classList.remove('active');

//         kittenPic.classList.add('active');
//         kittenPic.classList.remove('hidden');

//         bengalBtn.textContent = "Make me an adult";
//     } else {
//         kittenPic.classList.add('hidden');
//         kittenPic.classList.remove('active');

//         adultPic.classList.add('active');
//         adultPic.classList.remove('hidden');

//         bengalBtn.textContent = "Make me a kitten";
//     }
// })

// //Masodik
// maincoonBtn.addEventListener('click', function() {
//     let kittenPic = document.getElementById("maincoon-kitten-pic");
//     let adultPic = document.getElementById("maincoon-adult-pic");
    
//     if (kittenPic.style.display === "none" || kittenPic.style.opacity === "0" || !kittenPic.classList.contains('active')) {
//         adultPic.classList.add('hidden');
//         adultPic.classList.remove('active');

//         kittenPic.classList.add('active');
//         kittenPic.classList.remove('hidden');

//         maincoonBtn.textContent = "Make me an adult";
//     } else {
//         kittenPic.classList.add('hidden');
//         kittenPic.classList.remove('active');

//         adultPic.classList.add('active');
//         adultPic.classList.remove('hidden');

//         maincoonBtn.textContent = "Make me a kitten";
//     }
// })

// //Harmadik
// persianBtn.addEventListener('click', function() {
//     let kittenPic = document.getElementById("persian-kitten-pic");
//     let adultPic = document.getElementById("persian-adult-pic");
    
//     if (kittenPic.style.display === "none" || kittenPic.style.opacity === "0" || !kittenPic.classList.contains('active')) {
//         adultPic.classList.add('hidden');
//         adultPic.classList.remove('active');

//         kittenPic.classList.add('active');
//         kittenPic.classList.remove('hidden');

//         persianBtn.textContent = "Make me an adult";
//     } else {
//         kittenPic.classList.add('hidden');
//         kittenPic.classList.remove('active');

//         adultPic.classList.add('active');
//         adultPic.classList.remove('hidden');

//         persianBtn.textContent = "Make me a kitten";
//     }
// })

// //Negyedik
// scottishBtn.addEventListener('click', function() {
//     let kittenPic = document.getElementById("scottish-kitten-pic");
//     let adultPic = document.getElementById("scottish-adult-pic");
    
//     if (kittenPic.style.display === "none" || kittenPic.style.opacity === "0" || !kittenPic.classList.contains('active')) {
//         adultPic.classList.add('hidden');
//         adultPic.classList.remove('active');

//         kittenPic.classList.add('active');
//         kittenPic.classList.remove('hidden');

//         scottishBtn.textContent = "Make me an adult";
//     } else {
//         kittenPic.classList.add('hidden');
//         kittenPic.classList.remove('active');

//         adultPic.classList.add('active');
//         adultPic.classList.remove('hidden');

//         scottishBtn.textContent = "Make me a kitten";
//     }
// })


// //Ötödik
// siameseBtn.addEventListener('click', function() {
//     let kittenPic = document.getElementById("siamese-kitten-pic");
//     let adultPic = document.getElementById("siamese-adult-pic");
    
//     if (kittenPic.style.display === "none" || kittenPic.style.opacity === "0" || !kittenPic.classList.contains('active')) {
//         adultPic.classList.add('hidden');
//         adultPic.classList.remove('active');

//         kittenPic.classList.add('active');
//         kittenPic.classList.remove('hidden');

//         siameseBtn.textContent = "Make me an adult";
//     } else {
//         kittenPic.classList.add('hidden');
//         kittenPic.classList.remove('active');

//         adultPic.classList.add('active');
//         adultPic.classList.remove('hidden');

//         siameseBtn.textContent = "Make me a kitten";
//     }
// })

let swiperCards = new Swiper('.cat-container', {
    loop: false,
    spaceBetween: 10,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    breakpoints: {
        600:{
            slidesPerView: 2,
        },

        968:{
            slidesPerView: 3,
        },
    }
  });


document.addEventListener('click', function(event) {
    if (event.target.classList.contains('transform-btn')) {
        let button = event.target;
        let kittenPic = document.getElementById(button.getAttribute('data-kitten-id'));
        let adultPic = document.getElementById(button.getAttribute('data-adult-id'));

        if (kittenPic.classList.contains('hidden') || !kittenPic.classList.contains('active')) {
            // Átváltás felnőtt cicáról kiscicára
            adultPic.classList.add('hidden');
            adultPic.classList.remove('active');

            kittenPic.classList.add('active');
            kittenPic.classList.remove('hidden');

            // Gomb szövegének frissítése
            button.textContent = "Make me an adult";
        } else {
            // Átváltás kiscicáról felnőtt cicára
            kittenPic.classList.add('hidden');
            kittenPic.classList.remove('active');

            adultPic.classList.add('active');
            adultPic.classList.remove('hidden');

            // Gomb szövegének frissítése
            button.textContent = "Make me a kitten";
        }
    }
});





  