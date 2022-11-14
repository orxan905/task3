   let div = document.querySelector('div');

let arr = [];

class Message{
    constructor(name,message){
        this.name = name;
        this.message = message;
    }
    
}


class Messenger extends Message{
    constructor(name,message){
        super(name,message);
    }
    gettime() {
        let now = new Date();
        return `${now.getHours()}:${now.getMinutes()}`
    }
    
    send(name,message){
        this.name = name;
        this.message = message;
        div.innerHTML += `<p>${this.gettime()} ${this.name}: ${this.message}</p><br>`;
        arr.push(this.gettime()+" "+ this.name + ":" + " "+ this.message);
        
    }
    show_history(){
        console.log(arr)
    }
    
}

let messenger = new Messenger();
messenger.send('Adil','ilk mesaj');
messenger.send('Revan','ikinci mesaj');
messenger.show_history()

