import mailList from '../../cmps/mail/mail-list-cmp.js'
import mailNavbar from '../../cmps/mail/mail-navbar.js'
import mailService from '../../services/mail-service.js'
import {eventBus} from '../../event-bus.js'
import storageService from '../../services/storage-service.js';
export default {
    template:`
    <section class="mail-app">
     <h1>Mail App</h1>
     <mail-navbar :mails="mails"></mail-navbar>
     <!-- <mail-list :mails="mails"></mail-list> -->
     <router-view></router-view>

    </section>
    `,
    data(){
        return{
            mails:[]

        }
    },
    components:{
        mailList,
        mailNavbar,
        
    },
    created(){
      mailService.getMails().then((res)=>{
        this.mails = res
        console.log(this.mails)
        this.$route.params.mails = this.mails
      })
       eventBus.$on('mailUpdate',((data)=>{
        storageService.store('mails',this.mails)
        console.log('data',data)
       }))
    
    }
}
