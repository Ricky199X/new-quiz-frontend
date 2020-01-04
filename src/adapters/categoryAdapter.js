
class CategoryAdapter {
   constructor() {
      this.baseUrl = "http://localhost:3000/categories"
   }

   // function to get category names
   getCategories() {
      return fetch(this.baseUrl).then(resp => {
         return resp.json()
      }).then(data => {
         return data
      }).catch(err => {
         alert(err)
      })
   }

   quizzesByCategoryUrl(id) {
      return `http://localhost:3000/categories/${id}/quizzes`
   }

   getQuizzesByCategory(obj) {
   
      return fetch(this.quizzesByCategoryUrl(obj.id)).then(resp => {
         return resp.json()
      }).then(categoryQuizData => {
         const data = categoryQuizData.data
         return data
      }).then(data => {
         this.selectedQuizzes = data.map(function(quizObj) {
            return new Quiz(quizObj)
         })
         return this.selectedQuizzes
      }).catch(err => {
        alert(err);
      })
   }

   

   categoryURL(id){
      return `${this.categoriesURL}/${id}`
   }

   checkStatus(response) {
      if (response.status > 299 || response.status < 200) {
         throw new Error(response.status)
      }
   }

}