class quizManager() {

   constructor() {
      this.answers = []
      this.questions = []
      this.adapter = new QuizAdapter()
      this.initBindingAndEventListeners()
      this.selectedQuiz = null
   }

}

// class QuizSelector {
//    constructor() {
//       this.quizzes = []
//       this.initBindingsAndEventListeners()
//       this.fetchAndLoadCategoryQuizzes()
//       this.selectedQuiz = null
//    }


//    initBindingsAndEventListeners() {
//       this.container = document.querySelector('#category-quizzes')
//       this.quizzesContainer = document.querySelector('#selected-category-quizzes')
//       // this.quizzesContainer.addEventListener('click', this.quizHandler.bind(this))
//    }

//    // selectCategoryHandler(event) {
//    //    // this needs to update this.selectedCategory, so it needs a reference to this.
//    //    // this is why we bound this to it up top
//    //    if (event.target.classList.contains('select-category')) {
//    //       const id = parseInt(event.target.dataset.id)
//    //       const selection = this.categories.find(category => category.id === id)

//    //       if (selection === this.selectedCategory) {
//    //          event.target.parentElement.style.background = "rgb(217, 238, 237)"
//    //          this.selectedCategory = null
//    //       } else if (this.selectedCategory !== null ){
//    //          const categoryContainer = Array.from(this.allCategoriesContainer.children).find(container => {
//    //             const button = container.querySelector('button.select-category')
//    //             return button.dataset.id === this.selectedCategory.id
//    //          })
//    //          categoryContainer.style.background = "rgb(217, 238, 237)"
//    //          event.target.parentElement.style.background = "white"
//    //          this.selectedCategory = selection
//    //       } else {
//    //          event.target.parentElement.style.background = 'white'
//    //          this.selectedCategory = selection
//    //       }
//    //    }
//    //    // console.log(this.selectedCategory)
//    // }

//    async fetchAndLoadCategoryQuizzes() {
//       this.quizzes = await Quiz.retrieveAllQuizzes()
//       this.render()
//    }

//    // render() {
//    //    this.quizzesContainer.innerHTML = this.quizzes.map(quiz => quiz.htmlWithLabel).join(' ')
//    // }

// }