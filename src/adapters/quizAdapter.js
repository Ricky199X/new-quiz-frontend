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

   sendUpvote(value,id) {
    console.log(value)
    console.log(id)
    console.log(this)

      return fetch(`${this.baseUrl}/${id}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json',
            "Accept": "application/json"
         },
         body: JSON.stringify({ 
            title: this.selectedQuiz.title,
            description: this.selectedQuiz.description,
            upvote_count: value 
         }),
      }).then(res => res.json())
   }

 

}