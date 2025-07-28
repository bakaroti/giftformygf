// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
  Swal.fire({
    title: 'Mau denger musiknya di latar belakang?',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
    imageWidth: 60,
    imageHeight: 60,
    imageAlt: 'Love icon',
    showCancelButton: true,
    confirmButtonColor: '#e91e63',
    cancelButtonColor: '#9e9e9e',
    confirmButtonText: 'Putar Musik',
    cancelButtonText: 'Tanpa Musik',
  }).then((result) => {
    // >>> MASUKIN FULLSCREEN DI SINI
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    }

    // >>> JALANKAN MUSIK & ANIMASI
    if (result.isConfirmed) {
      document.querySelector('.song').play();
    }

    animationTimeline();
  });
});





// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const ideaTextTrans = {
        opacity: 0,
        y: -20,
        rotationX: 5,
        skewX: "15deg"
    }

    const ideaTextTransLeave = {
        opacity: 0,
        y: 20,
        rotationY: 5,
        skewX: "-15deg"
    }

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".one", 0.7, {
        opacity: 0,
        y: 10
    })
    .from(".two", 0.4, {
        opacity: 0,
        y: 10
    })
    .to(".one",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3.5")
    .to(".two",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "-=1")
    .from(".three", 0.7, {
        opacity: 0,
        y: 10
    })
    .to(".three",
        0.7,
        {
            opacity: 0,
            y: 10
        },
    "+=3")
    .from(".four", 0.7, {
        scale: 0.2,
        opacity: 0,
    })
    .from(".fake-btn", 0.3, {
        scale: 0.2,
        opacity: 0,
    })
    .staggerTo(
        ".hbd-chatbox span",
        1.5, {
            visibility: "visible",
        },
        0.05
    )
    .to(".fake-btn", 0.1, {
        backgroundColor: "rgb(127, 206, 248)",
    },
    "+=4")
    .to(
        ".four",
        0.5, {
            scale: 0.2,
            opacity: 0,
            y: -150
        },
    "+=1")
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=2.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=2.5")
    .from(
        ".idea-5",
        0.7, {
            rotationX: 15,
            rotationZ: -10,
            skewY: "-5deg",
            y: 50,
            z: 10,
            opacity: 0,
        },
        "+=1.5"
    )
    .to(
        ".idea-5 span",
        0.7, {
            rotation: 90,
            x: 8,
        },
        "+=1.4"
    )
    .to(
        ".idea-5",
        0.7, {
            scale: 0.2,
            opacity: 0,
        },
        "+=2"
    )
    .staggerFrom(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: 15,
            ease: Expo.easeOut,
        },
        0.2
    )
    .staggerTo(
        ".idea-6 span",
        0.8, {
            scale: 3,
            opacity: 0,
            rotation: -15,
            ease: Expo.easeOut,
        },
        0.2,
        "+=1.5"
    )
    .staggerFromTo(
        ".baloons img",
        2.5, {
            opacity: 0.9,
            y: 1400,
        }, {
            opacity: 1,
            y: -1000,
        },
        0.2
    )
    .from(
        ".profile-picture",
        0.5, {
            scale: 3.5,
            opacity: 0,
            x: 25,
            y: -25,
            rotationZ: -45,
        },
        "-=2"
    )
    .from(".hat", 0.5, {
        x: -100,
        y: 350,
        rotation: -180,
        opacity: 0,
    })
    .staggerFrom(
        ".wish-hbd span",
        0.7, {
            opacity: 0,
            y: -50,
            // scale: 0.3,
            rotation: 150,
            skewX: "30deg",
            ease: Elastic.easeOut.config(1, 0.5),
        },
        0.1
    )
    .staggerFromTo(
        ".wish-hbd span",
        0.7, {
            scale: 1.4,
            rotationY: 150,
        }, {
            scale: 1,
            rotationY: 0,
            color: "#ff69b4",
            ease: Expo.easeOut,
        },
        0.1,
        "party"
    )
    .from(
        ".wish h5",
        0.5, {
            opacity: 0,
            y: 10,
            skewX: "-15deg",
        },
        "party"
    )
    .staggerTo(
  ".eight svg",
  1.5,
  {
    visibility: "visible",
    opacity: 0,
    scale: 80,
    repeat: 3,
    repeatDelay: 1.4,
    onStart: () => startLoveFireworks()
  },
  0.3,
  "+=1"
)

    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    );

    // Restart Animation on click
    document.getElementById("replay").addEventListener("click", () => {
  location.reload();
});

}
const heartContainer = document.querySelector('.heart-container');

  function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 5) + 's';
    heartContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 7000);
  }

  setInterval(createHeart, 300);
    const textContainer = document.querySelector('.falling-text-container');
  const texts = ['lav uu', 'sayangku', 'cintaku'];

  function createFallingText() {
  const span = document.createElement('span');
  span.classList.add('falling-text');
  span.innerText = texts[Math.floor(Math.random() * texts.length)];
  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = (Math.random() * 10 + 18) + 'px';
  span.style.animationDuration = (Math.random() * 3 + 6) + 's';
  textContainer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 8000);
}

// 🔥 Tambahkan baris ini:
setInterval(createFallingText, 400);


  function startLoveFireworks() {
  const container = document.querySelector('.love-fireworks-container');
  const loveTypes = ['❤️', '💖', '💘', '💝', '💞', '💓'];

  let count = 0;
  const maxRepeat = 5;

  const interval = setInterval(() => {
    const originX = Math.random() * window.innerWidth;
    const originY = Math.random() * window.innerHeight;

    for (let i = 0; i < 20; i++) {
      const span = document.createElement('span');
      span.classList.add('love-particle');

      // Ambil love acak
      span.textContent = loveTypes[Math.floor(Math.random() * loveTypes.length)];

      // Posisi acak untuk ledakan
      const dx = (Math.random() - 0.5) * 200 + 'px';
      const dy = (Math.random() - 0.5) * 200 + 'px';

      span.style.left = originX + 'px';
      span.style.top = originY + 'px';
      span.style.setProperty('--dx', dx);
      span.style.setProperty('--dy', dy);

      container.appendChild(span);

      // Hapus partikel setelah selesai
      setTimeout(() => span.remove(), 1000);
    }

    count++;
    if (count >= maxRepeat) clearInterval(interval);
  }, 1000);
}
