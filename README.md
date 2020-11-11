# aboutme_portfolio_contact_2 

### Aboutme page, Portfolio and Contact 
  
- ##### Layout: *BootStrap's Grid system*
- ##### Pseudo Class:  *hover.css*
- ##### Fonts:  *Google fonts*
- ##### Icons:  *fontsawesome*
- ##### Javascript:  *element.classList.toggle("classname")* for toggle menu bar.
- ##### media queries: for *Responsive web page*


<img width="1276" alt="Screen Shot 2020-11-09 at 9 32 05 AM" src="https://user-images.githubusercontent.com/70460020/98557852-b8625400-2272-11eb-8807-efabf975151f.png">

<img width="1097" alt="Screen Shot 2020-11-09 at 9 36 35 AM" src="https://user-images.githubusercontent.com/70460020/98557856-b9938100-2272-11eb-8bc6-92afcb10b472.png">

<img width="1075" alt="Screen Shot 2020-11-09 at 9 40 52 AM" src="https://user-images.githubusercontent.com/70460020/98557859-bb5d4480-2272-11eb-9fd0-3d7b38ee1e7c.png">

#### NAV Bar 

- Featuring with menu bars.  
when hover over nav bar menus, color of the menu link change to blue color.

<img width="337" alt="Screen Shot 2020-11-09 at 9 32 24 AM" src="https://user-images.githubusercontent.com/70460020/98558079-00817680-2273-11eb-993c-03ddfe8ad372.png">

- This Nav bar also featuring as *responsive*.
when window size gets smaller all menus invisible. 
and small blue *hamberger icon* will appear at top right side of corner of the nav bar. 

<img width="684" alt="Screen Shot 2020-11-09 at 9 35 06 AM" src="https://user-images.githubusercontent.com/70460020/98558131-0f682900-2273-11eb-801b-4c63ded56cc0.png">

- Once you click *hamberger bar* all menus appear. Javascript function by adding  *element.classList.toggle("classname")*

`toggleBtn.addEventListener("click", function(){
            list.classList.toggle("active");
            icons.classList.toggle("active");});`

and also CSS
         `.navbar-list.active,
         .navbar-icons.active{
             display: flex;}`
   
<img width="686" alt="Screen Shot 2020-11-09 at 9 33 00 AM" src="https://user-images.githubusercontent.com/70460020/98558140-1131ec80-2273-11eb-98ca-41da028e2e9e.png">

- Social media icons featuring with hover effect.

<img width="164" alt="Screen Shot 2020-11-09 at 9 32 16 AM" src="https://user-images.githubusercontent.com/70460020/98558144-12631980-2273-11eb-9c10-7b6b8d28e773.png">

#### Contact page

- *Pseudoclass* uising *hover.css*  class I used for this web page is class="hvr-grow" 

`.hvr-grow {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: transform;
        transition-property: transform;
      }
      .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
      }`

  - when input area keydown or focused, color of input area change. 

<img width="1067" alt="Screen Shot 2020-11-09 at 9 35 41 AM" src="https://user-images.githubusercontent.com/70460020/98559831-16903680-2275-11eb-9828-afed623e54fc.png">

- Submit button size also grow when hover.
<img width="712" alt="Screen Shot 2020-11-09 at 9 35 54 AM" src="https://user-images.githubusercontent.com/70460020/98559838-1859fa00-2275-11eb-809d-580e07de22c4.png">

##### Media query.

- change background color of contact-box as size smaller. 

<img width="497" alt="Screen Shot 2020-11-11 at 11 51 17 AM" src="https://user-images.githubusercontent.com/70460020/98840106-635e4380-2414-11eb-936d-5ec56d3edd73.png">
  