class Quiz {

   constructor() {
      this.quizzes = []
      this.initBindingsAndEventListeners()
   }

   initBindingsAndEventListeners() {
      this.container = document.querySelector('#category-quizzes')
      this.quizContainer = document.querySelector('#quiz-div')
      this.quizContainer.addEventListener('click', this.handleQuizClick(this))
   }

   handleQuizClick(event) {
      console.log('clicked')
   }

}