import React from 'react'
import { useState } from 'react'
import Option from './Option'

const OptionGenerator = (props) => {
    
    const [optionInput, setOptionInput] = useState('');
    const [optionErr, setOptionErr] = useState('');

    const optionHandler = (e) => {
        setOptionInput(e.target.value)
    }

    const addOption = () => {
        setOptionErr('');

        if (optionInput === "") return;

        if (props.options.length >= 10) return setOptionErr("You can't have more than 10 options");

        let similarOptionFound = false;
        props.options.forEach((e) => {
            if (e.option === optionInput) {
                setOptionErr("You can't have duplicate options");
                similarOptionFound = true;
                return;
            }
        })

        if (similarOptionFound) return;

        props.setOptions([...props.options, {optionNum: props.options.length ,option: optionInput, votes : 0}]);
        setOptionInput('');
    }

    const deleteOption = (index) => {
        props.setOptions(props.options.filter((e, i) => {
            return i !== index;
        }))
    }

  return (
    <div class='mt-6'>

        <div id="options" class='flex items-center justify-center flex-wrap'>
            {props.options.map((e, index) => {
                return <Option key={index} i={index} data={e} deleteOption={deleteOption}/>
            })}
        </div>
        <div className="option-error">
            {(optionErr !== "") ? <p className="text-red-500 text-sm">{optionErr}</p> : null}
        </div>
        <div class="relative">
            <input type="text" id="optionInput" onChange={optionHandler} value={optionInput} class="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
            <label for="floating_filled" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4">Add Options</label>
        </div>
        <button class="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800" type='button' onClick={addOption}>
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">Add Option</span>
        </button>
    </div>
  )
}

export default OptionGenerator