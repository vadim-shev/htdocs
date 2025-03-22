export default {
    // data() {
    //     return {
    //         NULL_TYPE: 'Null',
    //         UNDEFINED_TYPE: 'Undefined',
    //         BOOLEAN_TYPE: 'Boolean',
    //         NUMBER_TYPE: 'Number',
    //         STRING_TYPE: 'String',
    //         OBJECT_TYPE: 'Object',
    //         FUNCTION_CLASS: '[object Function]',
    //         BOOLEAN_CLASS: '[object Boolean]',
    //         NUMBER_CLASS: '[object Number]',
    //         STRING_CLASS: '[object String]',
    //         ARRAY_CLASS: '[object Array]',
    //         DATE_CLASS: '[object Date]',
    //         ELEMENT_CACHE: [],
    //     };
    // },
    // computed: {
    //     isString(object) {
    //         return typeof object === 'string';
    //     },
    // },
    // methods: {
    //     _$(elementID) {
    //         // Improved document.getElementById functionality
    //         if (arguments.length > 1) {
    //             const elements = [];
    //             for (let i = 0; i < arguments.length; i++) {
    //                 elements.push(document.getElementById(arguments[i]));
    //             }
    //             return elements;
    //         }
    //         return document.getElementById(elementID);
    //     },

    //     shouldUseCreationCache(tagName, attributes) {
    //         if (tagName === 'select') return false;
    //         if ('type' in attributes) return false;
    //         return true;
    //     },

    //     Element(tagName, attributes = {}) {
    //         // Ensure tagName is lowercase
    //         tagName = tagName.toLowerCase();

    //         // Create a new element
    //         const el = document.createElement(tagName);

    //         // Set attributes correctly
    //         Object.entries(attributes).forEach(([key, value]) => {
    //             el.setAttribute(key, value);
    //         });

    //         // Optionally cache the element
    //         if (this.shouldUseCreationCache(tagName, attributes)) {
    //             this.ELEMENT_CACHE[tagName] = el.cloneNode(false);
    //         }

    //         return el;
    //     },
    // },
    // mounted() {
    //     console.log('ELEMENT_CACHE:', this.ELEMENT_CACHE);

    //     // Test element creation
    //     const newElement = this.Element('a', { id: 'asd', href: '#' });
    //     document.body.appendChild(newElement); // Attach to DOM for testing
    //     console.log('Created element:', newElement);
    // },
    data() {
        return {
            animateDuration: '1s',
      // isDarkBackground: false
        }
    },
    computed: {
        computedClasses() {
      return {
          // Add a class to change navbar style
      };
    },
        cardsIMAGE() {
            return document.querySelectorAll(".produc-image")
        },
        cards() {
            return document.querySelectorAll(".produc")
        },
        basePage() {
            return this.$router.options.history.base
        },
        prevPage() {
            return this.$router.options.history.state.back
        },
        currentPages() {
            return this.$router.options.history.state.current
        },
        nextPage() {
            return this.$router.options.history.state.forward
        },
        productId() {
            return this.products[this.$route.params.id - 1]
        }, 
        MaterialsList() {
            return {materialTransform: `transform: scale(${this.materialScale}) rotateY(${this.materialRotateY}) rotateX(${this.materialRotateX}) translateZ(${this.materialTranslate});`}
        },
        Id() {
            return Number(this.$route.params.id)
        }
    },
    methods: {

    controlElementClasses(element, options) {
        if (options.addClass) element.classList.add(options.addClass)
            if (options.removeClass) element.classList.remove(options.removeClass);

        if (options.time) this.animateDuration = options.time

            element.style.transition = `${this.animateDuration}`
    }
    }
};
