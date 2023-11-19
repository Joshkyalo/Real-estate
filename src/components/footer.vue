<template>
 
<v-footer border color="blue" >
    <v-row justify="center" align="center" class="ma-1"> 

   <p class="ma-4"> Prop-Connect @ {{currentDate.getFullYear()}} </p>
   <p class="ma-4"> Legal </p>
   <p class="ma-4">Privacy</p>
   <P class="ma-4">Terms </P>
   <p class="ma-4"> Cookies</p>
</v-row>
</v-footer>


</template>



<script>

export default {
    data() {
        return {
            currentDate: new Date,
        }
    }
}
</script>