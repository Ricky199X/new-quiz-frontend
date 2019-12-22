class Quiz {

   constructor{
      this.quizzes = []
      this.initBindingsAndEventListeners()
   }

   initBindingsAndEventListeners() {
      this.categoryQuizContainer = document.querySelector('#category-quizzes')
      this.categoryQuizContainer.addEventListener('click', this.handleQuizClick(this))
   }

}