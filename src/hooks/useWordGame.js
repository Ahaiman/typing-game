import {useState, useEffect, useRef} from "react"


export default function useWordGame(startingTime = 10){
    
    const FINISHING_TIME = 0
    const SECOND = 1000
   
    const [ text, setText ] = useState("")
    const [ remainingTime, setRemainingTime ] = useState(startingTime)
    const [ isTimeRunning, setIsTimeRunning ] = useState(false)
    const [ wordCount , setWordCount ] = useState(FINISHING_TIME)
    const textBoxRef = useRef(null)
   
    const handleChange = (event) => {
       const {value} = event.target
       setText(value)
     }
   
     const calculateWordCount = (str) => {
       const wordsArr = str.trim().split(" ")
       return wordsArr.filter( word => word !== "").length
     }
   
     const startGame = () => {
       setIsTimeRunning(true)
       setRemainingTime(startingTime)
       setWordCount(0)
       setText('')

       /*synchronic opperation */
       textBoxRef.current.disabled = false

       /*Allows you to type directly on the text box*/
       textBoxRef.current.focus()
     }
   
     const endGame = () => {
       setIsTimeRunning(false)
       setWordCount(calculateWordCount(text))
     }

     useEffect( () => {
       if(isTimeRunning && remainingTime > FINISHING_TIME){
          setTimeout(() => {setRemainingTime(prevTime =>
             prevTime - 1)}
            , SECOND)
         }
       else if(remainingTime === FINISHING_TIME){
          endGame();
        }
       }, [remainingTime, isTimeRunning])
    
    
     return {textBoxRef, handleChange, text,
         isTimeRunning, remainingTime, startGame, wordCount}
}

