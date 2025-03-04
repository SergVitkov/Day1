import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress" v-model:currentTag="currentTag">
                <assignment-create @add="add" :currentTag="currentTag"></assignment-create>
            </assignment-list>

            <div v-show="showCompleted">
                <assignment-list
                    :assignments="filters.completed"
                    title="Completed"
                    can-toggle
                    @toggle="showCompleted = !showCompleted"
                    v-model:currentTag="currentTag"
                ></assignment-list>
            </div>
        </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true,
            currentTag: 'all'
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete && (this.currentTag === 'all' || assignment.tag === this.currentTag)),
                completed: this.assignments.filter(assignment => assignment.complete && (this.currentTag === 'all' || assignment.tag === this.currentTag)),
            };
        }
    },

    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(newAssignmentName) {
            const newAssignment = {
                name: newAssignmentName,
                complete: false,
                tag: this.currentTag,
                id: this.assignments.length > 0 ? Math.max(...this.assignments.map(a => a.id)) + 1 : 1
            };

            this.assignments.push(newAssignment);
        }
    }
};