# aboutme_portfolio_contact_2 

- 3 different pages of websites linked.
- Aboutme page, Portfolio and Contact 


<img width="1276" alt="Screen Shot 2020-11-09 at 9 32 05 AM" src="https://user-images.githubusercontent.com/70460020/98557852-b8625400-2272-11eb-8807-efabf975151f.png">
<img width="1097" alt="Screen Shot 2020-11-09 at 9 36 35 AM" src="https://user-images.githubusercontent.com/70460020/98557856-b9938100-2272-11eb-8bc6-92afcb10b472.png">
<img width="1075" alt="Screen Shot 2020-11-09 at 9 40 52 AM" src="https://user-images.githubusercontent.com/70460020/98557859-bb5d4480-2272-11eb-9fd0-3d7b38ee1e7c.png">

## NAV Bar 
1. First of all, you can go to each websites 
when hover over nav bar menus, color of the menu link change to blue color 
<img width="337" alt="Screen Shot 2020-11-09 at 9 32 24 AM" src="https://user-images.githubusercontent.com/70460020/98558079-00817680-2273-11eb-993c-03ddfe8ad372.png">
2. This Nav bar also featuring as *responsive*.
when window size gets smaller all menus invisible. 
and small blue *hamberger icon* will appear at top right side of corner of the nav bar. 
<img width="684" alt="Screen Shot 2020-11-09 at 9 35 06 AM" src="https://user-images.githubusercontent.com/70460020/98558131-0f682900-2273-11eb-801b-4c63ded56cc0.png">
3. Once you click *hamberger bar* all menus appear. Javascript function by adding *element.classList.toggle("classname")*

`const toggleBtn = document.querySelector(". navbar-toggleBtn");
        const  list = document.querySelector(".navbar-list");
        const  icons = document.querySelector(".navbar-icons");

        toggleBtn.addEventListener("click", function(){
            list.classList.toggle("active");
            icons.classList.toggle("active");
        });`
and also CSS
`  .navbar-list.active,
         .navbar-icons.active{
             display: flex;
         }`
   
<img width="686" alt="Screen Shot 2020-11-09 at 9 33 00 AM" src="https://user-images.githubusercontent.com/70460020/98558140-1131ec80-2273-11eb-98ca-41da028e2e9e.png">

4. add Social media web icons and also add hover effect using *hover.css* 

<img width="164" alt="Screen Shot 2020-11-09 at 9 32 16 AM" src="https://user-images.githubusercontent.com/70460020/98558144-12631980-2273-11eb-9c10-7b6b8d28e773.png">

##Contact page

1. add more *Pseudoclass* via *hover.css*  hover over input area .. area grows and once focused color of input area change. 

<img width="1067" alt="Screen Shot 2020-11-09 at 9 35 41 AM" src="https://user-images.githubusercontent.com/70460020/98559831-16903680-2275-11eb-9828-afed623e54fc.png">

2. Submit button size also grow when hover.
<img width="712" alt="Screen Shot 2020-11-09 at 9 35 54 AM" src="https://user-images.githubusercontent.com/70460020/98559838-1859fa00-2275-11eb-809d-580e07de22c4.png">

## Wallpaper image.

Wallpaper image changed ad screen size gets smaller .. 
`@media screen and (max-width:992px){

    .mainbox { background-image: url('Portfolio photos/ROSE.jpg');
        background-repeat: repeat-y;
         width:100%;
        margin: 20px auto;
    
} 
    .myphoto{
        widows: 100%;
        margin:10px auto;
    }
}`

<img width="682" alt="Screen Shot 2020-11-09 at 9 34 44 AM" src="https://user-images.githubusercontent.com/70460020/98561354-ce721380-2276-11eb-8b23-6b855d1828fa.png">
<img width="497" alt="Screen Shot 2020-11-09 at 9 37 54 AM" src="https://user-images.githubusercontent.com/70460020/98561360-d03bd700-2276-11eb-9936-5f708c4cb8a2.png">
<img width="496" alt="Screen Shot 2020-11-09 at 9 41 10 AM" src="https://user-images.githubusercontent.com/70460020/98561365-d0d46d80-2276-11eb-9507-00e529d13663.png">
  