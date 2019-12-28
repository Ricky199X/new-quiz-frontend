class QuizManager {

   constructor() {
      this.currentQuiz = null
      this.adapter = new QuizAdapter()
      this.initBindingAndEventListeners()
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
      })
   }

   // start quiz button - need it to render the contents of the quiz once we click 
   startQuizHandler() {
      this.startButton = document.querySelector('button')
      this.startButton.addEventListener('click', event => {
         console.log('you have clicked the start button - cool!')
         // at this point, we want to:
         // 1. start the 2 minute timer
         // 2. render the quiz 
      })
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





}