class Category {

   static async retrieveAll() {

      try {
         const categoryObjects = await CategoryAdapter.instance.getCategories()
         return categoryObjects.map(obj => new this(obj))
      } catch(err) {
         alert('The request failed with error ${err}')
         return null
      }
   }
}