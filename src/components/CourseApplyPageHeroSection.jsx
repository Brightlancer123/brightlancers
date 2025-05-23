"use client";
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import MyContext from '@/context/MyContext';








const CourseApplyPageHeroSection = () => {



    let router = useRouter()
    let { currentClickedCourseData } = useContext(MyContext)


    function handleCourseApplyBtnClick() {
        console.log("Course apply form is clicked")
        router.push("/courseApplyForm")
    }

















    return (
        <div className=''>







            {/* Hero section container */}
            <div className="min-h-[130vh] sm:min-h-[120vh] w-full overflow-x-hidden p-5 relative  bg-zinc-900">






                <div className="h-max w-full pt-20  bg-transparent flex flex-col items-center justify-center z-[999] absolute top-0 right-0 ">




                    {/* <h1 className='text-2xl md:text-3xl lg:text-4xl text-zinc-100 mt-20 '>How to Sell on the TikTok Shop</h1> */}




                    <h1 className="text-orange-500 mt-20 text-3xl md:text-4xl text-center">
                        {currentClickedCourseData.courseName}
                    </h1>

                    <div className="h-max w-full text-xl sm:text-2xl md:text-3xl text-zinc-100 mt-10 flex justify-center">
                        <h1 className='h-max w-max sm:px-10 p-3 border-1 border-zinc-500 bg-orange-500 '>Starting Soon</h1>
                    </div>







                    <div className="h-max w-full sm:px-10 flex gap-x-5  md:gap-x-10 text-zinc-100 text-sm  sm:text-lg lg:text-2xl lg:text-3xl mt-20 px-5">
                        <div className="h-max w-max flex gap-5">
                            <div className="">
                                <h6 className='font-thin'>Duration:</h6>
                                <h1>3 Months with 6 Months Support</h1>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h6 className='font-thin'>Class Timing:</h6>
                                <h1>To be mutually decided with Students</h1>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <h6 className='font-thin'>Mode Of Training:</h6>
                                <h1>Online & On Campus</h1>
                            </div>
                        </div>
                    </div>







                    <h1 className='h-max w-max px-10 p-2 text-orange-500 text-lg sm:text-3xl md:text-4xl mt-10'>{currentClickedCourseData.coursePrice}</h1>







                    <button
                        onClick={handleCourseApplyBtnClick}
                        className='h-max w-max px-10 p-3 rounded-md border-zinc-300 bg-orange-400 text-zinc-100 cursor-pointer mt-10'>
                        Apply Now
                    </button>






                    {/* 
                    <div className="h-max w-full flex flex-wrap px-5 sm:px-10 items-center gap-5 mt-14 text-zinc-100 text-lg sm:text-xl md:text-2xl ">

                        <div className="h-max w-[45%]">
                            <i></i>
                            <h2>Access to The Upgraded Private Enablers Community
                            </h2>
                        </div>

                        <div className="h-max w-[45%]">
                            <i></i>
                            <h2>Ability to get Enablers Certificates if passes the assessment</h2>
                        </div>

                        <div className="h-max w-[45%]">
                            <i></i>
                            <h2>Access to Enablers Facebook Public Groups</h2>
                        </div>

                    </div>

 */}






                </div>









                {/* THis div is just for shading of blackish theme */}
                <div className="custom_gray_glassy_effect              h-full w-full absolute top-0 right-0 z-[200]"></div>

                {/* background image */}
                <Image
                    src="https://imgs.search.brave.com/2-qGPZwGY3pHUpZSapdTq0AjCZDvFYAF647ogsFECWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2EzL2E2/LzAxL2EzYTYwMWQ4/ODQ4MmJjMmExZjYy/YTMwNzI5NGFlNWQz/LmpwZw"
                    height={300}
                    width={800}
                    alt='background image'
                    className='h-full w-full absolute top-0 right-0 z-[100]'
                />






            </div>


















            {/* description and benefits */}
            <div className="h-max w-full overflow-x-hidden mt-10 text-zinc-950 p-10">
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-extrabold '>{currentClickedCourseData.courseName} course & Its Benefits</h1>
                <p className='text-xl md:text-2xl font-medium mt-3'>{currentClickedCourseData.courseExplanation}</p>
            </div>























        </div>
    )
}

export default React.memo(CourseApplyPageHeroSection)