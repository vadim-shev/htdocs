const { ref, reactive, computed, watch, onMounted, defineComponent } = Vue

export const MainCore = defineComponent({
  name: 'MainCore',
  template: `
    <div>
      <h2>Filter Users by Name</h2>
      <div>
        <button 
          v-for="name in uniqueNames" 
          :key="name" 
          @click="selectedName = name"
          :class="{ active: selectedName === name }"
        >
          {{ name }}
        </button>
        <button @click="selectedName = null" :class="{ active: selectedName === null }">
          Show All
        </button>
      </div>

      <h2>Filtered Users</h2>
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">
          <router-link :to="'/user/' + user.id">{{ user.id }} - {{ user.name }}</router-link>
        </li>
      </ul>

      <p v-if="loading">Loading...</p>
      <p v-if="error">{{ error }}</p>
    </div>
  `,
  setup() {
    const users = ref([])
    const loading = ref(true)
    const error = ref(null)
    const selectedName = ref(null)

    onMounted(async () => {
      try {
        const res = await fetch('https://vadim-shev.github.io/121/data/vertical.json')
        users.value = await res.json()
      } catch (e) {
        error.value = 'Failed to load data'
      } finally {
        loading.value = false
      }
    })

    // Получаем все уникальные значения user.name
    const uniqueNames = computed(() => {
      const namesSet = new Set(users.value.map(user => user.name))
      return [...namesSet]
    })

    // Фильтрация по выбранному имени
    const filteredUsers = computed(() => {
      if (!selectedName.value) return users.value
      return users.value.filter(user => user.name === selectedName.value)
    })

    return {
      users,
      loading,
      error,
      filteredUsers,
      uniqueNames,
      selectedName
    }
  }
})
