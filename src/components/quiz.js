class Quiz {
   constructor(quizJSON) {
      // console.log(quizJSON)
      this.id = quizJSON.id
      this.title = quizJSON.attributes.title
      this.description = quizJSON.attributes.description
      this.questions = quizJSON.attributes.questions
      // when you render the questions - make to parse JSON.questions.content
      this.answers = quizJSON.attributes.questions.answers
   }

   get htmlWithLabel() {
      return (`
         <div class="quiz-border">
            <ul>
               <li>Name: ${this.title} </li>
               <li>Description: ${this.description}</li>
            </ul>
            <button class="start-quiz" data-id="${this.id}">Start Quiz</button>
            <button class="back">Go Back to Main Menu</button>
         </div>
      `)
   }

   liHTML() {
      return `<li data-id="${this.id}">${this.title}</li>`
   }

   // function to renders a quiz's questions
   renderQuestions() {
      for(let i = 0; i < this.currentQuizQuestions.length; i++) {
         console.log(currentQuizQuestions)
         return `<h3> ${i + 1}. ${this.currentQuizQuestions[i].prompt}</h3>`
      }
   }


   quizTitle() {
      return (`
      <h1>${this.title}</h1>

      `)
   }
  
   

      // // now we want to load the questions, set them to this.quizQuestions
      // loadQuestions() {
      //    this.currentQuizQuestions = this.currentQuiz.questions.map((question) => {
            
      //       return question
      //    })
      // }
   
      // // loads array of answers for each question
      // loadAnswers() {
      //    this.correctAnswers = this.currentQuiz.questions.map((question) => {
      //       return question.correct_answer
      //    })
      // }
   

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