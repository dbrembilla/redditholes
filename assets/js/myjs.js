document.addEventListener(
    'scroll',
    (event) => {
        document.getElementsByClassName("nav-link scrollto active")[0].classList.add("visible");
    }, 
    { passive: true }
);

function visualize_map(map_name, map_class){
    map_list = document.getElementsByClassName(map_class);
    if (document.getElementById(map_name).classList.contains("hide")){
        for (x=0;x<map_list.length;x++){
            document.getElementsByClassName(map_class)[x].classList.add("hide");
            document.getElementsByClassName(map_class)[x].classList.remove("display");
        }
        document.getElementById(map_name).classList.remove("hide");
        document.getElementById(map_name).classList.add("display");
    } else {
        document.getElementById(map_name).classList.add("hide");
        document.getElementById(map_name).classList.remove("display");
    }  
}