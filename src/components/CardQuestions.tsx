import { useState } from "react";


const questions = [
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript"
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components"
    },
    {
      id: 8832,
      question: "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX"
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props"
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook"
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element"
    }
  ];


const CardQuestions = () => {

    const [isOpenCard , setIsOpenCard] = useState<number>()

    const handleOpenCard = (id : number) => {
        setIsOpenCard(id !== isOpenCard ? id : 0)
    }
    

  return (
    <div className="container mx-auto mt-6 ">
        <hr />
        <div className="flex flex-wrap justify-center mt-3">
            {questions.map((question) => (
                <div
                    onClick={()=>handleOpenCard(question.id)}
                    key={question.id} 
                    className={`  w-full md:w-1/2 lg:w-1/3`}>
                    <div className={` ${isOpenCard === question.id ? 'bg-teal-600 transition-all duration-300 ' : 'bg-white'} hover:cursor-pointer rounded shadow-md p-8 m-4`}>
                        <h2 className="text-lg font-bold mb-4">{isOpenCard === question.id ? question.answer : question.question}</h2>
                    </div>
                </div> 
            ))}
        </div>
    </div>
  )
}

export default CardQuestions