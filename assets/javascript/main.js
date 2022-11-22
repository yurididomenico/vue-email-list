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
        // Genera 10 mail e le pusha dentro il vettore listaMail - Funzione collegata al bottone "Vai!"
        generaMail()
        {
            // Svuota vettore qualora ci fossero dati all'interno
            this.listaMail = [];

            // Pulisce la console
            console.clear();

            // Ciclo x10 genera mail
            for(let i=0; i<10; i++)
            {
                // Controllo lunghezza vettore non superiore a 10 elementi
                if(this.listaMail.length < 10)
                {
                    // Ottengo dati API dal link
                    axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((risposta) => //Dopo aver ottenuto faccio:
                    {
                        // Definisco variabile di appoggio = prendo la sezione di oggetto che mi serve (mail)
                        let nuovaMail = risposta.data.response;
                        //Pusho l'email nel vettore listaMail
                        this.listaMail.push(nuovaMail);
                        // Stampo in consolel'elemento del vettore
                        console.log(this.listaMail[i]);
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