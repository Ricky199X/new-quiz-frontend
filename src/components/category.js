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
      this.description = description
   }

   get htmlWithLabel() {
      return (`
         <div class="category-border">
            <ul>
               <li>Name: ${this.name} </li>
               <li>Description: ${this.description}</li>
            </ul>
            <button id="select-category" data-id="${this.id}">Select</button>
         </div>
      `)
   }



}