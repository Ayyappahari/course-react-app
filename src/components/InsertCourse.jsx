import React, { useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const InsertCourse = () => {

const [input , changeInput] = useState(

{
    course_name: "",
    duration: "",
    fee: "",
    mode: "",
    trainer: ""
}

)

const inputHandler = (event)=>
{
changeInput({...input,[event.target.name]: event.target.value})


}

const readValue =()=>{

console.log(input)

axios.post("https://host-demo-app.onrender.com/api/add-course",input).then(

    (response)=>{

console.log(response.data)

alert("Course Added Successfully")

    }
).catch(

(error)=>{

console.error("Error adding course:",error)

alert("failed to add course")


}

)

}

  return (
    <div>
<NavigationBar />
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className="form-label">
                                    Course Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="course_name"
                                    value={input.course_name}  
                                    onChange={inputHandler}   
                                />

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className="form-label">
                                    Duration
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="duration"
                                    value={input.duration}
                                    onChange={inputHandler}
                                />

                            </div>


                             <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className="form-label">
                                    Fee
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    name="fee"
                                    value={input.fee}
                                    onChange={inputHandler}
                                />

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className="form-label">
                                    Mode
                                </label>

                                <select className="form-select" name="mode" value={input.mode} onChange={inputHandler}>

                                    <option value="Online">Online</option>
                                    <option value="Offline">Offline</option>
                                    <option value="Hybrid">Hybrid</option>

                                </select>

                            </div>


                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label className="form-label">
                                    Trainer
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="trainer"
                                    value={input.trainer}
                                    onChange={inputHandler}
                                />

                            </div>



                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                <button className="btn btn-primary" onClick={readValue}>
                                    Submit
                                </button>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default InsertCourse