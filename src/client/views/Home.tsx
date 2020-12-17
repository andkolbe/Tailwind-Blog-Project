import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBlog } from '../utils/types';

const Home: React.FC<HomeProps> = props => {
    
    const [blogs, setBlogs] = useState<IBlog[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('/api/blogs');
            const blogs = await res.json();
            setBlogs(blogs);
        })
    })

		return (
			<>
				<main className="flex flex-col items-center justify-center min-h-screen px-2 md:-px-2">
					<div className="flex flex-col w-full mx-2 bg-indigo-100 border-2 border-indigo-900 rounded md:w-1/2 lg:w-1/3">
						<div className="p-4 text-indigo-900 bg-indigo-300 border-b border-indigo-900 ">
							<span className="text-2xl font-semibold">Card Title</span>
						</div>
						<div className="m-4">
							<button className="px-4 py-2 font-semibold text-white bg-indigo-600 rounded-md md:bg-red-600">Test</button>
						</div>
					</div>
				</main>
				<div className="bg-gray-50">
					<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							<span className="block">Ready to dive in?</span>
							<span className="block text-indigo-600">Start your free trial today.</span>
						</h2>
						<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a
									href="#"
									className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
									Get started
								</a>
							</div>
							<div className="inline-flex ml-3 rounded-md shadow">
								<a
									href="#"
									className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md hover:bg-indigo-50">
									Learn more
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
}	


interface HomeProps {}

export default Home;