class QuizAdapter {

   constructor() {
      this.baseUrl = "http://localhost:3000/quizzes"
   }

   fetchQuizByTitle(title) {
      return fetch(this.baseUrl).then(response => {
         return response.json();
       }).then(data => {
         // Work with JSON data here
         const quizData = data.data
         console.log(quizData)
         return quizData
       }).then(quizData => {
         const filteredQuizArray = quizData.filter(quizObj => quizObj.attributes.title === title)
         return filteredQuizArray
         // need to now map this single quiz object to a new instance of Quiz
       }).then(filteredQuizArray => {
          this.selectedQuiz = filteredQuizArray.map(function(quizObj) {
             return new Quiz(quizObj)
          })
         //  console.log(this.selectedQuiz)
          return this.selectedQuiz
       }).catch(err => {
        alert(err);
      })
   }

   sendUpvote(value, id) {
      const upvote = {
         body: value,
      }

      return fetch(`${this.baseUrl}/id`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify( { upvote }),
      }).then(res => res.json())
   }

 

}