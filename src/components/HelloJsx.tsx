import { ref, defineComponent, withModifiers } from 'vue'
export default defineComponent({
  name: 'HelloJsx',
  setup () {
    const count = ref(0)

    const inc = () => {
      count.value++
    }

    return () => (
    <div onClick={withModifiers(inc, ['self'])}>{count.value}</div>
    )
  }
})
