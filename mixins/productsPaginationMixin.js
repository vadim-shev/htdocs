export default {
	data() {
    	return {
       		
            
      	}
	},
	computed: {
		  computedDisplayedProducts() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = this.currentPage * this.itemsPerPage;
            return this.products.slice(start, end) 

            	
        },
        pageCount() {
            return Math.ceil(this.products.length / this.itemsPerPage);
        }
	},
	mounted() {
		
	},
	methods: {
		  	changePage(pageNumber) { // принимает номер страницы на которую нужно переключиться
		  		window.scrollTo(0, 0)
				this.setCurrentPage(pageNumber)
		  		this.updateDisplayedProducts(pageNumber)
			},
			updateDisplayedProducts(pageNumber) {
	  			const start = (pageNumber - 1) * this.itemsPerPage;
	            const end = pageNumber * this.itemsPerPage;
	            return this.products.slice(start, end);
			},
			setCurrentPage(pageNumber) {
				this.currentPage = pageNumber
				
			},
			hidePagination(src) {
				if(src.length < this.itemsPerPage) document.getElementById('saa').style.display = "none"
			},
		fetchAPI(pathToFile) {
			return fetch(pathToFile).then(response => {
				if( !response.ok ) throw new Error('NOT ok!')

				return response.json()
			})
		}
    },
	beforeRouteEnter(to, from, next) {
		window.scrollTo(0, 0)

		next()
	}
}	