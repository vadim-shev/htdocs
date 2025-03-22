
import scrollMixin from './../mixins/scrollMixin.js'
export default {
    mixins: [scrollMixin],
	template: `
        <div class="contact_container" >
            <h1 class="contact_heading" >Контакты</h1>
            <div class="contact_text-holder">
                <b style="color: var(--color-1); text-transform: uppercase;"> почта: <a class="contact_mail" href="mailto:vadim.shevchenko2022@icloud.com?subject=GRANITBLIZKIM&body=хочу заказать">mail</a> </b>
                <b style="color: var(--color-1); text-transform: uppercase;"> телефон: <a class="contact_mail" href="tel:+380974847272">+38(097)-484-72-72</a> </b>
                <b style="color: var(--color-1); text-transform: uppercase;"> телефон: <a class="contact_mail" href="tel:+380637391111">+38(063)-739-11-11</a> </b>
                <b style="color: var(--color-1); text-transform: uppercase;"> адресс: <a class="contact_mail" >г. Днепр</a> </b>
            </div>
            <section class="contact_info_container" >
                <!-- <img src="./assets/icons/count.png"> -->
                <div class="contact_number_container" >
                </div>
            </section>
            <button @click="scrollAction('p')" >Вернуться наверх</button>
        </div>
        <div class="contact_copyright_container roboto" >
            <div class="copyright">
                <span >
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
