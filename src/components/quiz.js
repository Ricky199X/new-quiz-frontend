class Quiz {

   static async retrieveAllQuizzes() {

      try {
         const json = await QuizAdapter.instance.getQuizzes()
      } catch(err) {
         
      }



   }

}