import { Link } from "react-router-dom";

const Sidebar = () => {
	return (
		<div className="bg-gray-900 text-white h-screen w-64 fixed top-0 left-0 overflow-y-auto shadow-lg">
			<div className="p-5">
				<h2 className="text-2xl font-semibold mb-5">Navigation</h2>
				<ul className="space-y-2">
					<li>
						<Link
							to="/"
							className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500">
							Contact
						</Link>
					</li>
					<li>
						<Link
							to="/dashboard"
							className="block py-2 px-4 rounded transition-colors duration-300 hover:bg-gray-800 hover:text-blue-500">
							Dashboard
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sidebar;
