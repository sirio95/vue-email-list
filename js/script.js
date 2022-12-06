
const {createApp} = Vue;

createApp({
    data(){
        return{
            mail: '',
            emails : []

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
        }

    }
    
}).mount('#app');