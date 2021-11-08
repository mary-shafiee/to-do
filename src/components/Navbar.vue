

<template>
  <nav>
    <v-toolbar flat app>

      <v-toolbar-title class="text-uppercase orange--text text--darken-1">
        <span class="font-weight-light">ToDo</span>
        <span>List</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="$router.push('dashboard')">
        <span>dashboard</span>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="blue darken-1" :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">

        <v-list-item-avatar>
          <v-img src="/"></v-img>
        </v-list-item-avatar>

        <v-list-item-title > mary Shaffee</v-list-item-title>


        <v-btn
            icon
            @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <v-spacer></v-spacer>


      <v-list>
        <v-list-item
            class="mt-5"
          v-for="(item, i) in items"
          :key="i"
          router
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon class="amber--text text--darken-1" size="33px">{{item.icon }}</v-icon>
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
        { text: "favorite", icon: "mdi-star", route: "/favorite" },
        { text: "inbox", icon: "mdi-inbox", route: "/inbox" },
        { text: "dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
        { text: "My Projects", icon: "mdi-folder", route: "/projects" },
        { text: "Team", icon: "mdi-account-multiple", route: "/team" },
      ],
      mini:true,
    };
  },
};
</script>
