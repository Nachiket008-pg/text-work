import React from 'react';
import PropTypes from 'prop-types';

function front (props) {
  return (
    <div>
        <div className=" bg-slate-900 text-gray-300 flex w-screen h-auto">
            <img src="https://images.unsplash.com/photo-1551225183-94acb7d595b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGV4dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" className="p-9 mx-20 rounded-2xl hover:cursor-pointer w-screen " />
            <div className="text-white my-14 mr-14 ">
                <div className="text-6xl font-bold"> Welcome to Text Work</div>
                <div className="text-2xl my-3"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur delectus quis expedita fuga? Eum et molestiae, beatae, maiores voluptate repellendus blanditiis iure vitae sit corrupti tenetur enim. Assumenda inventore et, minima commodi quod eum dolores? Quos dolore quia dolores ex accusantium laudantium eos neque quisquam quasi, minus deserunt architecto? A dolorem hic reprehenderit ea.</p></div>
              
            </div>
           
        </div> 
    </div>
  )
}

front.PropTypes = {
    btn1 : PropTypes.string.isRequired
}

front.defaultProps = {
    btn1 : "Get Started"
}


export default front