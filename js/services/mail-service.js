import utilService from './util-service.js'
import storageService from './storage-service.js'
export default {
    getMails,getMailById,gMails,addMail
}
var date = Date.now()
var gMails = [
    {
        id:utilService.makeId(),
        from:'Danny Borisov',
        subject:'The Morning After The Parade',
        body:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        time:date,
        isRead:false
    },
    {
        id:utilService.makeId(),
        from:'Ofir Topaz',
        subject:'Sign Up For The Meetup CS',
        body:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        time:date,
        isRead:false
    },
    {
        id:utilService.makeId(),
        from:'Tatiana Pov.',
        subject:'Project Submission and meeting',
        body:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        time:date,
        isRead:false
    },
    {
        id:utilService.makeId(),
        from:'Google Ads',
        subject:'The New Google Glassses are out!',
        body:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        time:date,
        isRead:false
    },
    {
        id:utilService.makeId(),
        from:'Slack Team',
        subject:'Reminder: Dont forgtet to go home',
        body:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        time:date,
        isRead:false
    },

];
function addMail(mail){
    gMails.push(mail)
}
function getMailById(id){
   return gMails.find((mail)=>{
        return mail.id ===id
    })
}
function getMails(){
    if(!storageService.load('mails')) storageService.store('mails',gMails)
    else{
        gMails = storageService.load('mails')
    }  
    return  Promise.resolve(gMails)
}





