const QuizAdapter = (function() {

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
         return `${this.baseURL}/categories`
      }

      // gets one singular category + everything in it
      categoryURL(id){
         return `${this.categoriesURL}/${id}`
      }

      // gets that one singular category + its associated quizzes
      categoryQuizzesUrl(){
         return `${this.categoryURL}/quizzes`
      }

      // gets one instance of that category's quizzes
      categoryQuizUrl(id) {
         return `${this.categoryQuizzesUrl}/${id}`
      }

      get headers() {
         const stdHeader = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
         }
      }

      async getQuizzes() {
         const response = await fetch(this.categoryQuizzesUrl)
         this.checkStatus(response)
         return await response.json()
      }

      async getCategory(id) {
         const response = await fetch(this.categoryURL(id))
         this.checkStatus(response)
         return await response.json()
      }


      checkStatus(response) {
         if (response.status > 299 || response.status < 200) {
            throw new Error(response.status)
         }
      }


   }

})()