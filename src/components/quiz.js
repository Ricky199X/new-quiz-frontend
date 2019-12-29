class Quiz {
   constructor(quizJSON) {
      this.id = quizJSON.id
      this.title = quizJSON.attributes.title
      this.description = quizJSON.attributes.description
      this.questions = quizJSON.attributes.questions.map(question => ({...question, content: JSON.parse(question.content)}))
      this.answers = quizJSON.attributes.questions.map(question => question.correct_answer)
      // console.log(this.answers)
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

   mapContent(array, name) {
     return  array.map((possibleAnswer, i) => {
         return (`
            <input type = "radio" data-id= ${i + 1} name="q-${name + 1}" id="q${name + 1}choice${i + 1}">${possibleAnswer}<br>
         `)
      }).join('')
   }

   getUserAnswers() {
      
   }


   quizTitle() {
      return (`
      <h1>${this.title}</h1>
      <h2>${this.description}</h2>
      `)
   }

   quizForm() {
      return this.questions.map((question, i) => {
         return (`
            <h3> ${i + 1}. ${question.prompt}</h3> 
            ${this.mapContent(question.content, i)} 
         `)
      }).join('') + `<input type="submit" id="Submit" value="Submit Answers" onlick="checkAnswers()"></input>`
   }
   
   checkAnswers(obj) {
      let userAnswer = '';
      let numCorrect = 0;
      
      // for each question...

      for(let i = 0; i < this.obj.length; i++) {
         console.log(this.obj.length)

         // find the selected answer
         // userAnswer = ....

         // if (userAnswer == this.questions[i].correct_answer) {
         //    numCorrect++
         // } else {
         //    // if answer is wrong or blank
         //    numCorrect += 0
         // }
         
      }
      return `You scored: ${numCorrect} out of ${obj.length}!`
   }

}


   // ------ Junk Code --------


