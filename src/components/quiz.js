class Quiz {

   static async retrieveAllQuizzes() {

      try {
         const quizObjects = await QuizAdapter.instance.getQuizzes()
         return quizObjects.map(obj => new this(obj))
      } catch(err) {
         alert(`The request failed with ${err}`)
         return null
      }
   }

}