export default {
   template: `
   <div :class="{

      'mt-6 p-4 border-gray-600 rounded-lg': true,
      'bg-white border-gray-300 text-black' :  theme === 'light',
      'bg-gray-700 border-gray-600 text-light' :  theme === 'dark',
      }">
       <h2 v-if="$slots.heading"class="font-bold mt-1">
            <slot name="heading"/>
       </h2>

       <slot/>

      <footer v-if="$slots.footer" class="border-t mt-2 text-xs pt-4 nt-4">
         <slot name="footer"></slot>
      </footer>


       </div>
   `,

   props: {
      theme: { type: String, default: 'dark'}
   }
}