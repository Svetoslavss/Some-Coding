(function(){

    let classmanager = new Classmanager()
    let user = new User()

    console.log(fakeUsers)

    fakeUsers.forEach(function(user) {
        let checkUsers = new checkUser(user.firstName , user.lastName , user.picture ,user.id)
    
            classmanager.addClass(checkUser);
    })

    function onHush(){
        let homePage= document.getElementById('homePage')
        let likePage = document.querySelector("#likePage")
        let blockPage = document.getElementById('blockPage')

        let page = location.hash.slice(1)

        switch(page){
            case 'home':
            homePage.style.display = "block"
            likePage.style.display = "none"
            blockPage.style.display = "none"
            break;
            case 'like':
                homePage.style.display = "none"
                likePage.style.display = "block"
                blockPage.style.display = "none"
                break;
            case 'block':
            homePage.style.display = "none"
            likePage.style.display = "none"
            blockPage.style.display = "block"
            break;
            default:
                    homePage.style.display = "block"
                    likePage.style.display = "none"
                    blockPage.style.display = "none"
        }
    }
    window.addEventListener("hashchange" , onHush)
    window.addEventListener("DOMContentLoaded" , onHush)

}())