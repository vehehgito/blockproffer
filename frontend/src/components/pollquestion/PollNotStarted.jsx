import React, {useState, useEffect, useContext} from 'react'
import { PollContext } from '../../Helpers/Contexts'
import { Link } from 'react-router-dom'
import { useCountdown } from '../Timer/CountDown'
import Timer from '../Timer/Timer'


function PollNotStarted(props) {

    const { question, setQuestion } = useContext(PollContext);

    const startDate = props.roomData.startDate;
    const startTime = props.roomData.startTime;

    const [days, hours, minutes, seconds] = useCountdown(startDate + " " + startTime);

    if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0) {
        setQuestion("startMenu")
    }
    else{
        return (
            <div class='flex flex-col justify-center align-center bg-gray-900 h-screen'>
                <div>
                    <h1 className="text-5xl text-center font-bold text-[#fbcc32]">You Came A little Early!</h1>
                    <div class='flex justify-center align-center flex-col'>
                    <p className="text-3xl text-center text-gray-400 pt-[2rem] pb-[2rem]">Here's a Medal For Finishing the Race before starting</p>
                        <i class="text-[#fbcc32] w-[10rem] h-[10rem] text-center text-[9rem] mx-auto my-6 fa-solid fa-medal"></i>
                    </div>

                    <div className='mt-5 w-full flex justify-center'>
                        <div className=' w-1/2'>
                        </div>
                    </div>

                    <div className='flex justify-center align-center flex-col'>
                        <p className="text-3xl text-center text-gray-400 pt-[2rem] pb-[2rem]">The Poll will start in</p>
                        <div className='flex justify-center align-center flex-col'>
                            <Timer timerDays={days} timerHours={hours} timerMinutes={minutes} timerSeconds={seconds}/>
                        </div>
                    </div>

                    <div class='flex justify-center mt-7'>
                        <Link to="/createpolls" class='text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800'>
                            Make Your Own Polls
                        </Link>
                        <Link to="/" class='ext-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800'>
                            Back to Home
                        </Link>
                        <Link to="/LivePolls" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                            Head to Other Live Poll
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default PollNotStarted