const { ref, reactive, computed, watch, onMounted, defineComponent } = Vue

export const ProductsList = defineComponent({
  name: 'ProductsList',
  props: ['id'],
  template: `
    <div>
      <router-link to="/">← Back</router-link>
      <h2>User Details</h2>
      <div v-if="user">
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Category:</strong> {{ user.category }}</p>
      </div>
      <p v-else>Loading...</p>
    </div>
  `,
  setup(props) {
    const user = ref(null)

    onMounted(async () => {
      const res = await fetch('https://vadim-shev.github.io/121/data/vertical.json')
      const data = await res.json()
      user.value = data.find(u => u.id == props.id)
    })

    return { user }
  }
})
