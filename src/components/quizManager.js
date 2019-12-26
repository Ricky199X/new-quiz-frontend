class QuizManager {

   constructor() {
      this.correctAnswers = []
      this.currentQuiz = []
      this.currentQuizQuestions = []
      this.currentQuizChoices = []
      this.adapter = new QuizAdapter()
      this.initBindingAndEventListeners()
      this.selectedQuiz = null
   }

   initBindingAndEventListeners() {
      this.container = document.querySelector('#app-container')
      this.categoryQuizzesContainer = document.querySelector('#selected-category-quizzes')
      this.categoryQuizzesContainer.addEventListener('click', this.selectQuizHandler.bind(this))
      this.quizBorder.addEventListener('click', this.startQuizHandler.bind(this))
   }


   selectQuizHandler(event) {
      this.selectedQuizName = event.target.innerText
      // this populates this.selectedQuiz with the selected Quizzes name
      // now want to make a catch to the fetchQuizByTitle function in my quizAdapter, passing it the quizName
      this.adapter.fetchQuizByTitle(this.selectedQuizName).then((quiz) => {
         // at THIS point, I've made a successful fetch call and have instantiated a quiz object in my quizAdapter
      // the goal is to take that quiz object, and LOAD its contents, and be able to operate on it 
         this.currentQuiz = quiz
         this.loadQuestions()
         this.loadAnswers()
         this.loadChoices()
      }).then(() => {
         this.render()
      })
   }

   startQuizHandler(event) {
      this.
   }

   // now we want to load the questions, set them to this.quizQuestions
   loadQuestions() {
      this.currentQuizQuestions = this.currentQuiz[0].questions.map((question) => {
         return question.prompt
      })
   }

   // loads array of answers for each question
   loadAnswers() {
      this.correctAnswers = this.currentQuiz[0].questions.map((question) => {
         return question.correct_answer
      })
   }

   // loads an array of choices for each question
   loadChoices() {
      this.currentQuizChoices = this.currentQuiz[0].questions.map((question) => {
         return question.content
      })
      console.log(this)
   }


   // function to render selected quiz to the page
   render() {
      this.container.innerHTML = this.currentQuiz.map(quiz => quiz.htmlWithLabel).join(' ')
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