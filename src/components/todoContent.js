import React from 'react';

const TodoContent = (props) => {
    const {id, title, description, status, createdAt} = props.data;
    return (

        <>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="flex-1 min-w-0">
                        <p key={id} className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {title}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <button type="button" className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">...</button>
                    </div>
                </div>
            </li>
        </>
    );
}

export default TodoContent;