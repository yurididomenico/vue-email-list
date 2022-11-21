// JAVASCRIPT //

console.log("YDD");

var app = new Vue
({
    el: '#app',
    data: 
    {
        mail: ""
    },

    methods: 
    {
        test()
        {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((risposta) =>
            {
                let nuovaMail = risposta.data.response
                this.mail = nuovaMail
                console.log(this.mail)
            })
        }
    }
})





















// ----- FINE :) -----