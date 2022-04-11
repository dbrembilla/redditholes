document.addEventListener(
    'scroll',
    (event) => {
        document.getElementsByClassName("nav-link scrollto active")[0].classList.add("visible");
    }, 
    { passive: true }
);

function visualize_section(section_name, section_class){
    map_list = document.getElementsByClassName(section_class);
    if (document.getElementById(section_name).classList.contains("hide")){
        for (x=0;x<map_list.length;x++){
            document.getElementsByClassName(section_class)[x].classList.add("hide");
            document.getElementsByClassName(section_class)[x].classList.remove("display");
        }
        document.getElementById(section_name).classList.remove("hide");
        document.getElementById(section_name).classList.add("display");
    } else {
        document.getElementById(section_name).classList.add("hide");
        document.getElementById(section_name).classList.remove("display");
    }  
}