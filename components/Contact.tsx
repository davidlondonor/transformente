import Link from "next/link";
import Image from "next/image";

const Contact = () => {
	return (
		<div className="bg-white">
			<main>
				<div>
					{/* Hero card */}
					<div className="relative">
						<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
						<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
							<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
								<div className="absolute inset-0">
									<Image
										height={25}
										width={25}
										className="h-full w-full object-cover"
										src="/images/background.jpg"
										alt="background"
									/>
									<div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
								</div>
								<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
									<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
										<span className="block text-white">
											Nathalia Miranda Ortiz
										</span>
										<span className="block text-indigo-200">
											Profesional
										</span>
									</h1>
									<p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
										Gestión de talento / Planeación / Training /
										Emprendimiento / Innovación
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Logo cloud */}
					<div className="bg-gray-100">
						<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
							<p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
								Trusted by over 5 very average small businesses
							</p>
							<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12"
										src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
										alt="Tuple"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12"
										src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
										alt="Mirage"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<img
										className="h-12"
										src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
										alt="StaticKit"
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
									<img
										className="h-12"
										src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
										alt="Transistor"
									/>
								</div>
								<div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
									<img
										className="h-12"
										src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
										alt="Workcation"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* More main page content here... */}
			</main>
		</div>
	);
};

export default Contact;
