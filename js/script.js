
const {createApp} = Vue;

createApp({
    data(){
        return{
            alphabetical: 0,
            mail: '',
            emails : [],
            emails_sorted : []

        }
    },
    methods: {
        getEmail(n){
            for(let i=0; i<n; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.mail= result.data.response;
                    console.log(this.mail);
                    this.emails.push(this.mail);
                });
            };
            console.log(this.emails);
        },
        alphabeticalOrder(){
            this.emails_sorted= this.emails.sort();
            console.log(this.emails_sorted);
            this.alphabetical = 1;
        },
        chooseOne(i){
            alert(`Complimenti, hai scelto ${this.emails[i]}`);
            window.location.reload();
        },
        chooseOneSorted(i){
            alert(`Complimenti, hai scelto ${this.emails_sorted[i]}`);
            window.location.reload();
        }

    }
    
}).mount('#app');