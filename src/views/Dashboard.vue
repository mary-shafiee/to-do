<template>
  <v-container class="ml-2">
    <v-layout column>
    <h1 class="mb-5 blue-grey--text text--darken-2">To DO List</h1>
    <h3 class="mb-10 pink--text text--lighten-1">Create your project task</h3>
    <v-divider></v-divider>

    <v-flex mx12 md10 class="ma-5" >
      <vform class="mb-5">
      <input  v-model="task" @keyup.enter="addList" type="text" id="input-text" placeholder="inter your task" />
      <v-btn flat class="ml-4" @click="addList"  type="button" id="addButton" >ADD</v-btn>
      </vform>
    </v-flex>
    <v-spacer></v-spacer>
      <v-simple-table class="blue-grey lighten-4" >
        <template v-slot:default >
          <thead  v-if="tasks[0] !== undefined" class="font-weight-bold">
          <tr>
            <th class="text-center headline ">
              TASK
            </th>
            <th class="text-center headline">
              STATUS
            </th>
            <th class="text-center headline" >
              EDIT
            </th>
            <th class="text-center headline">
              DELETE
            </th>
          </tr>
          </thead>
          <tbody >
          <tr
              v-for="(task , index) in tasks"
              :key="index"
              :class="`pa-3 task ${task.status}`"
          >
            <td class="text-center">{{ task.name }}</td>
            <td class="text-center"><span @click="changeStatus(index)" class="pointer">
              {{ task.status }}</span></td>
            <td class="text-center"><v-icon class="pointer" @click="ediTask(index)">
              mdi-more
            </v-icon>
            </td>
            <td class="text-center"><v-icon class="pointer" @click="deleteTask(index)">
              mdi-delete
            </v-icon>
            </td>

          </tr>
          </tbody>
        </template>
      </v-simple-table>


    </v-layout>
  </v-container>
</template>


<script>
export default {
  name: 'todolist',

  data() {
    return {
      task: '',
      editNumber: null,
      statuses: ['in-progress', 'wait', 'done'],
      tasks: []
    }
  },
    methods:{
      addList(){
        if(this.task.length===0) return;
        if(this.editNumber===null) {
          this.tasks.push({
            name: this.task,
            status: 'in-progress',

          })
        }
        else{
          this.tasks[this.editNumber].name = this.task
          this.editNumber = null
        }
        this.task = ''
      },
      deleteTask(index){
        this.tasks.splice(index , 1)
      },
      ediTask(index){
        this.task = this.tasks[index].name
        this.editNumber = index
      },
      changeStatus(index){
        let nextIndex = this.statuses.indexOf(this.tasks[index].status)
        if(++nextIndex > 2) {
          nextIndex = 0
        }
        this.tasks[index].status = this.statuses[nextIndex]
      },


    }
};
</script>

<style scoped>
.pa-3 task in-progress{
  border-left: 10px solid #306cfc;
}
.pa-3 task wait{
  border-left: 10px solid orange;
}
.pa-3 task done{
  border-left: 10px solid green;
}

#input-text{
  background-color: antiquewhite;
  padding: 10px;
  border: none;
  width: 30vw;
  height: 40px;
  line-height: 35px;
  border-radius: 6px;
  padding: 0 5px;
}

</style>
