class Classmanager {

    constructor(){
        this.class = []

    }
    addClass(checkUser){
        if(checkUser instanceof checkUser){
    this.class.push(checkUser)
        }
    }
    searchByName(searchStr){

        if(typeof searchStr !== "string" && searchStr.trim().length === 0){
            return;
        }

        let filtered = []
        let lowerCasedSearch = searchStr.toLowerCase().trim()

        for(let i = 0 ; i <= this.class.length ; i++){
            let lowerCasedName = this.class[i].fullName.toLowerCase()
            if(lowerCasedName.includes(lowerCasedSearch)){
                filtered.push(this.class[i])
            }
        }
        return filtered
    }
    sortBy(){
        
    }
}