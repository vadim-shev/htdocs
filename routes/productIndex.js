

import FooterPart from './../templates/footer.js'
import NavigationPart from './../templates/navigation.js'

import scrollMixin from './../mixins/scrollMixin.js'

export default {
    mixins: [scrollMixin],
    components: { NavigationPart, FooterPart},
    template: `
        <div ref="scrollContainer" :key="currentPageKey" id="p">
            <header style="position: relative; height: auto;"  class="menuItem" id="header">
                <navigation-part style=" width: 100vw;"  :newItem="currentSection"></navigation-part>
            </header>
            <main class="main-tombstone">
                <div class="tombstone_container" style=" padding-top: 55px ;">
                    <h1>Изготовление и установка мемориальных изделий</h1>
                    <p>Устанавливка надгробия происходит не ранее, чем через год после похорон, так как грунту нужно время, чтобы просесть и укрепиться. <br/>Если произвести монтаж на свежий и не просевший грунт, памятник неизбежно покосится спустя некоторое время. В худшем случае памятник  может упасть.</p>               
                    <router-link class="tombstone-routerLink"  to="/" >На главную</router-link>

                </div>
                
            </main>
            <footer class="menuItem" id="contact">
                <footer-part></footer-part>
            </footer>
        </div>
    `,
    data() {
        return {
            currentSection: '',
      currentPageKey: 'tombstone',
        }
    },
    mounted() {
            // console.log(window.history.state)
        
        
    },
    beforeRouteEnter(to, from, next) {
        window.scrollTo(0, 0)
        next()
    }
}