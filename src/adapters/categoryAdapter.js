const CategoryAdapter = (function() {

   // singleton class variable 
   let instance = null

   return class{

      static get instance() {
         if(instance === null) {instance = new this()}
         return instance
      }

      constructor() {
         if(instance !== null) {
            return instance
         } else {
            this.token = null
            instance = this
            return instance 
         }
      }

      get baseURL() {
         return `http://localhost:3000`
      }

      get categoriesURL() {
         reuturn `${this.baseURL}/categories`
      }

      categoryURL(id){
         return `${this.categoriesURL}/${id}`
      }

      get headers() {
         const stdHeader = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }

   }

})()