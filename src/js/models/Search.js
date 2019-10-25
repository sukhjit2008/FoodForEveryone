import axios from 'axios';
export default class Search{
    constructor(query){
        this.query=query;
    }
    async  getResults(){
        const key='5e4f2aced9ebf609b42bf40cf5882170'
        try{
            //const res = await axios(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${key}&q=${this.query}`)
           //this.results=res.data.recipes;
       // console.log(this.results);
        }catch(error){
            alert(error)
        }
    }
}


