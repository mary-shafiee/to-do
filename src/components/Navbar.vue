

<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase orange--text text--darken-1">
        <span class="font-weight-light">ToDo</span>
        <span>List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn>
        <span>dashboard</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="amber darken-1">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          router
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon class="blue-grey--text text--darken-3">{{item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="blue-grey--text text--darken-3">{{item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

  </nav>
</template>

<script>






export default {


  data() {
    return {
      drawer: false,
      items: [
        { text: "dashboard", icon: "mdi-view-dashboard", route: "/" },
        { text: "My Projects", icon: "mdi-folder", route: "/projects" },
        { text: "Team", icon: "mdi-account-multiple", route: "/team" },
      ],
    };
  },
};
</script>
