class User {
    constructor(){
        this.likedUsers = []
        this.blockedUsers = []
    }
    likedUsers(user){
            if(user instanceof CheckUser){
                this.likedUsers.push(user)
            }
    }

    removeFromLikedList(user){
        let index;

        for(let i = 0 ; i <= this.likedUsers.length ;i++){

            if(this.likedUsers[i].id === user.id ){
                index = i
            }
        }

        this.likedUsers.splice(index , 1)
    }

    blockedUsers(user){
        if(user instanceof CheckUser){
                this.blockedUsers.push(user)
        }

    }
}