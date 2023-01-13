import React,{useState} from 'react'
import HeadingLine from '../components/HeadingLine'
import {FiSearch, FiPlusCircle} from 'react-icons/fi'
import questions from "../data/Faq.json";
import serviceIcon from "../assets/images/customerService.png";
const FAQ = () => {

  return (
    <div className='overflow-hidden'>
        <HeadingLine name={'FAQs'} />
        <h1 className="text-5xl capitalize text-center text-primary mb-4 font-bold">frequestly asked questions</h1>
        <p className="text-center text-primary my-4 text-xl font-semibold">Have questions? We are here to help</p>
        <div className="border-primary border rounded-md flex w-60 h-10 gap-x-2 items-center mx-auto mb-4 px-4">
            <FiSearch />
            <input type={'text'} className="w-[calc(100%-32px)] outline-none border-none bg-neutral-tint-white" placeholder='Search'/>
        </div>
         {
            questions.map((info, index) => 
                <QuestionCollapse question={info?.title} answer={info?.body} key={index} />
            )
        }
        <h3 className='text-2xl text-primary text-center pt-8 font-semibold capitalize'>still have questions?</h3>
        <p className='text-center py-4 text-primary'>Cannot find the answer you are looking for? Connect with our team</p>
        <img src={serviceIcon} alt='customer service' className="mx-auto mb-5" />
    </div>
  )
}

const QuestionCollapse = ({question, answer}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='w-2/4 mx-auto mt-5 border-b border-primary pb-4'>
            <button className='w-full overflow-hidden flex justify-between text-primary text-lg font-semibold' onClick={() => setToggle((prevState) => !prevState) }>
                <span>{question}</span>
                <FiPlusCircle size={24}/>
            </button>
            <div className={`${!toggle ? 'h-0' : "h-8"} text-primary transition-height ease-in duration-300 pt-2 delay-100 overflow-hidden whitespace-pre-wrap`}>
            {answer}
            </div>
        </div>
    )
}

export default FAQ