import fetchMixin from './fetchMixin.js'
export default { 
    mixins: [fetchMixin],
    props: ['src'],	
    data() {
		return {
            Item: [],     
            items: [],     
            Maters: [],     
            hasMounted: false,
            currentSection: '',
            materialScale: "1",
            materialRotateY: "-30deg",
            materialRotateX: "45deg",
            materialTranslate: "4.5rem",     
                materialSrc: [],
                CardArr: []
        }
	},
    computed: {
        IndexNumber() {
            return this.$route.params.id
        },
        CategoryName() {
           const data = this.fetchAPI('./data/' + this.$route.params.product + '.json');
    
      const product = data[this.IndexNumber]; // Индексы начинаются с 0
      return this.$route.params.product
 }
    },
	methods: {
        
        selectMemorial(memorial, index, target) {
            this.isActive = true
            this.selectedMemorial = memorial

            this.selectedIndex = index

            if(memorial == this.memorials[0]) {
              this.$router.push({ path: `/${this.$route.params.product}/1` })
            } else if(memorial == this.memorials[1]) {
              this.$router.push({ path: `/${this.$route.params.product}/6` })
            } else if(memorial == this.memorials[2]) {
              this.$router.push({ path: `/${this.$route.params.product}/16` })
            } else if(memorial == this.memorials[3]) {
              this.$router.push({ path: `/${this.$route.params.product}/30` })
            } else if(memorial == this.memorials[4]) {
              this.$router.push({ path: `/${this.$route.params.product}/71` })
            } else if(memorial == this.memorials[5]) {
              this.$router.push({ path: `/${this.$route.params.product}/79` })
            } 
        },
        moveS() {
            document.querySelectorAll(".materials_object").forEach((items) => {
                this.Maters.push(items)
            })
        },
        controlMaterialObject(i, options) {
            const materialObject = document.querySelectorAll(".materials_object")
            
            if (!materialObject[i]) {
                console.error("materials_object not found!")
                return;
            }

            if (options.scale) this.materialScale = options.scale
            if (options.rotateY) this.materialRotateY = options.rotateY
            if (options.rotateX) this.materialRotateX = options.rotateX
            if (options.translateZ) this.materialTranslate = options.translateZ

            materialObject[i].style.transform = `scale(${this.materialScale}) rotateY(${this.materialRotateY}) rotateX(${this.materialRotateX}) translateZ(${this.materialTranslate})`

            if (options.addClass) materialObject[i].classList.add(options.addClass)
            if (options.removeClass) materialObject[i].classList.remove(options.removeClass)
        },
		handleScroll() {          
            this.displayViewportElement()


            if(this.isElementInViewport('Memorial_i')) {
                document.getElementById('Memorial_img').classList.add('action_1')
                document.getElementById('Memorial_i').classList.add('shadow_0')
            }else if(this.isElementInViewport('Services_i')) {
                document.getElementById('Services_img').classList.add('action_1')
                document.getElementById('Services_i').classList.add('shadow_0')
            } else if(this.isElementInViewport('Count_i')) {
                document.getElementById('Count_i').classList.add('shadow_0')
                document.getElementById('Count_img').classList.add('action_1')
            } else {
                document.getElementById('Memorial_img').classList.remove('action_1')
                document.getElementById('Memorial_i').classList.remove('shadow_0')
 document.getElementById('Services_img').classList.remove('action_1')
document.getElementById('Services_i').classList.remove('shadow_0')
 document.getElementById('Count_i').classList.remove('shadow_0')
                document.getElementById('Count_img').classList.remove('action_1')
            }
               

  if (this.isElementInViewport('materials')) {
    this.controlMaterialObject(0, {
      scale: ".5",
      rotateY: "0deg",
      rotateX: "0deg",
      translateZ: "1rem",
      addClass: "transform_on",
      removeClass: "transform_off",
    });
    this.controlMaterialObject(1, {
      scale: ".5",
      rotateY: "0deg",
      rotateX: "0deg",
      translateZ: "1rem",
      addClass: "transform_on1",
      removeClass: "transform_off1",
    });
    this.controlMaterialObject(2, {
      scale: ".5",
      rotateY: "0deg",
      rotateX: "0deg",
      translateZ: "1rem",
      addClass: "transform_on2",
      removeClass: "transform_off2",
    });
  } else {
    this.controlMaterialObject(0, {
      scale: "0.75",
      rotateY: "-30deg",
      rotateX: "45deg",
      translateZ: "4.5rem",
      addClass: "transform_off",
      removeClass: "transform_on",
    });
    this.controlMaterialObject(1, {
      scale: "0.75",
      rotateY: "-30deg",
      rotateX: "45deg",
      translateZ: "4.5rem",
      addClass: "transform_off1",
      removeClass: "transform_on1",
    });
    this.controlMaterialObject(2, {
      scale: "0.75",
      rotateY: "-30deg",
      rotateX: "45deg",
      translateZ: "4.5rem",
      addClass: "transform_off2",
      removeClass: "transform_on2",
    });
  }

        },
        displayViewportElement() {
            this.currentSection = this.Item[0]
            this.Item.forEach(item => { // Перебирает каждый item в Item и для каждого выполняeт код
                if(document.getElementById(item)) { // Существует ли такой element
                    if(this.isElementInViewport(item)) this.currentSection = item // Eсли item в поле зрения
                }
            })

        },
        isElementInViewport(element) { // Проверяем, находится ли указанный element в поле зрения
            return  document.getElementById(element).getBoundingClientRect().top < window.innerHeight - 400
                        && document.getElementById(element).getBoundingClientRect().bottom > 0 
        },
        scrollAction(elementId) { // Прокрутить страницу к указанному elementId 
            document.getElementById(elementId).scrollIntoView({ behavior: 'smooth', block: 'start' })
        },
         updateMenu() {
            document.querySelectorAll(".menuItem").forEach((item) => {
                this.Item.push(item.id)
            })
            document.querySelectorAll(".materials_object").forEach((items) => {
                this.Maters.push( document.getElementById("materials"))
            })
            // document.querySelectorAll(".materials_object").forEach((material) => {
            //     this.Maters.push(material)
            // })
        },
        clickTarget(clickedItem) {
            this.currentSectionPosition !== clickedItem ? this.scrollAction(clickedItem) : this.scrollAction(this.Item[0])
            this.toggleClass()
        },
        toggleClass() {
            this.isActive = !this.isActive
        },
        fetchAPI(pathToFile) {
            return fetch(pathToFile).then(response => {
                if (!response.ok) throw new Error('NOT ok!')
                    return response.json()
            })
        },
    convertToArray(prop, symbol) {
      return prop.split(symbol);
    }
    },
   mounted() {
     // this.$router.options.history.state.back = 
    if (!this.hasMounted) {
        this.hasMounted = true; 
        this.updateMenu()
        
        window.addEventListener("load", this.displayViewportElement);
        window.addEventListener("scroll", this.handleScroll);

        this.materialSrc[0] = "./assets/materials/2.png"
        this.materialSrc[1] = "./assets/materials/1.png"
        this.materialSrc[2] = "./assets/materials/3.jpg"

    }
},
beforeDestroy() {
        // console.log(this.nextTodoId)
    // const s = 
    window.removeEventListener("scroll", this.handleScroll);

}
}