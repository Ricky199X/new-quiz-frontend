class Quiz {

   // static async retrieveAllQuizzes() {

   //    try {
   //       const quizObjects = await QuizAdapter.instance.getQuizzes()
   //       return quizObjects.map(obj => new this(obj))
   //    } catch(err) {
   //       alert(`The request failed with ${err}`)
   //       return null
   //    }
   // }

   constructor(quizJSON) {
      console.log(quizJSON)
      this.id = quizJSON.id
      this.title = quizJSON.attributes.title
      this.description = quizJSON.attributes.description
      // this.questions = quizJSON.attributes.questions
   }

   liHTML() {
      return `<li>${this.title}</li>`
   }

   // function to renders a quiz's questions
   renderQuestions() {
      for(let i = 0; i < this.questions.length; i++) {
         return `<li> ${i + 1}. ${this.questions[i].prompt}</li>`
      }
   }

}