export default {
  props: {
    newItem: String, // passed from parent
    currentSection: String,
    modalIsActive: Boolean
  },
  data() {
    return {
      Items: [], // Initialize all element which has class "menuItem"
      isActive: this.modalIsActive
    };
  },
  computed: {
    computedClasses() {
      return {
        'is-active': this.isActive, // Add condition based on isActive state
      };
    },
  },
  methods: {
    defineMenu() {
      this.Items = []; // Clear Items before updating
      document.querySelectorAll('.menuItem').forEach((item) => {
        this.Items.push(item.id); // Populate Items with ids from menu items
      });
    },
    toggleClass() {
      this.isActive = this.modalIsActive
    },
    clickTarget(item) {
      const targetElement = document.getElementById(item);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth', // Smooth scroll to the target
        });
      }
    },
    handleNavScroll() {
      const sections = document.querySelectorAll('.menuItem');
      let currentSectionId = '';
      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom >= 0) {
            currentSectionId = section.id;
          }
        }
      });
      if (currentSectionId && currentSectionId !== this.currentSection) {
        this.$emit('update:newItem', currentSectionId);
      }
    },
  },
  watch: {
    currentSection(newValue) {
      this.$emit('update:newItem', newValue);
    }
  },

  template: `
    <div :class="computedClasses" class="nav-bar nav-bar-style">
    <router-link class="tombstone-routerLink" to="/">
      <img src="./assets/catalog/left-arrow.svg" />
    </router-link>
    <div class="nav-bar-container">
      <span class="highlight">{{ newItem }}</span>
    </div>
    <button class="hamburger int-hamburger" :class="computedClasses" @click="toggleClass">
      <span class="hamburger-container">
        <span class="hamburger-top"></span>
        <span class="hamburger-middle"></span>
        <span class="hamburger-bottom"></span>
      </span>
    </button>
    <aside :class="{ 'menu-open': this.modalIsActive }" class="menu">
      <ul>
        <li v-for="(item, index) in Items" :key="index" :class="{ 'active': item === currentSection }">
          <a class="tgt" @click="clickTarget(item)">{{ item }}</a>
        </li>
      </ul>
    </aside>
  </div>
  `,
 
  mounted() {
        this.toggleClass()
    this.$nextTick(() => {
        console.log(this.isActive)
      this.defineMenu();
      window.addEventListener('scroll', this.handleNavScroll); // Add scroll event listener
    });
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleNavScroll); // Clean up the event listener
  },
}