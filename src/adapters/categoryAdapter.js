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

   }

})()