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
         this.startQuizHandler()
      })
   }

   // start quiz button - need it to render the contents of the quiz once we click 
   startQuizHandler() {
      this.startButton = document.querySelector('button')
      this.startButton.addEventListener('click', event => {
         console.log('hello!')
      })
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