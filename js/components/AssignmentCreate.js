export default {
   template: `
       <form @submit.prevent="add">
           <div class="border border-gray-600 text-black">
               <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
               <button type="submit" class="bg-white p-2 border-l">Add</button>
           </div>
       </form>
   `,

   props: {
       currentTag: String
   },

   data() {
       return {
           newAssignment: ''
       };
   },

//    methods: {
//       add(newAssignmentName) {
//           if (this.currentTag) { // Проверяем, выбран ли какой-то тег
//               const newAssignment = {
//                   name: newAssignmentName,
//                   complete: false,
//                   tag: this.currentTag, // Привязываем к текущему тегу
//                   id: this.assignments.length > 0
//                       ? Math.max(...this.assignments
//                           .filter(a => a.tag === this.currentTag) // Фильтруем только по текущему тегу
//                           .map(a => a.id)) + 1 
//                       : 1
//               };
//               this.assignments.push(newAssignment);
//           }
//       }

methods: {

   add() {
     if (this.newAssignment !== '' || this.currentTag ){
       this.$emit('add', this.newAssignment),
       this.newAssignment = ''
     }
   }
}
};