

import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'
import ModalBtn from './../components/modal.js'

import scrollMixin from './../mixins/scrollMixin.js'
export default {
     mixins: [scrollMixin],
     components: { NavigationPart, FooterPart, ModalBtn },
     template: `
         <div ref="scrollContainer" :key="$route.fullPath" id="p">
    <header style="position: relative; height: auto;" class="menuItem" id="header">
      <navigation-part style="width: 100vw;" :newItem="currentSection"></navigation-part>
    </header>
    <main class="main-prod">
      <div style="background-color: white; height: 100%; width: 100vw; height: auto; z-index: 1000;" class="prod_container menuItem" id="prod">
        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; width: 100%;">
          <img id="Imagee" :src="Imagee" style="margin: 40px 25px; padding: 40px 25px; " />
        </div>

        <div class="prod_cover">
          <div class="prod_cover_info">
            <div class="prod_arrows_container">
              <span><b>{{ Price + " " + "грн" }}</b></span>
              <button @click="openModal">Купить</button>

              <!-- Modal -->
              <div v-if="isModalOpened" class="modal-mask">
                <modal-btn :isModalOpened="isModalOpened" @close-modal="closeModal" :info="Serial+'-'+OrderNumber"></modal-btn>
              </div>
            </div>

            <!-- Other content -->
            <div class="prod_arrows_container">
              <router-link class="tombstone-routerLink" :to="'/'+$route.params.product+'/'+Math.abs(Number($route.params.id) - 1)">
                <img src="./assets/catalog/left-arrow.svg" />
                <b>Предыдущий мемориал</b>
              </router-link>
              <router-link class="tombstone-routerLink" :to="'/' + $route.params.product + '/' + Math.abs(Number($route.params.id) + 1)">
                <b>Следующий мемориал</b>
                <img src="./assets/catalog/right-arrow.svg" />
              </router-link>
            </div>

            <div class="prod_cover_container">
              <div style="display: flex; width: 100%; height: auto; padding: 0rem 1rem; flex-direction: column; justify-content: space-between;">
                <div style="display: flex; flex-direction: row; justify-content: space-between; width: 85vw;">
                  <div style="display: flex; flex-direction: column; justify-content: space-around; align-items: flex-start;">
                    <p>Текущий раздел: <b class="roboto">{{ Name }}</b></p>
                    <p> Каталог: <b class="roboto">{{ Category}}</b> </p>
                    <p> Материал: <b class="roboto"> {{ MadeOf }} </b></p>
                    <p> Серийный номер: <b class="roboto"> {{ Serial + "-" + OrderNumber }} </b></p>
                    <p> Есть на складе: <b class="roboto" style="color: green;" id="InStock"> {{ InStock }} </b> </p>
                  </div>
                </div>
              </div>
              <div style="width: 100%; height: auto;">
                <div style="display: flex; flex-direction: row; flex-wrap: wrap; width: 100vw;">
<div id="Imagee1" :style="{ margin: '20px', padding: '0px', backgroundImage: Ds && Ds.trim() ? 'url(' + Ds + ')' : 'none' }"></div>
                </div>
              </div>
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
                isModalOpened: false, // Add this line

                selectedIndex: null,
                isActive: false,
                currentSection: '',
                currentPageKey: 'prodIndex',
                Name: '',
                InStock: '',
                MadeOf: '',
                Imagee: '',
                Price: '',
                ID: Number(this.$route.params.id) - 1,
                Category: '',
                OrderNumber: this.IndexNumber,
                Serial: '',
                Ds: '',
                memorials: ['формы', 'резка сердца', 'резка крест', 'резка розы', 'резка деревьев', 'резка винограда'],
                selectedMemorial: 'Выберите раздел'
          };
     },
     methods: {
         fetchProduct() {
    let productDataPath = './data/' + this.$route.params.product + '.json';
    let formattedId = String(this.$route.params.id).padStart(3, '0');
    
    this.fetchAPI(productDataPath)
        .then(data => {
            // Ensure the product exists in the data
            if (data[this.ID]) {
                // Update the component state with new product data
                this.Name = data[this.ID].name;
                this.MadeOf = data[this.ID].madeOf;
                this.InStock = data[this.ID].inStock;
                this.Imagee = data[this.ID].image;
                this.Price = data[this.ID].price;
                this.Category = data[this.ID].category;
                this.Serial = data[this.ID].serial;
                this.Ds = data[this.ID].description;
                this.s = data[this.ID].description;
                this.OrderNumber = `${this.ID.toString().padStart(3, '0')}`;
                
                // Update other necessary state based on the route params
                // For example, to handle memorial logic based on the category
                if (this.$route.params.product == 'vertical') {
                    this.setVerticalMemorial();
                } else if (this.$route.params.product == 'horizontal') {
                    this.setHorizontalMemorial();
                } else if (this.$route.params.product == 'complex') {
                    this.setComplexMemorial();
                } else if (this.$route.params.product == 'plates') {
                    this.setPlatesMemorial();
                }
            }
        })
        .catch(error => {
            console.error("Failed to fetch product data:", error);
        });
},
setVerticalMemorial() {
    if (0 <= this.$route.params.id && this.$route.params.id <= 5) {
        this.selectedMemorial = this.memorials[0];
        this.selectedIndex = 0;
    } else if (this.$route.params.id > 5 && this.$route.params.id <= 15) {
        this.selectedMemorial = this.memorials[1];
        this.selectedIndex = 1;
    }
    // More conditions for vertical memorial logic
},

setHorizontalMemorial() {
    this.memorials = ['двойники'];
    this.selectedIndex = 0;
    this.selectedMemorial = this.memorials[0];
},

setComplexMemorial() {
    this.memorials = ['комплекс'];
    this.selectedIndex = 0;
    this.selectedMemorial = this.memorials[0];
},

setPlatesMemorial() {
    this.memorials = ['плиты'];
    this.selectedIndex = 0;
    this.selectedMemorial = this.memorials[0];
},
          toggleClass() {
                this.isActive = !this.isActive;
          },
          openModal() {
                this.isModalOpened = true; // Open the modal
          },
          closeModal() {
                this.isModalOpened = false; // Close the modal
          },
          selectMemorial(memorial, index) {
                this.selectedMemorial = memorial;
                this.selectedIndex = index;
          }
     },
    mounted() {
    this.fetchProduct(); // Ensure this method fetches the data before rendering


    // Handle product-specific image adjustments based on the product type
    if (this.$route.params.product == "vertical") {
        document.getElementById('Imagee').style.height = '300px';
        document.getElementById('Imagee').style.width = '150px';
        document.getElementById('Imagee1').style.height = '350px';
        document.getElementById('Imagee1').style.width = '300px';
    } else if (this.$route.params.product == "horizontal") {
        document.getElementById('Imagee').style.height = '250px';
        document.getElementById('Imagee').style.width = '300px';
        document.getElementById('Imagee1').style.height = '300px';
        document.getElementById('Imagee1').style.width = '300px';
    } else if (this.$route.params.product == "complex") {
        document.getElementById('Imagee').style.height = '250px';
        document.getElementById('Imagee').style.width = '300px';
        document.getElementById('Imagee1').style.height = '0px';
        document.getElementById('Imagee1').style.width = '0px';
    } else if (this.$route.params.product == "plates") {
        document.getElementById('Imagee1').style.height = '390px';
        document.getElementById('Imagee1').style.width = '400px';
    }
},

     watch: {
          '$route.params.id': function(newId, oldId) {
        this.fetchProduct(); // Re-fetch product when the id changes
    },
    '$route.params.product': function(newProduct, oldProduct) {
        this.fetchProduct(); // Re-fetch product when the product type changes
    }
     },
     computed: {
          computedClasses() {
                return {
                     'is-active': this.isActive
                };
          }
     },
     beforeRouteEnter(to, from, next) {
          window.scrollTo(0, 0);
          next();
     },
     beforeRouteUpdate(to, from, next) {
    // Check if the id parameter has changed
    if (to.params.id !== from.params.id || to.params.product !== from.params.product) {
        this.fetchProduct(); // Fetch the product data again
    }
    next(); // Proceed to the next navigation hook
}
};
