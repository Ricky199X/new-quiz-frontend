class CategorySelector {
   constructor() {
      this.categories = []
      this.initBindingsAndEventListeners()
      this.fetchAndLoadCategories()
   }

   initBindingsAndEventListeners() {
      this.container = document.querySelector('#category-selector')
      this.allCategoriesContainer = document.querySelector('#all-categories')
   }

   async fetchAndLoadCategories() {
      this.categories = await Category.retrieveAll()
      this.render()
   }

   render() {
      this.allCategoriesContainer.innerHTML = this.categories.map(category => category.htmlWithLabel).join(' ')
   }

}