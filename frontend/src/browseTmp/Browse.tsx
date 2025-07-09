import { Flex, Text, Button } from "@radix-ui/themes";
import './browse.css'
export default function Browse() {
	return (
		<Flex direction="column" gap="2">
			<Text>I'm a young browse component</Text>
			<div className="buttonContainer">
				<Button>Let's go</Button>
			</div>
		</Flex>
	);
}