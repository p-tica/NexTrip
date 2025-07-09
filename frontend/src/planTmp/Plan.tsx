import { Flex, Text, Button } from "@radix-ui/themes";

export default function Plan() {
	return (
		<Flex direction="column" gap="2">
			<Text>I'm a young plan component</Text>
			<div>
				<Button>Let's go</Button>
			</div>
		</Flex>
	);
}