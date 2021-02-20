import { defineComponent } from 'vue'
import HelloJsx from './components/HelloJsx'
import './assets/css/app.css'

export default defineComponent({
  name: 'App',
  components: {
    HelloJsx
  },
  setup () {
    return () => (
          <>
              <HelloJsx></HelloJsx>
          </>
    )
  }
})
