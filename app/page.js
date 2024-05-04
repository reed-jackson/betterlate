import { Avatar, Box, Card, Code, Container, Dialog, Flex, Heading, ScrollArea, Text } from "@radix-ui/themes";
import Image from "next/image";

export default function Home() {
	return (
		<main>
			<Flex
				position={{ initial: "static", sm: "fixed" }}
				bottom={"0"}
				left={"0"}
				p="4"
				direction={"column"}
				justify={"end"}
				align={"start"}
				maxWidth={{ initial: "100%", sm: "50%" }}
				height={"100vh"}
				style={{ zIndex: "-1" }}
				mb={{ initial: "4", sm: "0" }}
			>
				<Flex align={"center"} gap={"2"}>
					<Code size={"7"}>betterlate.dev</Code>
					<a href="https://twitter.com/likesmetaphors">
						<Avatar
							src="https://pbs.twimg.com/profile_images/1785362324338962432/sHVjLduE_400x400.jpg"
							radius="full"
							size={"4"}
						/>
					</a>
				</Flex>
				<Heading size={{ initial: "7", sm: "9" }} style={{ fontSize: "126px", lineHeight: "0.9" }}>
					Build the software you wish to see in the world
				</Heading>
			</Flex>

			<Flex
				position={{ initial: "static", sm: "fixed" }}
				right={"0"}
				bottom={"0"}
				top={"0"}
				left={"60%"}
				justify={"end"}
				align={"end"}
				direction={"column"}
				maxWidth={{ initial: "100%", sm: "50%" }}
			>
				<Flex direction={"column"} justify={"end"} gap={"4"} p={"4"} width={"100%"}>
					<Card variant="classic" size={"4"}>
						<img src="/dialog.svg" style={{ maxHeight: 40, filter: "saturate(0%)" }} />
					</Card>

					<Card variant="classic" size={"4"}>
						<img src="/wowsbuilds.svg" style={{ maxHeight: 40 }} />
					</Card>
					<Card variant="classic" size={"4"}>
						<img src="/miselogo.svg" style={{ maxHeight: 40 }} />
					</Card>
					<Card variant="classic" size={"4"}>
						<Heading size={"7"}>PRD Copilot</Heading>
					</Card>
				</Flex>
			</Flex>
		</main>
	);
}
