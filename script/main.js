// trigger to play music in the background with sweetalert
window.addEventListener('load', () => {
    Swal.fire({
        title: 'Make sure to turn up the volume!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Okay',
        cancelButtonText: 'Nah',
    }).then((result) => {
        if (result.isConfirmed) {
            document.querySelector('.song').play();
            animationTimeline();
        } else {
            animationTimeline();
        }
    });
});


// animation timeline
const animationTimeline = () => {
    // split chars that needs to be animated individually
    const hbd = document.getElementsByClassName("wish-hbd")[0];

    hbd.innerHTML = `<span>${hbd.innerHTML
        .split("")
        .join("</span><span>")}</span>`;

    const defaultTrans = {
        opacity: 0,
        y: 10
    }

    const defaultTransLeave = {
        opacity: 0,
        y: 10
    }
    
    let currentImageIndex = 1;
    const profilePicture = document.getElementById("imagePath");
    
    setInterval(() => {
        currentImageIndex = Math.floor(Math.random() * 57);
        profilePicture.src = "./img/jane/" + currentImageIndex + ".jpg"
    }, 577); // Change image every 1 second

    // timeline
    const tl = new TimelineMax();

    tl.to(".container", 0.6, {
        visibility: "visible"
    })
    .from(".hi_jane", 0.7, defaultTrans)
    .to(".hi_jane", 0.7, defaultTransLeave, "+=3")


    .from(".happy_birthday", 0.7, defaultTrans)
    .to(".happy_birthday", 0.7, defaultTransLeave, "+=3.5")


    .from(".turning_22", 0.7, defaultTrans)
    .from(".ts_reference", 0.4, defaultTrans, "+=1")
    .to(".turning_22", 0.7, defaultTransLeave, "+=2.5")
    .to(".ts_reference", 0.7, defaultTransLeave, "-=1")


    .from(".thinking", 0.7, defaultTrans)
    .from(".examples", 0.4, defaultTrans, "+=2.5")
    .to(".thinking", 0.7, defaultTransLeave, "+=4")
    .to(".examples", 0.7, defaultTransLeave, "-=1")


    .from(".you_know", 0.7, defaultTrans)
    .to(".you_know", 0.7, defaultTransLeave, "+=1")

    .from(".busyness", 0.7, defaultTrans)
    .from(".below", 0.4, defaultTrans, "+=0.2")
    .from(".below2", 0.4, defaultTrans, "+=0.3")
    .to(".busyness", 0.7, defaultTransLeave, "+=1.5")
    .to(".below", 0.7, defaultTransLeave, "-=1")
    .to(".below2", 0.7, defaultTransLeave, "-=1")
    
    .from(".you_are_special", 0.7, defaultTrans)
    .to(".you_are_special strong", 0.5, {
        scale: 1.2,
        x: 10,
        backgroundColor: "rgb(21, 161, 237)",
        color: "#fff",
    }, "+=1.5")
    .to(".you_are_special", 0.7, defaultTransLeave, "+=3.5")

    .from(".special_webpage", 0.7, defaultTrans)
    .to(".special_webpage", 0.7, defaultTransLeave, "+=2.7")

    .from(".wish-hbd", 1, {
      opacity: 0,
      y: -50,
      ease: Power4.easeOut,
    }) // Message fades in from above
    .from(
        ".wish h5",
        0.7,
        {
            opacity: 0,
            y: 20,
            skewX: "-15deg",
        },
        "-=0.5"
    ) // Subheading follows the message

    .fromTo(
        ".profile-picture",
        1,
        {
            scale: 0.8,
            opacity: 0,
        },
        {
            scale: 1,
            opacity: 1,
            ease: Elastic.easeOut.config(1, 0.5),
        }
    )
    .staggerFromTo(
        ".baloons img",
        2.7,
        {
            opacity: 0.9,
            y: 1400,
        },
        {
            opacity: 1,
            y: -1000,
            repeat: 2,
            repeatDelay: -0.8,
        },
        0.2,
        "-=1.6"
    )
    .to(".six", 0.5, {
        opacity: 0,
        y: 30,
        zIndex: "-1",
    })


    .from(".thank_you", 0.7, defaultTrans)
    .from(".supporter", 0.4, defaultTrans, "+=1")
    .from(".critic", 0.4, defaultTrans, "+=1")
    .from(".best_friend", 0.4, defaultTrans, "+=1")
    .to(".thank_you", 0.7, defaultTransLeave, "+=4")
    .to(".supporter", 0.7, defaultTransLeave, "-=1")
    .to(".critic", 0.7, defaultTransLeave, "-=1")
    .to(".best_friend", 0.7, defaultTransLeave, "-=1")

    .from(".important", 0.7, defaultTrans)
    .to(".important", 0.7, defaultTransLeave, "+=2.5")

    .from(".last_thanks", 0.7, defaultTrans)
    .to(
        ".last-smile",
        0.5, {
            rotation: 90,
        },
        "+=1"
    )
    .to(".last_thanks", 0.7, defaultTransLeave, "+=4")

    .from(".love", 2, defaultTrans, "+=1")
    .to(".love", 2, defaultTransLeave, "+=5")

    .staggerFrom(".nine p", 1, defaultTrans, 1.2);


    // Restart Animation on click
    const replyBtn = document.getElementById("replay");
    replyBtn.addEventListener("click", () => {
        tl.restart();
        document.querySelector('.song').currentTime = 0;
    });
}
