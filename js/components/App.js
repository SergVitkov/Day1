import Assignments from "./Assignments.js";
import Panel from "./Panel.js";

export default {
    components: { Assignments, Panel },

    template: `
       <div>
        <assignments></assignments>


        <panel>
               This is my default content
        </panel>

        <panel>
            <template v-slot:heading>
               Hi There
            </template>
             This is my default content
        </panel>

        <panel>
            <template v-slot:heading>
               Hi There
            </template>

            This is my default content

            <template v-slot:footer>
               Click here to learn more.
            </template>
        </panel>

         <panel theme="light">
            <template v-slot:heading>
               Hi There
            </template>

            This is my default content

            <template v-slot:footer>
               Click here to learn more.
            </template>
        </panel>
        
       </div>


    `,
}