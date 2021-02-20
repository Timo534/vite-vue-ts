import { ref, defineComponent } from 'vue'
import '../assets/css/HelloWorld.css'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false
    }
  },
  setup () {
    const count = ref(0)
    const useScriptSetup = ref(false)
    const useTsPlugin = ref(false)
    return () => (
          <>
            {/* <h1>{{ msg }}</h1> */}

            <label>
                <input type="checkbox" v-model={useScriptSetup} /> Use
                <code>&lt;script setup&gt;</code>
            </label>
            <label>
                <input type="checkbox" v-model={useTsPlugin} /> Provide types for
                <code>*.vue</code> imports
            </label>

            <p>
              Recommended IDE setup:
                  <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
                  +
                  <template v-if="!useScriptSetup">
                    <a
                      href="https://marketplace.visualstudio.com/items?itemName=octref.vetur"
                      target="_blank"
                      >Vetur</a>
                      +
                    <a
                        href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features"
                        target="_blank"
                    >Vue DX</a>
                    </template>
                  <template v-else>
                    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
                  </template>
              </p>
              <p v-if="useTsPlugin">
                      tsconfig setup:
                      <br />1. Install and add
                  <code>@vuedx/typescript-plugin-vue</code> to tsconfig plugins
                  <br />2. Delete <code>src/shims-vue.d.ts</code>
                  <br />3. Open
                  <code>src/main.ts</code> in VSCode
                  <br />4. Open VSCode command input
                  <br />5. Search and run "Select TypeScript version" {'->'} "Use workspace version"
                  </p>
                  <button>count is: {{ count }}</button>
                  <p>
                  Edit
                  <code>components/HelloWorld.vue</code> to test hot module replacement.
                  </p>

                  <p>
                  <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Docs</a> |
                  <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
                  </p>
        </>
    )
  }
})