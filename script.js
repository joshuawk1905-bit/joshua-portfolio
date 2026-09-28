/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");

if (menuButton && mobileNav) {

    menuButton.addEventListener("click", () => {

        mobileNav.classList.toggle("active");

        const icon = menuButton.querySelector("i");

        if (mobileNav.classList.contains("active")) {

            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });


    const mobileLinks =
        mobileNav.querySelectorAll("a");


    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("active");

            const icon =
                menuButton.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        });

    });

}



/* =========================================
   IMAGE MODAL
========================================= */

const imageModal =
    document.getElementById("imageModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");


const previewButtons =
    document.querySelectorAll(
        "[data-preview]"
    );


previewButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const imagePath =
            button.dataset.preview;

        if (!imagePath) {
            return;
        }

        modalImage.src = imagePath;

        imageModal.classList.add("active");

        document.body.classList.add("modal-open");

    });

});


function closeImageModal() {

    imageModal.classList.remove("active");

    document.body.classList.remove("modal-open");

    modalImage.src = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeImageModal
    );

}


if (imageModal) {

    imageModal.addEventListener(
        "click",
        (event) => {

            if (event.target === imageModal) {

                closeImageModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            imageModal.classList.contains("active")
        ) {

            closeImageModal();

        }

    }
);



/* =========================================
   NAVBAR SHADOW ON SCROLL
========================================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 10px 30px rgba(0, 0, 0, 0.25)";

        } else {

            navbar.style.boxShadow =
                "none";

        }

    }
);