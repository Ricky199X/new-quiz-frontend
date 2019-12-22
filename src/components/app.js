class App {
   constructor(container) {
      this.container = container
      this.categorySelector = new CategorySelector()
      this.quizSelector = new QuizManager()
      // this.quiz = new Quiz()
   }
}