
export default {
	props: ['pathTo', 'childClass', 'parentClass', 'value'],
	template: `
		<div @click="updateMenu()"  :class="parentClass">
			<router-link :to="{ path: pathTo }" :class="childClass ">{{ value }}</router-link>
		</div>
		
	`,
}