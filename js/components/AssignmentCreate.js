export default {
    template: `
         <form @submit.prevent="add">
              <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" placeholder="New assignment..." class="p-2" />
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                     <div v-if="currentTag === 'all'" class="text-red-500 text-sm mt-1">
                     Please select a specific tag!
                     </div>
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

    methods: {
         add() {
              if (this.newAssignment !== '' && this.currentTag !== 'all') {
                    this.$emit('add', this.newAssignment);
                    this.newAssignment = '';
              }
         }
    }
};
