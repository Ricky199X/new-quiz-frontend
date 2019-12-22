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


   
   constructor(params) {
      // descructuring this object - taking params + making variable for each property of these params
      const {id, name, description} = params
      this.id = id
      this.name = name
      this.name = description
   }

   


}