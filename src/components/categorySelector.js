class CategorySelector {
   constructor() {
      this.categories = []
      this.categoryQuizzes = []
      this.adapter = new CategoryAdapter()
      this.initBindingsAndEventListeners()
      this.fetchAndLoadCategories()
      this.selectedCategory = null
   }

   initBindingsAndEventListeners() {
      this.container = document.querySelector('#category-selector')
      this.allCategoriesContainer = document.querySelector('#all-categories')
      this.categoryQuizzesContainer = document.querySelector('#selected-category-quizzes')
      this.allCategoriesContainer.addEventListener('click', this.selectCategoryHandler.bind(this))
   }

   selectCategoryHandler(event) {
      // this needs to update this.selectedCategory, so it needs a reference to this.
      // this is why we bound this to it up top
      if (event.target.classList.contains('select-category')) {
         const id = parseInt(event.target.dataset.id)
         const selection = this.categories.find(category => parseInt(category.id) === id)

         if (selection === this.selectedCategory) {
            event.target.parentElement.style.background = "rgb(250, 250, 250)"
            this.selectedCategory = null
         } else if (this.selectedCategory !== null ){
            const categoryContainer = Array.from(this.allCategoriesContainer.children).find(container => {
               const button = container.querySelector('button.select-category')
               return button.dataset.id === this.selectedCategory.id
            })
            categoryContainer.style.background = "white"
            event.target.parentElement.style.background = "rgb(250, 250, 250)"
            this.selectedCategory = selection
         } else {
            event.target.parentElement.style.background = 'white'
            this.selectedCategory = selection
         }
      }
      if (this.selectedCategory) {
         this.adapter.getQuizzesByCategory(this.selectedCategory).then((quizArray) => {
            this.categoryQuizzes = quizArray
            this.renderSelectedCategoryQuizzes()
         })
      } else {
         this.categoryQuizzesContainer.innerHTML = ""
      }
      
   }

   async fetchAndLoadCategories() {
      this.adapter
      .getCategories()
      .then(function(categoryJSON) {
         const categoryInfo = categoryJSON.data
         return categoryInfo
      }).then(categoryInfo => {
         this.categories = categoryInfo.map(function(categoryObject) {
            return new Category(categoryObject)
         })
      }).then(() => {
         this.render()
      }) 
   }

   render() {
      this.allCategoriesContainer.innerHTML = this.categories.map(category => category.htmlWithLabel).join(' ')
   }

   renderSelectedCategoryQuizzes() {
      this.categoryQuizzesContainer.innerHTML = `<ul>${this.categoryQuizzes.map(quiz => quiz.liHTML()).join("")}</ul>`
   }



}