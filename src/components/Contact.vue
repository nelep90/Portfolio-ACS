<template>
<div class="contact">
    <h3>Contact</h3>    
    <form id="form" class="form" @submit.prevent="onSubmit" method="post" action="static/model/traitement_formulaire.php">
      <div class="input">
        <label for="lastName"></label>
        <input :class="{ error: $v.lastName.$error}" type="text" id="lastName" v-model.trim="lastName" @input="$v.lastName.$touch()" placeholder="Votre nom">
        <div v-if="$v.lastName.$dirty">
          <p class="error-message" v-if="!$v.lastName.required">Un nom est obligatoire.</p>
        </div>
      </div>
      <div class="input">
        <label for="firstName"></label>
        <input :class="{ error: $v.firstName.$error }" type="text" id="firstName" v-model.trim="firstName" @input="$v.firstName.$touch()" placeholder="Votre prénom">
        <div v-if="$v.firstName.$dirty">
          <p class="error-message" v-if="!$v.firstName.required">Un prénom est obligatoire.</p>
        </div>
      </div>
         <div class="input">
        <label for="email"></label>
        <input :class="{ error: $v.email.$error }" type="text" id="email" v-model.trim="email" placeholder="Votre adresse mail">
        <div v-if="$v.email.$dirty">
          <p class="error-message" v-if="!$v.email.required">Une adresse mail est obligatoire.</p>
          <p class="error-message" v-if="!$v.email.email">Entrer une adresse mail valide !</p>
        </div>
      </div>
      <div class="input">
        <label for="message"></label>
        <textarea :class="{ error: $v.message.$error }" type="textarea" id="message" v-model.trim="message" @input="$v.message.$touch()" placeholder="Votre message"></textarea>
        <div v-if="$v.message.$dirty">
          <p class="error-message" v-if="!$v.message.required">Un message est obligatoire.</p>
        </div>
      </div>
      <button class="btn" name="envoi" type="submit" @click="validate"><span class="center">Envoyer</span></button>
    </form>
    
  </div>


</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      form: {
        lastName: '',
        firstName: '',
        email: '',
        message: ''
      },
      info: {}
    }
  },
  methods: {
    validate () {
      console.log('hihi')
      this.$v.$touch() // it will validate all fields
      if (!this.$v.$invalid) { // invalid, becomes true when a validations return false
      //  you dont have validation error.So do what u want to do here
        console.log(this.lastName)
      }
      var formData = new FormData()
      formData.append('lastName', this.lastName)
      formData.append('firstName', this.firstName)
      formData.append('email', this.email)
      formData.append('message', this.message)
      
    },
    onSubmit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  validations: {
    lastName: {
      required
    },
    firstName: {
      required
    },
    email: {
      required,
      email
    },
    message: {
      required
    }
  } 
}
  </script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 640px){
.nav{
 border-radius: 20px;
 display: flex;
 justify-content: space-around;
 position: fixed;
 width: 100%;
 padding-top: 3%;
 bottom: 0;
 background-color: #ddf2ff;
 border-top: #003150 solid 2px;
}
.desc{
  width: 50px;
  height: 50px;
}
.logo{
  width: 90%;
  height: 90%;
}
.phone{
  width: 50px;
  height: 50px;
}
.tel{
  display: flex;
  margin: auto;
  margin-left: 15px;
}
.number{
  margin: 0;
  margin-top: 17px;
}
input{
  width: 80%;
 margin-bottom: 5%;
 border-radius: 20px;
  color: #003150;
  font-size: 22px;
  font-family: "blue";
}
.champs{
  margin: auto;
  margin-top: 20px;
  text-align: center;
}
textarea{
  width: 82%;
  height: 100px;
  padding-top: 5px;
  border-radius: 10px;
  color: #003150;
  font-size: 22px;
  border-radius: 20px;
  font-family: "blue";
  background-color: rgb(250, 250, 250);
}
button{
  height: 40px;
  margin-top: 30px;
}
.number{
  color: #003150;
  font-family: "blue";
  font-size: 24px;
  text-align: center;
  text-decoration: none;
  }
.contact{
  margin-bottom: 25%;
}
.form {
 display: inline;
 text-align: center;
}
.validators {
 display: inline-block;
 text-align: center;
 vertical-align: top;
}
.input {
 padding: 5px;
}
input:focus {
  outline: none;
}
.error {
  color: red;
  border: 1px solid red;
}
.error-message {
 font-size: 15px;
 color: red;
}

.center{
  margin: auto;
}
}
</style>
