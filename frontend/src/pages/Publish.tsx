import axios from "axios";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import { ChangeEvent, useState } from "react";
import {  useNavigate } from "react-router-dom";

export const Publish = () => {
    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("")
    const Navigate=useNavigate()
  return (
    <div>
      <Appbar />
      <div className="flex justify-center pt-8">
        <div className="max-w-screen w-9/12">
          <input
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="Title"
          ></input>
          <TextEditor onChange={(e)=>{
            setDescription(e.target.value)
          }} />
          <button
            onClick={async() => {
              const response=await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content:description
              },{
                headers:{
                    Authorization:localStorage.getItem("token")
                }
              });
              Navigate(`/blogs/blog/${response.data.id}`)
            }}
            type="submit"
            className="ml-4 mt-2 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200  hover:bg-blue-800"
          >
            Publish post
          </button>
        </div>
      </div>
    </div>
  );
};

function TextEditor({onChange}:{onChange:(e:ChangeEvent<HTMLTextAreaElement>)=>void}) {
  return (
    <div className="">
      <div className=" mb-4  ">
        <div className="flex items-center justify-between border-b ">
          <div className=" py-2 bg-white rounded-b-lg w-full">
            <label className="sr-only">Publish post</label>
            <textarea
            onChange={onChange}
              className=" focus:outline-none pl-2 block w-full px-0 text-sm text-gray-800 bg-white border-0"
              placeholder="Write an article..."
              required
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
