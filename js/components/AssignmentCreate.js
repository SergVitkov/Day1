export default {
    template: `
         <form @submit.prevent="add">
              <div class="border border-gray-600 text-black">
                    <input v-model="newAssignment" placeholder="New assignment..." class="p-2 w-96" />
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                     <div v-if="currentTag === 'all'" class="text-red-500 text-sm mt-1 p-2 bg-white text-center">
                     Please select a specific tag to add new Assignment!
                     </div>
                     <div v-else class="text-green-500 text-sm mt-1 text-center">
                     Add new Assignment to {{ currentTag }}
                     </div>
              </div>
         </form>
    `,

    props: {
        currentTag: {
            type: String,
            required: true
        }
    },

    data() {
         return {
              newAssignment: ''
         };
    },

    created() {
        console.log('Current tag:', this.currentTag);
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
