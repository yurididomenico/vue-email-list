// JAVASCRIPT //

console.log("YDD");

var app = new Vue
({
    el: '#app',
    data: 
    {
        listaMail:
        [
            
        ]
    },

    methods: 
    {
        test()
        {
            listaMail = ""
            for(let i=0; i<10; i++)
            {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((risposta) =>
                {
                    let nuovaMail = risposta.data.response
                    this.listaMail.push(nuovaMail)
                    console.log(this.listaMail[i])
                })
                
            }
        }
    }
})





















// ----- FINE :) -----