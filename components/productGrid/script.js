
import NavigationPart from './../../templates/staticParts/Navigation/script.js'
import Panel from './../../components/panel/script.js'
import CustomLink from './../../components/router-link/script.js'

export default {
	components: {
		NavigationPart, Panel, CustomLink
	},
	template: `
	<div style="position: relative;">
		<div class="product-catalog">
		   	<div class="product product-item" v-for="(product, index) in displayedProducts" :key="index">
		   		<div class="product-img-container">
		   			<img :src="product.image" :alt="product.name" class="product-image">
		   		</div>
		    	<div class="product-details">
		    	  	<button class="add-to-cart-button">Заказать</button>
		    	  	<h3 class="product-name">{{ product.name }}</h3>
		    	  	<p class="product-price">{{ product.price }}</p>
		    	</div>
		   	</div>
		    <!-- Пагинация -->
		    <div class="pagination-container">
		    	<div  class="pagination">
		    		<button v-for="pageNumber in pageCount" :key="pageNumber" @click="changePage(pageNumber)">{{ pageNumber }}</button>
	    	</div>
		</div>
	</div>
	
				
	`,
	data() {
    	return {
      		products: [
		        { name: "Product 1", image: "./assets/hyd.png", price: "$10.99" },
		        { name: "Product 2", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 3", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 4", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 5", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 6", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 7", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 8", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 9", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 10", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 11", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 12", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 13", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 14", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 15", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 16", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 17", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 18", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 19", image: "./assets/hyd.png", price: "$15.99" },
		        { name: "Product 20", image: "./assets/hyd.png", price: "$15.99" }
      		],
		    itemsPerPage: 8,
		    currentPage: 1,
    	};
	},
	computed: {
	  displayedProducts() {
	    	const startIndex = (this.currentPage - 1) * this.itemsPerPage;
	    	const endIndex = this.currentPage * this.itemsPerPage;

	    	return this.products.slice(startIndex, endIndex);
	  },
	  pageCount() {
	  		// вычисляет общее количество страниц, которые должны быть отображены в каталоге продукции. С помощью метода Math.ceil, чтобы учесть возможность наличия неполных страниц
	    	return Math.ceil(this.products.length / this.itemsPerPage);
	  },
	},
	methods: {
	  	changePage(pageNumber) { // принимает номер страницы на которую нужно переключиться
	  		// вычисляем индекс начального элемента, учитывая кол-во элементов на каждой странице. Показывает с какого элемента начать отображение на текущей странице
  			const startIndex = (pageNumber - 1) * this.itemsPerPage; 
  			// вычисляем индекс последнего элемента, учитывая кол-во элементов на каждой странице. Показывает на каком элементе закончить отображение на текущей странице
  			const endIndex = pageNumber * this.itemsPerPage; // 

  			// извлечения подмассива продуктов, который содержит продукты для текущей страницы
  			const newProducts = this.products.slice(startIndex, endIndex);

  			// удаляем все элементы из массива displayedProducts. Затем добавляем новые продукты из newProducts с помощью оператора распространения (...newProducts)
			this.displayedProducts.splice(0, this.displayedProducts.length, ...newProducts);

			this.currentPage = pageNumber;
		}
	}
}
