document.addEventListener(
    'scroll',
    (event) => {
        document.getElementsByClassName("nav-link scrollto active")[0].classList.add("visible");
    }, 
    { passive: true }
);