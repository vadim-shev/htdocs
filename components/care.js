
import ModalBtn from './../components/modal.js'
export default {
    components: {
        ModalBtn
    },
    template: `
        <div class="care_container">
                    <section class="care_section">
                        <h2 class="heading_1">
                            Установка памятников
                        </h2>
                        <div class="care_list_container">
                            <div>
                                <ul>
                                    <li>Новое надгробие</li>
                                    <li>Обрамление могил</li>
                                    <li>Реновация существующих надгробий </li>
                                    <li>Добавление дополнительных надписей </li>
                                    <li>Обновление существующих надписей </li>
                                </ul>
                            </div>
                            <div style="display: none;"> 

                                <div>
                                    <p style="    font-size: 16px; letter-spacing: .025em; line-height: 24px;">
                                        Вам нужно лишь предоставить мастерам следующую информацию:
                                    </p>
                                </div>
                                <ul style="    list-style-type: disc; margin-bottom: 1.25em; margin-top: 1.25em; padding-inline-start: 1.625em;">
                                    <li>название места захоронения</li>
                                    <li>номер участка под захоронение</li>
                                    <li>предпочтения по дизайну</li>
                                    <li>фотографии и информацию для нанесения на табличку или надгробие</li>
                                </ul>
                                <span style="font-weight: bold;">
                                    Важно помнить о том, что 
                                </span>
                                <p>
                                    не рекомендуется также спешить с установкой надгробия - осадка грунта происходит в течение года, и лишь после этого рекомендуется проводить монтаж мемориала на месте захоронения. 
                                </p>
                                
                            </div>
                            <button class="btn_order" @click="openModal">Заказать памятник</button>

                                <!-- Modal -->
                                <div v-if="isModalOpened" class="modal-mask">
                                    <!-- <modal-btn ></modal-btn> -->
                                    <div class="modal-wrapper" >
                                        <div class="modal-container"  style="height: 50vh; display: flex; flex-direction: column; justify-content: space-around;">
                                            <div class="modal-header" style="">
                                                <slot name="header"> 
                                                    Заказать памятник
                                                </slot>
                                            </div>
                                            <div class="modal-body" style="">
                                                <slot name="content">
                                                    
                                                    <div  style="display:flex; flex-direction: column; width: auto; height: 30px;">
                                                        <label>Имя</label>
                                                        <input style="background: rgba(0, 0, 0, .2); padding: 8px 10px;" type="" name="asd">

                                                    </div>
                                                </slot>
                                            </div>
                                            <div class="modal-footer">
                                                <slot name="footer" style="">
                                                    
                                                    <div  style="display:flex; flex-direction: column; width: auto; height: 30px;">
                                                        <label>Телефон</label>
                                                        <input style="background: rgba(0, 0, 0, .2); padding: 8px 10px;"  type="" name="asd">

                                                    </div>
                                                </slot>
                                            </div>
                                                                    <button class="btn_order" @click="closeModal">Заказать sa</button>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                    </section>
                    <section  class="care_section">
                        <h2 class="heading_1">
                            Уход и обслуживание могил
                        </h2>
                        <div  class="care_list_container">
                            <div>
                                <ul >
                                    <li>Реставрация и очистка мемориала</li>
                                    <li>Реставрация надписей</li>
                                    <li>Добавление надписей на мемориал</li>
                                    <li>Прополка и очистка лишней земли </li>
                                    <li>Повторное цементирование участка</li>
                                    <li>Перекладка и/или обновление могильного щебня</li>
                                </ul>
                            </div>
                            <button class="btn_order" @click="openModal">Заказать уход</button>
                        </div>
                    </section>
                </div>
    `, 
    data() {
        return {

            isModalOpened: false, // Add this line
        }
    },
    methods: {

        openModal() {
            this.isModalOpened = true; // Open the modal
        },
        closeModal() {
            this.isModalOpened = false; // Close the modal
        },
    }
}