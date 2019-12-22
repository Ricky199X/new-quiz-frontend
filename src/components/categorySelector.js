class CategorySelector {
   constructor() {
      this.categories = []
      this.initBindingsAndEventListeners()
   }

   initBindingsAndEventListeners() {
      this.container = document.querySelector('#category-selector')
      this.allCategoriesContainer = document.querySelector('#all-categories')
   }
}