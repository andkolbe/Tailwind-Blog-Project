import * as React from 'react';

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			name: null
		};
	}

	async componentDidMount() {
		try {
			let r = await fetch('/api/hello');
			let name = await r.json();
			this.setState({ name });
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		return (
			<>
				<main className="flex min-h-screen flex-col items-center justify-center px-2 md:-px-2">
					<div className="flex flex-col border-2 rounded border-indigo-900 w-full md:w-1/2 lg:w-1/3 mx-2 bg-indigo-100">
						<div className="bg-indigo-300 text-indigo-900 p-4 border-b border-indigo-900 ">
							<span className="text-2xl font-semibold">Card Title</span>
						</div>
						<div className="m-4">
							<button className="bg-indigo-600 md:bg-red-600	 text-white font-semibold px-4 py-2 rounded-md">Test</button>
						</div>
					</div>
				</main>
				<div className="bg-gray-50">
					<div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
						<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
							<span className="block">Ready to dive in?</span>
							<span className="block text-indigo-600">Start your free trial today.</span>
						</h2>
						<div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
							<div className="inline-flex rounded-md shadow">
								<a
									href="#"
									className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
									Get started
								</a>
							</div>
							<div className="ml-3 inline-flex rounded-md shadow">
								<a
									href="#"
									className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">
									Learn more
								</a>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export interface IAppProps {}

export interface IAppState {
	name: string;
}

export default App;

//
// const App = (props: AppProps) => {
// 	const [greeting, setGreeting] = React.useState<string>('');

// 	React.useEffect(() => {
// 		(async () => {
// 			try {
// 				const res = await fetch('/api/hello');
// 				const greeting = await res.json();
// 				setGreeting(greeting);
// 			} catch (error) {
// 				console.log(error);
// 			}
// 		})();
// 	}, []);

// 	return (
// 		<div className="min-vh-100 d-flex justify-content-center align-items-center">
// 			<h1 className="display-1">Hello {greeting}!</h1>
// 		</div>
// 	);
// };

// interface AppProps {}

// export default App;
