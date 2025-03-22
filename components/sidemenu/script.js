

import fetchMixin from './../../mixins/fetchMixin.js'

export default {
    mixins: [fetchMixin],
	props: {
		menuWord: String
	},
	data() {
		return {
			isOpen: false,
			clickedInsideMenu: false,
			Item: []
		}
	},
	template: `
		<aside :class="{ 'menu-open': isOpen }" class="menu">
            <ul>
                <li  v-for="(item, index) in items" :key="index" :class="{ 'active': item === menuWord }">{{ item }}</li>
            </ul>
        </aside>
	`,
	mounted() {
		document.addEventListener('click', this.handleClick)
		
	},
	beforeDestroyed() {
		document.removeEventListener('click', this.handleClick)
	},
	computed: {
		shouldMenuBeOpen() {
			return this.isOpen || this.clickedInsideMenu
		}
	},
	methods: {
		toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        handleClick() {

	      	console.log(this.$refs.menuItem.id)	    	  	

	    }
	}

}