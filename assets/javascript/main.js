// JAVASCRIPT //

console.log("YDD");

var app = new Vue
({
    el: '#app',
    data: 
    {
        listaMail: []
    },

    methods: 
    {
        test()
        {
            // if(this.listaMail.length == 10)
            // {
            //     location.reload()
            // }

            this.listaMail = [];

            console.clear();

            for(let i=0; i<10; i++)
            {
                if(this.listaMail.length < 10)
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
        },

        refresh()
        {
            location.reload()
        }
        
    }
})





















// ----- FINE :) -----