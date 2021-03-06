class QuizManager {
   constructor() {
      this.currentQuiz = null
      this.adapter = new QuizAdapter()
      this.initBindingAndEventListeners()
      this.initQuizBindingAndEventListeners()
      this.selectedQuiz = null
   }

   initBindingAndEventListeners() {
      this.container = document.querySelector('#app-container')
      this.categoryQuizzesContainer = document.querySelector('#selected-category-quizzes')
      this.categoryQuizzesContainer.addEventListener('click', this.selectQuizHandler.bind(this))
   }

   initQuizBindingAndEventListeners() {
      this.header = document.querySelector('#quiz-header')
      this.form = document.querySelector('#quiz-form')
   }

   initResultBindingAndEventListeners() {
      this.container = document.querySelector('#app-container')
      this.form = document.querySelector('#quiz-form')
      this.results = document.querySelector('#results')
      this.submitButton = document.querySelector('input#Submit')
      this.form.addEventListener('submit', this.submitQuizHandler.bind(this))
   }

   selectQuizHandler(event) {
      this.selectedQuizName = event.target.innerText
      // this populates this.selectedQuiz with the selected Quizzes name
      // now want to make a catch to the fetchQuizByTitle function in my quizAdapter, passing it the quizName
      this.renderStaticHTML()
      this.initQuizBindingAndEventListeners()
      this.adapter.fetchQuizByTitle(this.selectedQuizName).then((quiz) => {
         // at THIS point, I've made a successful fetch call and have instantiated a quiz object in my quizAdapter
      // the goal is to take that quiz object, and LOAD its contents, and be able to operate on it 
         this.currentQuiz = quiz[0]
         this.renderQuizInfo()
      }).then(() => {
         this.initResultBindingAndEventListeners()
      })
   }

   // 
   submitQuizHandler(event) {
      event.preventDefault()
      // this gets a node list of all inputs in the form 
      const test = event.target.querySelectorAll('input')
      // this calls collect user answers to get user's answers
      this.currentQuiz.collectUserAnswers(test)

      // this calls check answers to compare the user answers array to the correct answers array
      let userAnswerArray = this.currentQuiz.userAnswers
      let correctAnswers = this.currentQuiz.answers

      this.currentQuiz.checkAnswers(userAnswerArray, correctAnswers)
      this.renderScore()
      this.renderLikeButton()
      this.renderRetakeQuizButton()
      this.renderHomeButton()
   }

   // function to render selected quiz to the page
   render() {
      this.container.innerHTML = this.currentQuiz.htmlWithLabel
   }

   // renders static HTML once a quiz has been selected
   staticHTML() {
      return (`
      <body>
      <div id='container'>
         <header id="quiz-header">
         <div class="loader"></div>
            
         </header>

         <section>
            <div id='results'></div>
            <form name="quiz-form" id="quiz-form" >   
              
            </form>
         </section>
      </div>
   
   </body>
      
      `)
   }

   renderStaticHTML() {
      this.container.innerHTML = this.staticHTML()
   }
   
   renderQuizInfo() {
      this.header.innerHTML = this.currentQuiz.quizTitle()
      this.form.innerHTML = this.currentQuiz.quizForm()
   }

   renderScore() {
      this.container.innerHTML = this.currentQuiz.renderMessage()
   }

   renderHomeButton() {
      let homeButtonDiv = document.createElement('div')
      homeButtonDiv.innerHTML = '<input type="submit" id="home-button" value="Back to Home"></input>'
      this.container.appendChild(homeButtonDiv)

      // click home button, go back out to categories
      homeButtonDiv.addEventListener('click', () => {
         window.location.reload(true)
      })
   }

   renderLikeButton() {
      let upvoteButtonDiv =  document.createElement('div')
      upvoteButtonDiv.innerHTML = ('<div class="upvote"><h1>Did you like this quiz? Give us a <i class="material-icons">thumb_up</i> !</h1> </div></br>')
      this.container.appendChild(upvoteButtonDiv)

      upvoteButtonDiv.addEventListener('click', () => {
         this.currentQuiz.addUpvote()
         const newUpvoteValue = this.currentQuiz.upvoteCount
         const id = this.currentQuiz.id
         this.adapter.sendUpvote(newUpvoteValue,id)
         
         // thank you message
         let messageDiv = document.createElement('div')
         messageDiv.innerHTML = '<h3>Thank you for voting! Click "Back to Home" for more quizzes or feel free to retake this one!</h3>'
         this.container.appendChild(messageDiv)

      })

   }

   renderRetakeQuizButton() {
      let retakeButtonDiv = document.createElement('div')
      retakeButtonDiv.innerHTML = '<input type="submit" id="retake" value="Retake this quiz!"></input>'
      this.container.appendChild(retakeButtonDiv)
   

      retakeButtonDiv.addEventListener('click', ()=> {
         this.selectedQuizName = this.currentQuiz.title
         // this populates this.selectedQuiz with the selected Quizzes name
         // now want to make a catch to the fetchQuizByTitle function in my quizAdapter, passing it the quizName
         this.renderStaticHTML()
         this.initQuizBindingAndEventListeners()
         this.adapter.fetchQuizByTitle(this.selectedQuizName).then((quiz) => {
            // at THIS point, I've made a successful fetch call and have instantiated a quiz object in my quizAdapter
         // the goal is to take that quiz object, and LOAD its contents, and be able to operate on it 
            this.currentQuiz = quiz[0]
            this.renderQuizInfo()
         }).then(() => {
            this.initResultBindingAndEventListeners()
         })
      })
         
      
      
   }




}