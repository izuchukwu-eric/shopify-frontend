import React, {useState, useEffect} from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getResponse } from '../actions/request';

const Index = ({ getResponse, request: { response } }) => {
  const [formData, setFormData] = useState({name: ""})

  const {name} = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = () => {
    getResponse(name);
    console.log(name);
  }

  return (  
    <><div className="max-w-2xl mx-auto my-8">
      <p className="text-2xl font-semibold my-6 animate-bounce">Fun With AI</p>
      <h5>Enter prompt</h5>
      <textarea className="h-48 w-full border rounded-xl overflow-hidden resize-none focus:border-blue-500 ring-1 ring-transparent focus:ring-blue-500 focus:outline-none text-black p-2 transition ease-in-out duration-300" name='name' value={name} onChange={(e) => onChange(e)}>

      </textarea>
      <div className="flex justify-end">
        <button className="py-1 px-2 text-white bg-blue-600 rounded-md" onClick={onSubmit}>Submit</button>
      </div>
    </div>
    
      <div className='max-w-2xl mx-auto'>
        {response && (
          <>
            <p className='font-bold text-2xl'>Responses</p><div className="py-6">
              <div className="p-6 bg-gray-200 border-b border-gray-200 rounded-xl">
                <div className="border-gray-200 flex">
                  <div className='font-bold'>Prompt:</div>
                  <div className='px-6'>What is blockchain technology</div>
                </div>
                <div className="py-6 border-gray-200 flex">
                  <div className='font-bold'>Response:</div>
                  <div className='px-3'>
                    {response && response}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>

  )
}


Index.propTypes = {
  getResponse: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  request: state.request,
})

export default connect(mapStateToProps, { getResponse })(Index);