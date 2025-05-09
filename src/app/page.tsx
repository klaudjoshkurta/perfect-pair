"use client";

import { useState } from "react";

export default function Home() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	return (
		<div className="h-screen flex items-center">
			<div className="w-full max-w-xl mx-auto px-4">
				{/** Form */}
				<div className="box-shadow rounded-xl flex flex-col">
					<input className="p-4 rounded-xl z-10 outline-0" type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Enter your first name" />
					<hr className="border-gray-200/80 z-0" />
					<input className="p-4 rounded-xl z-10 outline-0" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Enter your last name" />
				</div>
			</div>
		</div>
	);
}
