import Image from "next/image";

const Contact = () => {
	return (
		<div className="bg-white">
			<div className="text-center mb-4">
				<Image
					className="h-auto mb-2"
					src="/images/transformente.png"
					alt="Logo Transformente"
					width={270}
					height={70}
				/>

				{/* <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
					Texto aca
				</p> */}
			</div>
			<main>
				<div>
					{/* Hero card */}
					<div className="relative">
						<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
						<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
							<div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
								<div className="absolute inset-0 ">
									<Image
										height={1005}
										width={1250}
										className="h-full w-full object-cover"
										src="/images/background.jpg"
										alt="Fondo"
									/>
									<div className="absolute inset-0" />
								</div>
								<div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
									<h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
										<span className="block text-6xl font-extrabold text-transparent bg-clip-text from-primary to-secondary bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500">
											Nathalia Miranda Ortiz
										</span>
										{/* <span className="block text-indigo-200">
											Profesional
										</span> */}
									</h1>
									<p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-600 sm:max-w-3xl font-light hover:font-bold">
										Gestión de talento &bull; Planeación &bull;
										Training &bull; Emprendimiento &bull; Innovación
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Logo cloud */}
					<div className="bg-gray-100">
						<div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
							<p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
								Juntos construimos nuevos procesos
							</p>
							<div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<Image
										className="h-12"
										src="/images/argos.png"
										alt="Argos"
										width={140}
										height={50}
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<Image
										className="h-12"
										src="/images/bancolombia.png"
										alt="Bancolombia"
										width={350}
										height={100}
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
									<Image
										className="h-12"
										src="/images/ccb.png"
										alt="Camara de comercio de Bogotá"
										width={175}
										height={60}
									/>
								</div>
								<div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
									<Image
										className="h-12"
										src="/images/rutan.png"
										alt="Transistor"
										width={100}
										height={50}
									/>
								</div>
								<div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
									<Image
										className="h-12"
										src="/images/postobon.png"
										alt="Postobon"
										width={150}
										height={50}
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
