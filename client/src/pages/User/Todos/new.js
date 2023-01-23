import React from "react";

import { useMutation, useQueryClient } from "react-query";
import { postTodo } from "./../../../api";
import { FieldArray, Formik } from "formik";

import {
	Box,
	Button,
	FormControl,
	FormLabel,
	Input,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { message } from "antd";

function NewTodo() {
	const queryClient = useQueryClient();
	const newProductMutation = useMutation(postTodo, {
		onSuccess: () => queryClient.invalidateQueries("user:todo"),
	});
	const handleSubmit = async (values, bag) => {
		// console.log(values);

		const newValues = { ...values, photos: JSON.stringify(values.photos) };

		message.loading({ content: "Loading...", key: "post_product" });
		newProductMutation.mutate(newValues, {
			onSuccess: () => {
				console.log("success");
				message.success({
					content: "The product succesfully updated",
					key: "product_update",
					duration: 2,
				});
			},
		});
	};
	return (
		<div>
			<Text fontSize={"2xl"}>Edit</Text>
			<Formik
				initialValues={{
					title: "başlık",
					description: "Lorem ipsum dolor sit amet.",
					photos: [],
				}}
				onSubmit={handleSubmit}
			>
				{({
					handleSubmit,
					errors,
					touched,
					handleChange,
					handleBlur,
					values,
					isSubmitting,
				}) => {
					return (
						<>
							<Box>
								<Box margin={5} textAlign={"left"}>
									<form onSubmit={handleSubmit}>
										<FormControl mt={4}>
											<FormLabel>Title</FormLabel>
											<Input
												name="title"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.title}
												disabled={isSubmitting}
												isInvalid={touched.title && errors.title}
											/>
											{touched.title && errors.title && (
												<Text color={"red"}>{errors.title}</Text>
											)}
										</FormControl>
										<FormControl mt={4}>
											<FormLabel>Description</FormLabel>
											<Textarea
												name="description"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.description}
												disabled={isSubmitting}
												isInvalid={touched.description && errors.description}
											/>
											{touched.description && errors.description && (
												<Text color={"red"}>{errors.description}</Text>
											)}
										</FormControl>
										<FormControl>
											<FormLabel>Photos</FormLabel>
											<FieldArray
												name="photos"
												render={(arrayHelpers) => (
													<>
														<div>
															{values.photos &&
																values.photos.map((photo, index) => (
																	<div key={index}>
																		<Input
																			name={`photos.${index}`}
																			value={photo}
																			disabled={isSubmitting}
																			onChange={handleChange}
																			width={"3xl"}
																		/>
																		<Button
																			ml={4}
																			type={"button"}
																			colorScheme={"red"}
																			onClick={() => arrayHelpers.remove(index)}
																		>
																			Remove
																		</Button>
																	</div>
																))}
														</div>

														<Button
															mt={5}
															onClick={() => arrayHelpers.push("")}
														>
															Add a Photo
														</Button>
													</>
												)}
											/>
										</FormControl>
										<Button
											mt={4}
											width={"full"}
											type={"submit"}
											isLoading={isSubmitting}
										>
											Upload
										</Button>
									</form>
								</Box>
							</Box>
						</>
					);
				}}
			</Formik>
		</div>
	);
}

export default NewTodo;