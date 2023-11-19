<template> 
<!-- create a nabvigation bar container with the following requirements -->

<!-- start app bar -->

<!-- changes 
- games 
- legal 
- 

* footer ( separete links leading to home )
-->



 
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar=""
          title="Prop-Connect"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="Buy" value="about"></v-list-item> 
          <v-list-item prepend-icon="mdi-forum" title="Rent" value="about"></v-list-item> 
          <v-list-item prepend-icon="mdi-forum" title="Commercial" value="about"></v-list-item> 
          <v-list-item prepend-icon="mdi-forum" title="Land" value="about"></v-list-item>
          <v-list-item prepend-icon="mdi-fiber-new" title="Post New" value="manage"></v-list-item>
        </v-list>
      </v-navigation-drawer>
     
 
  <!-- end mobile navigation drawer  -->
      <v-app-bar color="blue">


        <template v-slot:image>
          <v-img
            gradient="blue"
          ></v-img>
        </template>

        <template v-slot:prepend>
          <v-app-bar-nav-icon   @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


        <!-- start here nav drawer-->
        <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Pro-Connect</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click=""
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <!-- the end -->
        </template>

        <v-app-bar-title>Pro-Connect</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon   to="/">
          <v-icon>mdi-home</v-icon>
        </v-btn>

        <v-btn icon to='/manage'>
          <v-icon>mdi-account</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

        
      </v-app-bar>


  
    
      
</template>
<script>
  export default {
    data () {
      return { 
        drawer: null,
        items: [
          { title: 'Home', icon: 'dashboard' },
          { title: 'About', icon: 'question_answer' }
        ]
      }
    },
  }
</script>
