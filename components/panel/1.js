export default {
	props: {
		title: String,
		information: {
			type: [Array, String],
			default: () => []
		}
	},
	template: `
		<div class="cont_alignment">
			<h2>{{ title }}</h2>
			<span v-for='(item, index) in modifiedArray' :key="index">{{ item }}</span>
		</div>
	`,
	computed: {
		modifiedArray() {
			if (this.information && this.information.length > 0) {
	            return this.information.split(',')
	        } else {
	        	return []
	        }
		}
	        
    },
	methods: {
		breakArraysValueIntoLetters() {
			if(this.information.length === 1) {
				return [...this.information, 'Second']
			} else if (this.information.length === 2) {
				return this.information
			} else {
				return this.information
			}
		}
	}

}