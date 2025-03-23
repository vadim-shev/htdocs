

import Card from './../components/card.js'
import Care from './../components/care.js'
// import Card from './../components/card/script.js'
import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'

import scrollMixin from './../mixins/scrollMixin.js'

export default {
    mixins: [scrollMixin],
    components: { NavigationPart, Card,Care, FooterPart },
  props: {
  	
  },
    template: `
        <div ref="scrollContainer" :key="currentPageKey" id="p">
    <header style="position: relative; height: 55px;">
      <navigation-part 
        @update:modalIsActive="updateModalIsActive" 
        :modalIsActive="modalIsActive" 
        :newItem="currentSection" 
        @update:newItem="updateCurrentSection" />
    </header>
    <main>
      <div id="prime" class="menuItem">
        <div style="position: relative;" class="prime">
          <div class="prime_background">
            <video preload="none" id="video" style="height: calc(100% + 55px); margin-top: -55px; width:100%; z-index: 10; object-fit: cover; opacity: .6;" autoplay="autoplay" muted="muted" loop="loop" playsinline="" loading="lazy">
              <source src="assets/models/video.mp4" type="video/mp4">
            </video>
          </div>
          <div style="background: rgba(0,0,0,0.95); width: 100vw; height: 75vh; z-index: 100; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: flex-end;">
            <h1 class="prime_highline">granitblizkim</h1>
            <h2 class="secondary_highline" @click="toggleClass" style="">Обслуживание с достоинством и уважением</h2>
            <button class="prime_btn" @click="scrollAction('catalog')">Перейти к каталогу</button>
          </div>
        </div>
      </div>
      <div class="menuItem" id="catalog">
        <ul class="category_container">
          <card></card>
        </ul>
      </div>
      <div class="menuItem" id="care">
        <ul class="category_container">
          <care></care>
        </ul>
      </div>
    </main>
    <footer class="menuItem" id='contact'>
      <footer-part></footer-part>
    </footer>
  </div>
    `,
    data() {
        return {
            currentPageKey: 'home',
            currentSection: '',
            modalIsActive: false
        };
    },
    methods: {
        updateCurrentSection(newItem) {
            this.currentSection = newItem;
        },
        updateModalIsActive(newState) {
            this.modalIsActive = newState;  // Sync modalIsActive from child
        },
    },
    beforeRouteEnter(to, from, next) {
        next()
    },
    mounted() {
        this.updateCurrentSection('care')
        this.scrollAction(this.currentSection)
    }
};