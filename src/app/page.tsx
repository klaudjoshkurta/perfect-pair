export default function Home() {
	return (
		<div className="h-screen flex items-center">
			<div className="w-full max-w-xl mx-auto px-4">
				{/** Form */}
				<div className="box-shadow rounded-xl flex flex-col">
					<input className="p-4 rounded-xl z-10" type="text" name="" id="" placeholder="Enter your first name" />
					<hr className="border-gray-200/80 z-0" />
					<input className="p-4 rounded-xl z-10" type="text" name="" id="" placeholder="Enter your last name" />
				</div>
			</div>
		</div>
	);
}
