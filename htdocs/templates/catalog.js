

import scrollMixin from './../../mixins/scrollMixin.js'
export default {
    mixins: [scrollMixin],
	template: `
        <div class="contact_container">
            <h1 class="contact_heading" >Контакты</h1>
            <a class="contact_mail" >vadim.shevchenko2016@gmail.com</a>
            <section class="contact_info_container" >
                <img src="./assets/body.svg">
                <div class="contact_number_container" >
                    <a href="" >+38(097)159-66-61</a>
                    <span >ул. Александра Поля - 76Б</span>
                </div>
            </section>
            <button @click="scrollAction('p')" >Вернуться наверх</button>
        </div>
        <div class="contact_copyright_container" >
            <div class="copyright">
                <span>
                    © 2024 The JOY, s.r.o. All Rights Reserved. Bottova 1863/2A, 972 01 Bojnice, Slovakia (European Union)
                    <br>
                    By using this website, you agree to the use of cookies.
                    <br>
                    <a href="https://www.art4web.co/privacy-policy" target="_blank">
                        Cookies &amp; Privacy policy
                    </a>
                </span>
            </div>
        </div>
	`
}