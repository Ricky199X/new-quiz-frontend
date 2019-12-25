class Quiz {
   constructor(quizJSON) {
      // console.log(quizJSON)
      this.id = quizJSON.id
      this.title = quizJSON.attributes.title
      this.description = quizJSON.attributes.description
      this.questions = quizJSON.attributes.questions
      this.answers = quizJSON.attributes.questions.answers
   }

   liHTML() {
      return `<li data-id="${this.id}">${this.title}</li>`
   }

   // function to renders a quiz's questions
   renderQuestions() {
      for(let i = 0; i < this.questions.length; i++) {
         return `<li> ${i + 1}. ${this.questions[i].prompt}</li>`
      }
   }

}


   // static async retrieveAllQuizzes() {

   //    try {
   //       const quizObjects = await QuizAdapter.instance.getQuizzes()
   //       return quizObjects.map(obj => new this(obj))
   //    } catch(err) {
   //       alert(`The request failed with ${err}`)
   //       return null
   //    }
   // }