class Category {

   constructor(categoryJSON) {
      this.id = categoryJSON.id
      this.name = categoryJSON.attributes.name
      this.description = categoryJSON.attributes.description
   }

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