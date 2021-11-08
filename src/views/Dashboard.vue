<template>
  <v-container class="my-2">
    <v-layout column>
    <h1 class="mb-5">To DO List</h1>
    <p class="mb-10">Create your project task</p>
    <v-divider></v-divider>

    <v-flex mx12 md10 class="ma-5" >
      <vform class="mb-5">
      <input  v-model="task" @keyup.enter="addList" type="text" id="input-text" placeholder="inter your task" />
      <v-btn flat class="ml-4" @click="addList"  type="button" id="addButton" >ADD</v-btn>
      </vform>
    </v-flex>
    <v-spacer></v-spacer>
      <v-simple-table >
        <template v-slot:default>
          <thead  v-if="tasks[0] !== undefined">
          <tr>
            <th class="text-center">
              TASK
            </th>
            <th class="text-center">
              STATUS
            </th>
            <th class="text-center">
              EDIT
            </th>
            <th class="text-center">
              DELETE
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="(task , index) in tasks"
              :key="index"
          >
            <td class="text-center">{{ task.name }}</td>
            <td class="text-center"><span @click="changeStatus(index)" class="pointer">
              {{ task.status }}</span></td>
            <td class="text-center"><v-icon class="pointer" @click="ediTask(index)">
              edit
            </v-icon>
            </td>
            <td class="text-center"><v-icon class="pointer" @click="deleteTask(index)">
              trash
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
container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

}
#input-text{
  border: none;
  width: 30vw;
  height: 40px;
  line-height: 35px;
  border-radius: 6px;
  padding: 0 5px;
}

</style>
