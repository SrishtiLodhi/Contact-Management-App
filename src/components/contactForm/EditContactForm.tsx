import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateContact } from "../../store";

interface Contact {
	id: number;
	firstName: string;
	lastName: string;
	status: "Active" | "Inactive";
}

interface Props {
	initialContact: Contact;
	closeModal: () => void;
}

const EditContactForm: React.FC<Props> = ({ initialContact, closeModal }) => {
	const dispatch = useDispatch();
	const [formData, setFormData] = useState<Contact>({
		...initialContact,
	});

	const handleSaveContact = () => {
		dispatch(updateContact(formData));
		closeModal();
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleStatusChange = (
		event: React.ChangeEvent<HTMLSelectElement>
	) => {
		const newStatus = event.target.value as "Active" | "Inactive";
		setFormData((prevData) => ({
			...prevData,
			status: newStatus,
		}));
	};

	return (
		<div className="flex flex-col flex-wrap sm:space-y-7 font-GeneralSans p-4 my-4 border-2 border-gradient border-black rounded-lg">
			<p className="text-center sm:text-4xl text-2xl font-bold py-4">
				Edit Contact
			</p>
			<div className="grid sm:grid-cols-4 sm:gap-6 gap-3">
				{/* First Name */}
				<div className="col-span-full flex flex-col space-y-2 justify-center">
					<label
						htmlFor="firstName"
						className="font-semibold sm:text-xl font-spaceGrotesk">
						First Name:
					</label>
					<input
						type="text"
						name="firstName"
						value={formData.firstName}
						onChange={handleInputChange}
						placeholder="First Name"
						className="bg-[#1A0142] text-white border border-solid border-[#B1B1B1] rounded-lg sm:text-lg sm:p-4 p-2 sm:w-full"
					/>
				</div>

				{/* Last Name */}
				<div className="col-span-full flex flex-col space-y-2 justify-center">
					<label
						htmlFor="lastName"
						className="font-semibold sm:text-xl font-spaceGrotesk">
						Last Name:
					</label>
					<input
						type="text"
						name="lastName"
						value={formData.lastName}
						onChange={handleInputChange}
						placeholder="Last Name"
						className="bg-[#1A0142] text-white border border-solid border-[#B1B1B1] rounded-lg sm:text-lg sm:p-4 p-2 sm:w-full"
					/>
				</div>

				{/* Status */}
				<div className="col-span-full flex flex-col space-y-2 justify-center">
					<label
						htmlFor="status"
						className="font-semibold sm:text-xl font-spaceGrotesk">
						Status:
					</label>
					<select
						name="status"
						value={formData.status}
						onChange={handleStatusChange}
						className="bg-[#1A0142] text-white  uppercase border border-solid border-[#B1B1B1] rounded-lg sm:text-lg sm:p-4 p-2 sm:w-full">
						<option value="Active">Active</option>
						<option value="Inactive">Inactive</option>
					</select>
				</div>
			</div>
			<button
				onClick={handleSaveContact}
				className="text-white sm:text-2xl text-base font-semibold p-3 mt-2 rounded shadow bg-gradient-to-l from-black to-purple-800 sm:py-2 sm:w-full">
				Save Contact
			</button>
		</div>
	);
};

export default EditContactForm;
