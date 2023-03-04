import { links } from './constants/links';

const App = () => {
	return (
		<div className="flex flex-col justify-center items-center mt-2 mx-auto max-w-[75vw]">
			{links.map((link) => (
				<button
					key={link.name}
					className="m-2 py-1 px-6 border-solid border-2 rounded-full w-full"
				>
					<a
						href={link.link}
						target="_blank"
						rel="noopener noreferrer"
					>
						{link.name}
					</a>
				</button>
			))}
			{/* <div>
				<h1>Email Sign Up</h1>
				<form className="flex flex-col">
					<label>
						Your First Name
						<input type="text" placeholder="Your Name" />
					</label>
					<label>
						Your Email
						<input type="email" placeholder="Your Email" />
					</label>
					<button type="submit">Submit</button>
				</form>
			</div> */}
		</div>
	);
};

export default App;
