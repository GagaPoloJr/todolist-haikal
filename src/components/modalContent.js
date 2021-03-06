import React, { useState } from 'react';
import { v4 as uuid } from "uuid";
const ModalContent = ({hide}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus] = useState("");
    const [createdAt, setCreatedAt] = useState("");


    const handleTitle = (e) => setTitle(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleStatus = (e) => setStatus(e.target.value);
    const handleCreatedAt = (e) => setCreatedAt(e.target.value);


    const addList = (e) => {
        e.preventDefault();
        const lists = {id:uuid(),title, description, status, createdAt};
        let storage = []
      
        storage = JSON.parse(sessionStorage.getItem("data") );
        if (!storage) {
            sessionStorage.setItem("data", JSON.stringify(lists));
        } else {
            storage.push(lists);
            console.log(storage)
            sessionStorage.setItem("data", JSON.stringify(storage));
        }
    };
    const getArray = JSON.parse(sessionStorage.getItem("data") );
    console.log(getArray);


    return (

        <>
            <div>
                <div className=" overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
                    <div className="relative px-4 w-full max-w-md h-full md:h-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-end p-2">
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" onClick={hide}>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                </button>
                            </div>
                            <form className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8" onSubmit={addList} method="post">
                                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Add To Do List</h3>
                                <div>
                                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Title</label>
                                    <input
                                        onChange={handleTitle}
                                        value={title}
                                        type="text" name="title"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title...." />
                                </div>
                                <div>
                                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Description</label>
                                    <textarea
                                        onChange={handleDescription}
                                        value={description}
                                        type="text" name="description" id="description" placeholder="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"> </textarea>
                                </div>
                                <div>
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Status</label>
                                    <input
                                        onChange={handleStatus}
                                        value={status}
                                        type="text" name="status" id="status" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Status" />
                                </div>
                                <div>
                                    <label htmlFor="status" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                                    <input
                                        onChange={handleCreatedAt}
                                        // value={CreatedAt}
                                        type="date" name="createdAt" id="createdAt" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="date..." />
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add List</button>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalContent;