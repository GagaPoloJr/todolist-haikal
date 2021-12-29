import React, { useState } from 'react';
import Modal from './modal';
import TodoContent from './todoContent';
import UseModal from './useModal';

export const CardList = (props) => {
  const data = props.data;
  const status = props.status;
  const {isShowing, toggle} = UseModal();
    return (
        <>
        <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{status}</h3>
                <button onClick={toggle} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"  >
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </button>
             
            </div>
            <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((x) => (
                    <TodoContent data={x} key={x.id}/>
                    ))}
                </ul>
            </div>
        </div>
       
        <Modal
        isShowing={isShowing}
        hide={toggle}
      />

        </>
    );
}
