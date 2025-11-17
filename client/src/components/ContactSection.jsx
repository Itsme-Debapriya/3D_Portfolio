import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import FloatingShapes from "./FloatingShapes";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });
	const { toast } = useToast();
	const [hoveredInfo, setHoveredInfo] = useState(null);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();

		const templateParams = {
			from_name: formData.name,
			from_email: formData.email,
			message: formData.message,
		};

		const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
		
		emailjs.send(serviceID, templateID, templateParams, publicKey).then(
			(result) => {
				console.log("Email sent:", result.text);

				toast({
					title: "Message Sent Successfully!",
					description: "Thank you for reaching out. I'll reply soon.",
				});

				setFormData({ name: "", email: "", message: "" });
			},
			(error) => {
				console.error("Email error:", error.text);
				toast({
					title: "Failed to send message!",
					description: "Please try again later.",
					variant: "destructive",
				});
			}
		);
	};

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const contactInfo = [
		{
			icon: Mail,
			label: "Email",
			value: "debapriyadey03srp@gmail.com",
			href: "https://mail.google.com/mail/?view=cm&fs=1&to=debapriyadey03srp@gmail.com&body=I%20want%20to%20connect!",
			color: "primary",
		},

		{
			icon: MapPin,
			label: "Location",
			value: "SERAMPORE, HOOGHLY, WEST BENGAL",
			href: "https://maps.app.goo.gl/m2qZa5u2LGG864VR9",
			color: "primary",
		},
	];

	return (
		<section
			id="contact"
			ref={ref}
			className="relative py-24 lg:py-32 bg-background overflow-hidden"
		>
			<FloatingShapes count={15} />

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="text-center mb-16 space-y-4"
				>
					<h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent">
						Get In Touch
					</h2>
					<motion.div
						initial={{ width: 0 }}
						animate={isInView ? { width: 80 } : {}}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"
						style={{
							boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
						}}
					/>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Have a project in mind or want to collaborate? I'd love
						to hear from you!
					</p>
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="space-y-8"
					>
						<div className="space-y-6">
							{contactInfo.map((info, index) => (
								<motion.div
									key={info.label}
									initial={{ opacity: 0, y: 20 }}
									animate={
										isInView ? { opacity: 1, y: 0 } : {}
									}
									transition={{
										duration: 0.4,
										delay: 0.3 + index * 0.1,
									}}
									className="relative flex items-start gap-4 p-5 rounded-xl bg-card/80 backdrop-blur-md border-2 border-primary/30 overflow-hidden group cursor-pointer"
									whileHover={{
										x: 8,
										scale: 1.02,
										borderColor: `hsl(var(--${info.color}))`,
									}}
									data-testid={`contact-${info.label.toLowerCase()}`}
									onClick={() =>
										info.href &&
										window.open(info.href, "_blank")
									}
									onMouseEnter={() => setHoveredInfo(index)}
									onMouseLeave={() => setHoveredInfo(null)}
								>
									{/* Bright animated gradient */}
									<motion.div
										className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
										animate={{
											background: [
												`linear-gradient(135deg, hsl(var(--${
													info.color
												}) / 0.15), hsl(var(--${
													info.color === "primary"
														? "secondary"
														: "primary"
												}) / 0.15))`,
												`linear-gradient(225deg, hsl(var(--${
													info.color === "primary"
														? "secondary"
														: "primary"
												}) / 0.15), hsl(var(--${
													info.color
												}) / 0.15))`,
												`linear-gradient(135deg, hsl(var(--${
													info.color
												}) / 0.15), hsl(var(--${
													info.color === "primary"
														? "secondary"
														: "primary"
												}) / 0.15))`,
											],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
										}}
									/>

									{/* Bright glow */}
									<motion.div
										className="absolute inset-0 rounded-xl pointer-events-none"
										animate={
											hoveredInfo === index
												? {
														boxShadow: [
															`0 0 30px hsl(var(--${info.color}) / 0.4), inset 0 0 30px hsl(var(--${info.color}) / 0.2)`,
															`0 0 50px hsl(var(--${info.color}) / 0.6), inset 0 0 50px hsl(var(--${info.color}) / 0.3)`,
															`0 0 30px hsl(var(--${info.color}) / 0.4), inset 0 0 30px hsl(var(--${info.color}) / 0.2)`,
														],
												  }
												: {}
										}
										transition={{
											duration: 2,
											repeat: Infinity,
										}}
									/>

									<motion.div
										className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${
											info.color
										} to-${
											info.color === "primary"
												? "secondary"
												: "primary"
										} flex items-center justify-center flex-shrink-0 relative`}
										animate={{
											rotateY:
												hoveredInfo === index
													? [0, 360]
													: 0,
											boxShadow:
												hoveredInfo === index
													? [
															`0 10px 30px hsl(var(--${info.color}) / 0.5)`,
															`0 15px 50px hsl(var(--${info.color}) / 0.7)`,
															`0 10px 30px hsl(var(--${info.color}) / 0.5)`,
													  ]
													: `0 10px 30px hsl(var(--${info.color}) / 0.3)`,
										}}
										transition={{
											rotateY: { duration: 0.6 },
											boxShadow: {
												duration: 2,
												repeat: Infinity,
											},
										}}
										style={{
											transformStyle: "preserve-3d",
										}}
									>
										<info.icon className="w-7 h-7 text-white drop-shadow-lg" />
									</motion.div>
									<div className="relative">
										<div className="font-semibold text-foreground group-hover:text-primary group-hover:drop-shadow-[0_0_10px_hsl(var(--primary))] transition-all duration-300">
											{info.label}
										</div>
										<div className="text-sm text-muted-foreground mt-1 group-hover:text-foreground transition-colors">
											{info.value}
										</div>
									</div>

									{/* Particles on hover */}
									{hoveredInfo === index &&
										[...Array(4)].map((_, i) => (
											<motion.div
												key={i}
												className={`absolute w-1.5 h-1.5 rounded-full bg-${info.color}`}
												style={{
													left: `${
														Math.random() * 100
													}%`,
													top: `${
														Math.random() * 100
													}%`,
													boxShadow: `0 0 10px hsl(var(--${info.color}))`,
												}}
												animate={{
													y: [0, -30],
													opacity: [0, 1, 0],
													scale: [0, 1, 0],
												}}
												transition={{
													duration: 1.5,
													repeat: Infinity,
													delay: i * 0.2,
													ease: "easeOut",
												}}
											/>
										))}
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={isInView ? { opacity: 1, scale: 1 } : {}}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="relative aspect-square max-w-md mx-auto"
							style={{ transformStyle: "preserve-3d" }}
						>
							{/* Rotating 3D circles */}
							{[0, 1, 2].map((i) => (
								<motion.div
									key={i}
									className="absolute inset-0"
									animate={{
										rotate: 360,
										rotateY: i * 60,
									}}
									transition={{
										rotate: {
											duration: 20 + i * 5,
											repeat: Infinity,
											ease: "linear",
										},
									}}
									style={{ transformStyle: "preserve-3d" }}
								>
									<div
										className={`w-full h-full rounded-full border-4 border-${
											i % 2 === 0
												? "primary"
												: "secondary"
										}/30`}
										style={{
											transform: `scale(${1 - i * 0.2})`,
											boxShadow: `0 0 30px hsl(var(--${
												i % 2 === 0
													? "primary"
													: "secondary"
											}) / 0.3)`,
										}}
									/>
								</motion.div>
							))}

							<div className="absolute inset-0 flex items-center justify-center">
								<motion.div
									className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center relative"
									animate={{
										scale: [1, 1.1, 1],
										rotateY: [0, 360],
										boxShadow: [
											"0 0 30px hsl(var(--primary) / 0.4)",
											"0 0 60px hsl(var(--secondary) / 0.6)",
											"0 0 30px hsl(var(--primary) / 0.4)",
										],
									}}
									transition={{
										scale: {
											duration: 3,
											repeat: Infinity,
											ease: "easeInOut",
										},
										rotateY: {
											duration: 4,
											repeat: Infinity,
											ease: "linear",
										},
										boxShadow: {
											duration: 3,
											repeat: Infinity,
										},
									}}
									style={{ transformStyle: "preserve-3d" }}
								>
									<Send className="w-20 h-20 text-white drop-shadow-2xl" />

									{/* Orbiting sparkles */}
									{[...Array(3)].map((_, i) => (
										<motion.div
											key={i}
											className="absolute"
											animate={{
												rotate: 360,
											}}
											transition={{
												duration: 3,
												repeat: Infinity,
												ease: "linear",
												delay: i * 1,
											}}
											style={{
												left: "50%",
												top: "50%",
												marginLeft: "-6px",
												marginTop: "-6px",
												transformOrigin: `${
													50 + i * 10
												}px 0px`,
											}}
										>
											<Sparkles className="w-3 h-3 text-white drop-shadow-[0_0_5px_white]" />
										</motion.div>
									))}
								</motion.div>
							</div>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<form
							onSubmit={handleSubmit}
							className="space-y-6 p-8 rounded-xl bg-card/80 backdrop-blur-md border-2 border-primary/30 relative overflow-hidden group"
						>
							{/* Animated background gradient */}
							<motion.div
								className="absolute inset-0 opacity-50"
								animate={{
									background: [
										"radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.1), transparent 50%)",
										"radial-gradient(circle at 100% 100%, hsl(var(--secondary) / 0.1), transparent 50%)",
										"radial-gradient(circle at 0% 100%, hsl(var(--primary) / 0.1), transparent 50%)",
										"radial-gradient(circle at 100% 0%, hsl(var(--secondary) / 0.1), transparent 50%)",
										"radial-gradient(circle at 0% 0%, hsl(var(--primary) / 0.1), transparent 50%)",
									],
								}}
								transition={{ duration: 10, repeat: Infinity }}
							/>

							<div className="relative space-y-2">
								<Label
									htmlFor="name"
									className="text-foreground"
								>
									Name
								</Label>
								<motion.div
									whileFocus={{ scale: 1.02 }}
									transition={{ duration: 0.2 }}
								>
									<Input
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										placeholder="Your name"
										required
										className="bg-background/50 border-2 border-primary/20 focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all"
										data-testid="input-name"
									/>
								</motion.div>
							</div>

							<div className="relative space-y-2">
								<Label
									htmlFor="email"
									className="text-foreground"
								>
									Email
								</Label>
								<motion.div
									whileFocus={{ scale: 1.02 }}
									transition={{ duration: 0.2 }}
								>
									<Input
										id="email"
										name="email"
										type="email"
										value={formData.email}
										onChange={handleChange}
										placeholder="your.email@example.com"
										required
										className="bg-background/50 border-2 border-primary/20 focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all"
										data-testid="input-email"
									/>
								</motion.div>
							</div>

							<div className="relative space-y-2">
								<Label
									htmlFor="message"
									className="text-foreground"
								>
									Message
								</Label>
								<motion.div
									whileFocus={{ scale: 1.02 }}
									transition={{ duration: 0.2 }}
								>
									<Textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										placeholder="Tell me about your project..."
										required
										rows={6}
										className="bg-background/50 border-2 border-primary/20 focus:border-primary focus:shadow-[0_0_20px_hsl(var(--primary)/0.3)] resize-none transition-all"
										data-testid="input-message"
									/>
								</motion.div>
							</div>

							<motion.div
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									type="submit"
									size="lg"
									className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 border-2 border-primary/50 hover:border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.8)] transition-all duration-300 group/btn relative overflow-hidden"
									data-testid="button-send"
								>
									<motion.div
										className="absolute inset-0"
										animate={{
											background: [
												"linear-gradient(45deg, hsl(var(--primary)), hsl(var(--secondary)))",
												"linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--primary)))",
												"linear-gradient(225deg, hsl(var(--primary)), hsl(var(--secondary)))",
												"linear-gradient(315deg, hsl(var(--secondary)), hsl(var(--primary)))",
											],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
										}}
									/>
									<span className="relative flex items-center justify-center gap-2">
										Send Message
										<Send className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
									</span>
								</Button>
							</motion.div>
						</form>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
