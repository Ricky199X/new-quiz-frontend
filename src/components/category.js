class Category {

   // static async retrieveAll() {

   //    try {
   //       // const categoryObjects = await CategoryAdapter.instance.getCategories()
   //       // console.log(categoryObjects) 
   //       return categoryObjects.map(obj => new this(obj))
   //    } catch(err) {
   //       alert('The request failed with error ${err}')
   //       return null
   //    }
   // }

   constructor(categoryJSON) {
      this.id = categoryJSON.id
      this.name = categoryJSON.attributes.name
      this.description = categoryJSON.attributes.description
   }


   
   // constructor(params) {
   //    // descructuring this object - taking params + making variable for each property of these params
   //    const {id, name, description} = params
   //    this.id = id
   //    this.name = name
   //    this.description = description
   // }

   get htmlWithLabel() {
      return (`
         <div class="category-border">
            <ul>
               <li>Name: ${this.name} </li>
               <li>Description: ${this.description}</li>
            </ul>
            <button class="select-category" data-id="${this.id}">Select</button>
         </div>
      `)
   }



}