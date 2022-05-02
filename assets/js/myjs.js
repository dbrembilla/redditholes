document.addEventListener(
    'scroll',
    (event) => {
        document.getElementsByClassName("nav-link scrollto active")[0].classList.add("visible");
    }, 
    { passive: true }
);

function visualize_section(section_name, section_class){
    if (section_name == "close_all"){
        const class_list= ["hole", "hole_a", "hole_b", "hole_c", "cloud", "cloud_1", "cloud_2", "cloud_3"]
        for (y=0;y<class_list.length;y++){
            map_list = document.getElementsByClassName(class_list[y]);
            console.log(map_list)
            for (x=0;x<map_list.length;x++){
                document.getElementsByClassName(class_list[y])[x].classList.add("hide");
                document.getElementsByClassName(class_list[y])[x].classList.remove("display");
            }
        }
    }else{
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
}


function callReddit (text){
    window.open("https://www.reddit.com/r/"+text+"/");
  }
  