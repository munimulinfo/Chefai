import React from 'react';
import Header from './Header';
import Fotter from './Fotter';
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
    return (
         <div>
             <section>
                <div className="my-container">
                <div className="">
                     <div className='flex flex-col text-center text-gray-900'>
                    <h1 className='text-5xl w-full lg:leading-tight title-text font-bold mb-3'>
                        Featured Blogs 
                    </h1>
                    <p className='text-xl md:text-lg  text-gray-900'>
                        Explore thousands of Trending Chef 
                    </p>
                    </div>
                    </div>
                    <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2  py-6  gap-4 mt-8" ref={ref}>

                        
                        <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title text-xl text-red-600">Differences between uncontrolled and controlled components.</h2>
                        <p><span className='font-bold'>Controlled Components</span> <br />
                                    In a controlled component, the form data is handled by the state within the component. The state within the component serves as “the single source of truth” for the input elements that are rendered by the component.</p>
                                 <p><span className='font-bold'>Uncontrolled Components</span> <br />
                                   Uncontrolled components act more like traditional HTML form elements. The data for each input element is stored in the DOM, not in the component. Instead of writing an event handler for all of your state updates, you use a ref to retrieve values from the DOM.</p>
                                


                        </div>
                        </div>

                         <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title text-xl text-red-600">How To Use propTypes Validators?</h2>
                        <ul>
                                    <li>In latest react installation as we have done, we don’t need to install propTypes library. </li>
                                    <li>In react, there are some validators are available , Use Them</li>
                                    <li>we have to used some validations, as you we have propArray and propBool have isRequired propType this means for propArray and propBool it must have the array and boolean propType in the prop.</li>
                        </ul>
                        </div>
                        </div>

                         <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title text-xl text-red-600">Difference between nodejs and express js</h2>
                        <p> nodeJS is the core technology which works like engine. <br />
"expressJS" on the other hand is the wrapper, expressJS provides a framework which can be used on top of nodeJS to provide you rich web functionality.
Think of nodeJS as an engine, now if you have the engine, you can develop a car structure around it and make it work. You would have to put wheels, implement braking system and what not.</p>
                        </div>
                        </div>

                         <div className="card lg:card-side bg-base-100 shadow-xl">
                        <div className="card-body">
                        <h2 className="card-title text-xl text-red-600">What is a custom hook, and why will you create a custom hook?</h2>
                                <p> Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. It allows you to reuse some piece of code in several parts of your app. <br />
                                When we want to share the logic between other components, we can extract it to a separate function and use it</p>
                        </div>
                        </div>
                       
                    </div>
                   
                </div>
                  <Pdf targetRef={ref} filename="code-example.pdf">
                            {({ toPdf }) => <button className='text-center mx-auto border-1' onClick={toPdf}>Generate Pdf</button>}
                        </Pdf>
            </section>
        </div>
    );
};

export default Blogs;