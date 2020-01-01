class Quiz {
   constructor(quizJSON) {
      this.id = quizJSON.id
      this.title = quizJSON.attributes.title
      this.description = quizJSON.attributes.description
      this.questions = quizJSON.attributes.questions.map(question => ({...question, content: JSON.parse(question.content)}))
      this.answers = quizJSON.attributes.questions.map(question => question.correct_answer)
      // console.log(this.answers)
      this.userAnswers = []
      this.matches = []
      this.userFinalScore = 0
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
            <input type = "radio" data-id= ${i + 1} name="q-${name + 1}" id="q${name + 1}choice${i + 1}" required>${possibleAnswer}<br>
         `)
      }).join('')
   }

   collectUserAnswers(test) {
      // array of all inputs in the form 
      var arr = Array.from(test)

      // array of all selected inputs in the form
      // get inputs, filter the clicked selections

      var filteredArr = arr.filter((input) => input.checked)
      // console.log(filteredArr)

      // now need to get the data-id of each value in the filtered Array of selected inputs, map those to a new array
      // assign those answers to this.userSubmittedAnswers

      this.userAnswers = filteredArr.map((input) => {
         return parseInt(input.dataset.id)
      })
      return this.userAnswers
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
      }).join('') + `<input type="submit" id="Submit" value="Submit Answers"></input>`
   }
   
   checkAnswers(userArr, correctAnswers) {
      // this maps thru the userAnswers, compares each answer to the correct answer. 
      // returns an array of 1's (anything that evaluates to true) and 0's (anything that evaluates to false)
      var result = userArr.map(function(userAnswer, i) {
         return + (userAnswer == correctAnswers[i])
      })

      // now we reduce the result array, we need to get the perecentage for the final score. 
      var finalPercentage = result.reduce((acc, curr) => acc + curr) / correctAnswers.length * 100
      this.userFinalScore = Number(finalPercentage.toFixed(2))
      console.log(this.userFinalScore)
   }

}


   // ------ Junk Code --------


