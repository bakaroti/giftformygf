// Stay awake + fullscreen + animasi trigger
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
  }).then(async (result) => {
    // 🔁 Fullscreen
    const el = document.documentElement;
    if (el.requestFullscreen) {
      await el.requestFullscreen();
    } else if (el.webkitRequestFullscreen) {
      await el.webkitRequestFullscreen();
    } else if (el.msRequestFullscreen) {
      await el.msRequestFullscreen();
    }

    // 🔒 Wake Lock (stay awake di mobile)
    let wakeLock = null;
    async function requestWakeLock() {
      try {
        wakeLock = await navigator.wakeLock.request('screen');
        wakeLock.addEventListener('release', () => {
          console.log('🔓 Wake Lock released');
        });
        console.log('🔒 Wake Lock active');
      } catch (err) {
        console.error(`${err.name}, ${err.message}`);
      }
    }

    await requestWakeLock();

    // 🔁 If screen turns off and on again
    document.addEventListener('visibilitychange', async () => {
      if (wakeLock !== null && document.visibilityState === 'visible') {
        await requestWakeLock();
      }
    });

    // 🔊 Play music if confirmed
    if (result.isConfirmed) {
      document.querySelector('.song')?.play();
    }

    // 🚀 Start animation
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

  // Style acak biar beda-beda tiap elemen
  const fontSize = (Math.random() * 10 + 18) + 'px';
  const duration = (Math.random() * 3 + 6) + 's';
  const rotate = (Math.random() * 30 - 15) + 'deg';
  const skew = (Math.random() * 10 - 5) + 'deg';

  span.style.left = Math.random() * 100 + 'vw';
  span.style.fontSize = fontSize;
  span.style.setProperty('--duration', duration);
  span.style.setProperty('--rotate', rotate);
  span.style.setProperty('--skew', skew);

  textContainer.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, parseFloat(duration) * 1000 + 2000); // buffer agar nggak hilang terlalu cepat
}

setInterval(createFallingText, 400);



  function startLoveFireworks() {
  const container = document.querySelector('.love-fireworks-container');
  const loveTypes = ['❤️', '💖', '💘', '💝', '💞', '💓', '💕', '💗'];

  function createExplosion(x, y) {
    for (let i = 0; i < 25; i++) {
      const span = document.createElement('span');
      span.classList.add('love-particle');
      span.textContent = loveTypes[Math.floor(Math.random() * loveTypes.length)];

      const dx = (Math.random() - 0.5) * 300 + 'px';
      const dy = (Math.random() - 0.5) * 300 + 'px';
      const fontSize = Math.random() * 18 + 20 + 'px';

      span.style.left = x + 'px';
      span.style.top = y + 'px';
      span.style.setProperty('--dx', dx);
      span.style.setProperty('--dy', dy);
      span.style.fontSize = fontSize;

      container.appendChild(span);
      setTimeout(() => span.remove(), 1500);
    }
  }

  let count = 0;
  const maxCount = 15; // total ledakan
  const delayRange = [300, 1200]; // min-max delay antar ledakan

  function randomDelay(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function triggerNextFirework() {
    if (count >= maxCount) return;

    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight * 0.6;
    createExplosion(x, y);
    count++;

    // jeda random antar ledakan (kayak asli)
    setTimeout(triggerNextFirework, randomDelay(...delayRange));
  }

  triggerNextFirework(); // mulai ledakan
}

