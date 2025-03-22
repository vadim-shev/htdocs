export default {
    props: {
         isModalOpened: Boolean,
        info: String
    },
    template: `
    <div class="modal-wrapper" >
        <div class="modal-container">
            <div class="modal-header" style="display: flex; flex-direction: column;">
                    <input style="background: rgba(0, 0, 0, .2); padding: 8px 10px;" type="" name="asd">
                    <label>{{ info }}</label>
                                    <button class="btn_order" @click="closeModal">Заказать</button>
            </div>
            
        </div>
    </div>
    `,
    methods: {

       toggleModal() {
            // Emit an event to change the isModalOpen value in the parent
            this.$emit('update:isModalOpened', !this.isModalOpened);
        },
        closeModal() {
            this.$emit('close-modal')
        }
    }
}
