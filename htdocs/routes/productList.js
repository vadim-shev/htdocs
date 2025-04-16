import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'
// import ModalBtn from './../components/modal.js'

import scrollMixin from './../mixins/scrollMixin.js'
export default {
  mixins: [scrollMixin],
  components: { NavigationPart, FooterPart },
  template: `
    <div ref="scrollContainer" :key="currentPageKey" id="p">
      <header style="position: relative; height: auto;" class="menuItem" id="header">
        <navigation-part style="width: 100vw;" :newItem="this.Imagee[0]?.category"></navigation-part>
      </header>
      <main class="main-prod">
        <div style="background-color: white; margin: 10vh 0 0 0; z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100vw; height: auto;" class="prod_container menuItem" id="prod">
          <div v-for="(group, name) in groupedImages" :key="name">
            <div>
              <h3 style="margin: 2vh 2vw; text-align: center; color: var(--color-5); font-size: 30px;">{{ name }}</h3>
              <div style="display: flex; flex-direction: row; flex-wrap: wrap; justify-content: center; align-items: center; width: 100%; height: 100%; margin: 2vh 0vw;">
                <router-link  
  v-for="(image, index) in group" 
  :key="index" 
  :to="'/' + $route.params.product + '/' + image.id" 
  :style="{ backgroundImage: 'url(' + image.image + ')', height: '120px', width: '80px' }" 
  id="Imagee1">
</router-link>

              </div>
            </div>
          </div>
        </div>
      </main>
      <footer class="menuItem" id="contact">
        <footer-part></footer-part>
      </footer>
    </div>
  `,
  data() {
    return {
      s: '',
      currentPageKey: 'some-unique-key',
      Imagee: [],
      Groups: []
    };
  },
  methods: {
    async fetchProducts(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data) && data[0] && data[0].hasOwnProperty('inStock')) {
          return data;
        } else {
          throw new Error('Invalid product data or missing "inStock" property');
        }
      } catch (error) {
        console.error('Error fetching product data:', error);
        return [];
      }
    },
    groupImagesByName() {
      const groups = {};
      this.Imagee.forEach((item) => {
        const name = item.name || 'Unknown';
        if (!groups[name]) {
          groups[name] = [];
        }
        groups[name].push({
          ...item, 
          id: item.id,
          name: item.name,
          serial: item.serial
        });
      });
      return groups;
    },
  },
  async mounted() {
    try {
      const productParam = this.$route.params.product;
      if (!productParam) {
        throw new Error('Product parameter is missing in the route');
      }

      const url = `./data/${productParam}.json`;
        console.log(url)
      const response = await this.fetchProducts(url);
        console.log(productParam)

      if (response && response.length > 0) {
        this.Imagee = response;
      for (let i = 1; i < response.length; i++) {
      // console.log('Fetching data from:', response[i].name );
      // this.Groups = response[i].name
        }
      } else {
        console.error('No products found in the fetched data');
      }
    } catch (error) {
      // console.error('Error during mounted hook:', error.message);
      this.$emit('error', error.message); // Emit an error event for better handling
    }
      console.log('123', this.groupedImages);

  },
  computed: {
    groupedImages() {
      return this.groupImagesByName();
    },
  },
  beforeRouteEnter(to, from, next) {
    window.scrollTo(0, 0);
    next();
  },
};
