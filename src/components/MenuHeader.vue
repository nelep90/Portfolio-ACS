<template>
 <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="navbar navbar-light">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                            <li v-for="menuElem in menuElements" v-bind:key="menuElem.name" class="nav-item">
                                <router-link :to="menuElem.url">{{menuElem.name}}</router-link>
                            </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
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
  }
};
</script>

<style lang="scss" scoped>
 ul {
        display: flex;
        justify-content: space-between;
        list-style-type: none;
        max-width:1300px;
        margin: 0 auto;
    }
    @media screen and (max-width: 640px) {
        ul {
            display: block;
        }
    }
</style>