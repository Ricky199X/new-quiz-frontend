// const CategoryAdapter = (function() {

//    // singleton class variable 
//    let instance = null

//    return class{

//       static get instance() {
//          if(instance === null) {instance = new this()}
//          return instance
//       }

//       constructor() {
//          if(instance !== null) {
//             return instance
//          } else {
//             this.token = null
//             instance = this
//             return instance 
//          }
//       }

//       get baseURL() {
//          return `http://localhost:3000`
//       }

//       get categoriesURL() {
//          return `${this.baseURL}/categories`
//       }

//       categoryURL(id){
//          return `${this.categoriesURL}/${id}`
//       }

//       get headers() {
//          const stdHeader = {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//          }
//       }

//       async getCategories() {
//          const response = await fetch(this.categoriesURL)
//          this.checkStatus(response)
//          return await response.json()
//       }

//       async getCategory(id) {
//          const response = await fetch(this.categoryURL(id))
//          this.checkStatus(response)
//          return await response.json()
//       }


//       checkStatus(response) {
//          if (response.status > 299 || response.status < 200) {
//             throw new Error(response.status)
//          }
//       }


//    }

// })()

class CategoryAdapter {
   constructor() {
      this.baseUrl = "http://localhost:3000/categories"
   }

   // function to get category names
   getCategories() {
      return fetch(this.baseUrl).then(resp => {
         return resp.json()
      }).then(data => {
         // console.log(data)
         return data
      }).catch(err => {
         alert(err)
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