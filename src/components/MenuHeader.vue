<template>
<div class="navbar">
    <router-link class="desc" to="/"><img class="logo" src="static/assets/images/home.png" alt="home"></router-link>
      <router-link class="desc" to="/Cv"><img class="logo" src="static/assets/images/cv.png" alt="CV"></router-link>
      <router-link class="desc" to="/Projets"><img class="logo" src="static/assets/images/project.png" alt="Projets"></router-link>
      <router-link class="desc" to="/About"><img class="logo" src="static/assets/images/icon.png" alt="About"></router-link>
      <router-link class="desc" to="/Contact"><img class="logo" src="static/assets/images/mail.png" alt="contact"></router-link>  
</div>
<!-- <nav role="navigation">
  <div id="menuToggle">
    
    <input type="checkbox" />
  
    <span></span>
    <span></span>
    <span></span>
   
    <ul  id="menu" >
      <li  v-for="menuElem in menuElements" v-bind:key="menuElem.name" class="nav-item">
                                <router-link :to="menuElem.url">{{menuElem.name}}</router-link>
                            </li>
    </ul>
  </div>
  
</nav> -->

</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      menuElements: [
        {
          url: "/",
          name: "Home"
        },
        {
          url: "/Cv",
          name: "Cv"
        },
        {
          url: "/Projets",
          name: "Projets"
        },
        {
          url: "/About",
          name: "About"
        },
        {
          url: "/Contact",
          name: "Contact"
        }
      ]
    };
  },isShowing:true,
};

</script>

<style lang="scss" scoped>
// iframe {
//   display:block;
//   margin-top: 20px;
//   margin-left: 200px;
//   width:850px;
//   height:300px;
// }

//  ul {
//         display: flex;
//         justify-content: space-between;
//         list-style-type: none;
//         max-width:1300px;
//         margin: 0 auto;
//     }
//     @media screen and (max-width: 640px) {
//         ul {
//             display: block;
//         }
//     }

// body
// {
//   margin: 0;
//   padding: 0;
//   margin-left: 15%;
//   /* make it look decent enough */
//   background: #232323;
//   color: #cdcdcd;
//   font-family: "Avenir Next", "Avenir", sans-serif;
// }

// a
// {
//   text-decoration: none;
//   color: #232323;
  
//   transition: color 0.3s ease;
// }

// a:hover
// {
//   color: tomato;

// }

// #menuToggle
// {
//   display: block;
//   position: relative;
//   top: 0px;
//   z-index: 1;
  
//   -webkit-user-select: none;
//   user-select: none;
// }

// #menuToggle input
// {
//   display: block;
//   width: 40px;
//   height: 32px;
//   position: absolute;
//   top: -7px;
//   left: -5px;
  
//   cursor: pointer;
  
//   opacity: 0; /* hide this */
//   z-index: 2; /* and place it over the hamburger */  
//   -webkit-touch-callout: none;
// }

// #menuToggle span
// {
  
//   display: block;
//   width: 33px;
//   height: 4px;
//   margin-bottom: 5px;
//   position: relative;  
//   background: #cdcdcd;
//   border-radius: 3px;
  
//   z-index: 1;
  
//   transform-origin: 4px 0px;
  
//   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//               background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
//               opacity 0.55s ease;
// }
// .showme{ 
//    display: none;
//  }

// #menuToggle span:first-child
// {
//   transform-origin: 0% 0%;
// }

// #menuToggle span:nth-last-child(2)
// {
//   transform-origin: 0% 100%;
// }

// #menuToggle input:checked ~ span
// {
//   opacity: 1;
//   transform: rotate(45deg) translate(-2px, -1px);
//   background: #232323;
// }

// #menuToggle input:checked ~ span:nth-last-child(3)
// {
//   opacity: 0;
//   transform: rotate(0deg) scale(0.2, 0.2);
// }

// #menuToggle input:checked ~ span:nth-last-child(2)
// {
//   transform: rotate(-45deg) translate(0, -1px);
// }

// #menu
// {
//   position: absolute;
//   width: auto;
//   margin: -100px 0 0 -50px;
//   padding: 50px;
//   padding-top: 125px;
  
//   background: #ededed;
//   list-style-type: none;
//   -webkit-font-smoothing: antialiased;
//   /* to stop flickering of text in safari */
  
//   transform-origin: 0% 0%;
//   transform: translate(-100%, 0);
  
//   transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
// }

// #menu li
// {
//   padding: 10px 0;
//   font-size: 22px;
  
// }

// #menuToggle input:checked ~ ul
// {
//   transform: none;
// }
.navbar {
  text-align: center;
    justify-content: center;
  overflow: hidden;
  background-color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
}

.navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.navbar a:hover {
  background: white;
  color: black;
}

.navbar a.active {
  background-color: #4CAF50;
  color: white;
}

.main {
  padding: 16px;
  margin-bottom: 30px;
}
</style>