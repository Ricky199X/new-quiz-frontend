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

   quizForm() {
      return (`
      <form name="quizForm " onsubmit="return submitAnswers()">   
      <h3>1. In which HTML element do we put in JavaScript code?</h3>
      <input type = "radio" name = "q1" value="a" id="q1a">a. &lt;js&gt;<br>
      <input type = "radio" name = "q1" value="b" id="q1b">b. &lt;script&gt;<br>
      <input type = "radio" name = "q1" value="c" id="q1c">c. &lt;script&gt;<br>
      <input type = "radio" name = "q1" value="d" id="q1d">d. &lt;script&gt;<br>

      <h3>2. 2 + 2 = ?</h3>
      <input type = "radio" name = "q2" value="a" id="q2a">a. 5<br>
      <input type = "radio" name = "q2" value="b" id="q2b">b. 1000<br>
      <input type = "radio" name = "q2" value="c" id="q2c">c. 75<br>
      <input type = "radio" name = "q2" value="d" id="q2d">d. 4<br>

      <h3>3. What is the capital of Massaschusetts?</h3>
      <input type = "radio" name = "q3" value="a" id="q3a">a. Springfield<br>
      <input type = "radio" name = "q3" value="b" id="q3b">b. Boston<br>
      <input type = "radio" name = "q3" value="c" id="q3c">c. Hartford<br>
      <input type = "radio" name = "q3" value="d" id="q3d">d. Chicago<br>

      <br><br>
      <input type="submit" value="Submit Answers">
   </form>
      
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