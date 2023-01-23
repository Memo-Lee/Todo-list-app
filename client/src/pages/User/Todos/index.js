import { useMemo } from "react";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchAllTodos, deleteTodo } from "../../../api";

import { Text, Button, Flex } from "@chakra-ui/react";
import { Table, Popconfirm } from "antd";

import { Link } from "react-router-dom";

function UserTodos() {
	const { isLoading, isError, data, error } = useQuery(["user:todo"], () =>
		fetchAllTodos()
	);

	const queryClient = useQueryClient();

	const deleteMutation = useMutation(deleteTodo, {
		onSuccess: () => queryClient.invalidateQueries("user:todo"),
	});

	const columns = useMemo(() => {
		return [
			{
				title: "Title",
				dataIndex: "title",
				key: "title",
			},
			{
				title: "Description",
				dataIndex: "description",
				key: "description",
			},
			{
				title: "Created At",
				dataIndex: "createdAt",
				key: "createdAt",
			},
			{
				title: "Action",
				key: "action",
				render: (text, record) => (
					<>
						<Link to={`/user/todos/${record._id}`}><Button>Edit</Button></Link>
						<Popconfirm
							title="Are you sure?"
							onConfirm={() => {
								deleteMutation.mutate(record._id, {
									onSuccess: () => {
										console.log("success");
										alert("deleted");
									},
								});
							}}
							onCancel={() => console.log("iptal edildi")}
							okText="Yes"
							cancelText="No"
							placement="left"
						>
							<a href="/#" style={{ marginLeft: 5 }}>
								<Button>Delete</Button>
							</a>
						</Popconfirm>
					</>
				),
			},
		];
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div>Error {error.message}</div>;
	}
	const dataSource = data;
	console.log(data);
	return (
		<div>
			<Flex justifyContent="space-between" alignItems="center">
				<Text fontSize="2xl" p="5">
					Todos
				</Text>

				<Link to={"/user/todos/new"}>
					<Button>New Todo</Button>
				</Link>
			</Flex>

			<Table dataSource={dataSource} columns={columns} rowKey="_id" />
		</div>
	);
}

export default UserTodos;
