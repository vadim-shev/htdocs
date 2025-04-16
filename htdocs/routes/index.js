

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
            <header style="position: relative; height: 55px;" >
                <navigation-part style=" width: 100vw;"  :newItem="currentSection"></navigation-part>
            </header>
            <main>
                <div id="prime" class="menuItem"  >
		            <div style="position: relative;" class="prime" >		
		            	<div class="prime_background" >
    								<video preload="none" id="video" style="height: calc(100% + 55px); margin-top: -55px; width:100%; z-index: 10; object-fit: cover; opacity: .6;" autoplay="autoplay" muted="muted" loop="loop" playsinline="" loading="lazy" ><source src="assets/models/video.mp4" type="video/mp4"></video>
		            	</div>    
		            	<div style="background: rgba(0,0,0,0.95); width: 100vw; height: 75vh; z-index: 100; display: flex; flex-direction: column; justify-content: center; align-content: center; align-items: flex-end;">
		            		<h1 style="font-size: 3rem;  width: 100vw; height: 25vh; text-align: left; text-transform: uppercase;">granitblizkim</h1>
		            		<h2  style="font-size: 2rem; width: auto; height: 25vh; margin: 0 5px 0 5px; text-align: left;">Обслуживание с достоинством и уважением</h2>
                                    <button class="prime_btn"  style="height: auto; width: auto;  font-size: 2.5rem; color: black; background: rgba(255, 255, 255, .5); padding: 10px 20px; z-index: 200; border-radius: 0px;  " @click="scrollAction('catalog')" >Перейти к каталогу</button>
		            	</div> 
		            </div>
		        </div> 
		           
		            <div style="" class="menuItem" id="catalog">
	                    <ul class="category_container "   >
	                        <card></card>
	                    </ul>
	                </div>
		            <div style="" class="menuItem" id="care">
	                    <ul class="category_container "   >
	                        <care></care>
	                    </ul>
	                </div>
		            
		            <div class="menuItem" id="materials" style="display: none;">
					
		            	<div   class="materials_object 1 " 
					      	  :style="{
					      	  transform: 'scale(' + materialScale 
								     + ') rotateY(' + materialRotateY 
								     + ') rotateX(' + materialRotateX 
								     + ') translateZ(' 
								     + materialTranslate + ')'}">
					      	<img class="materials_image " :src="this.materialSrc[0]" />
					    </div>
		            	<div  class="materials_object 2 " @click="moveS"
					      	  :style="{
					      	  transform: 'scale(' + materialScale 
								     + ') rotateY(' + materialRotateY 
								     + ') rotateX(' + materialRotateX 
								     + ') translateZ(' 
								     + materialTranslate + ')'}">
					      	<img class="materials_image" :src="this.materialSrc[1]" />
					    </div>
		            	<div  class="materials_object transform_on 3" @click="moveS"
					      	  :style="{
					      	  transform: 'scale(' + materialScale 
								     + ') rotateY(' + materialRotateY 
								     + ') rotateX(' + materialRotateX 
								     + ') translateZ(' 
								     + materialTranslate + ')'}">
					      	<img class="materials_image" :src="this.materialSrc[2]" />
					    </div>
		               
		            </div>
            </main>
            <footer class="menuItem"  id='contact'>
            	<footer-part></footer-part>
            </footer>   
        </div>    
`,
  data() {
    return {
      currentPageKey: 'home',
      // src: this.materialSrc
    };
  },
  methods: {
    
  },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0)
        next()
    }
};