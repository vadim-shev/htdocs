

import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'

import scrollMixin from './../mixins/scrollMixin.js'
export default {
    components: { NavigationPart, FooterPart },
    template: `
        <div ref="scrollContainer" id="p">
            <header style="position: relative; height: 55px; top: 0;" class="menuItem" id="up">
                <navigation-part :newItem="currentSection"></navigation-part>
            </header>
            <main>
                <h2>Посчитать стоимость изделия</h2>
                <h4>Тип надгробия: {{ type_selected }}</h4>
                <ul>
                    <li>
                        <input type="radio" id="type_v" value="v" v-model="type_selected" />
                        <label for="type_v">Вертикальный</label>
                    </li>
                    <li>
                        <input type="radio" id="type_h" value="h" v-model="type_selected" />
                        <label for="type_h">Горизонтальный</label>
                    </li>
                </ul>
                <h3>Материал: {{ material_picked }}</h3>
                <ul>
                    <li>
                        <input type="radio" id="granit" value="granit" v-model="material_picked" @change="changeMaterial" />
                        <label for="granit">Гранит</label>
                    </li>
                    <li>
                        <input type="radio" id="mramour" value="mramour" v-model="material_picked" @change="changeMaterial" />
                        <label for="mramour">Мрамор</label>
                    </li>
                </ul>
                <h3>Размеры: {{ size_picked_w }} {{ size_picked_h }} {{ size_picked_z }}</h3>
                <ul>
                    <li>
                        <label for="size_picked_w">w</label>
                        <select v-model="size_picked_w" @change="changeSize">
                            <option>80</option>
                            <option>100</option>
                            <option>120</option>
                        </select>
                    </li>
                    <li>
                        <label for="size_picked_h">H</label>
                        <select v-model="size_picked_h" @change="changeSize">
                            <option>40</option>
                            <option>50</option>
                            <option>60</option>
                        </select>
                    </li>
                    <li>
                        <label for="size_picked_z">Z</label>
                        <select v-model="size_picked_z">
                            <option>5</option>
                            <option>8</option>
                            <option>10</option>
                            <option>12</option>
                        </select>
                    </li>
                </ul>
                <div class="model-container">
                    <div class="visible" id="visible">
                        <div id="monument" ref="monument" class="monument">
                            <div ref="model" id="model-content" class="model-content"></div>
                        </div>
                    </div>
                </div>
            </main>
            <footer class="menuItem" id="contact">
                <div>
                    <section class="vt-container">
                        <footer-part></footer-part>
                    </section>
                </div>
            </footer>
        </div>
    `,
    data() {
        return {
            currentSection: '',
            type_selected: '',
            material_picked: 'granit',
            size_picked_w: '80',
            size_picked_h: '40',
            size_picked_z: '',
        };
    },
    methods: {
        changeSize() {
            const monumentElement = this.$refs.monument;
            if (!monumentElement) {
                console.error('Monument element not found');
                return;
            }
            monumentElement.style.width = `${this.size_picked_w * 2 + "px"}` 
            monumentElement.style.height = `${ this.size_picked_h * 8 + "px"}` 
                
        },
        changeMaterial() {
            const material = this.material_picked
            console.log(this.$refs.model)

             this.material_picked == 'granit'  
                ? this.$refs.model.style.background = "url(assets/materials/1.png)"
                : this.material_picked == 'mramour'
                    ? this.$refs.model.style.background = "url(assets/materials/0.png)"
                    : this.$refs.model.style.background = ''
        }
    },
    mounted() {
        const monumentElement = this.$refs.monument;
        const modelContentElement = document.getElementById("model-content");

        if (monumentElement) {
            
            monumentElement.style.background = "url(assets/materials/1.png)";
        }

        if (modelContentElement) {
            modelContentElement.style.background = "url(assets/mod1.png) 0% 0% / 100% 100%";
            modelContentElement.style.width = "100%";
            modelContentElement.style.height = "100%";
        }
    },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0)
        next()
    }
};