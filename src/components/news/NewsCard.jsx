import React from "react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import Card from "../layout/Card";

const NewsCard = ({ newsItem }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Card>
      <Box as="a" href={newsItem.url} target="_blank" _hover={{ textDecoration: "none" }}>
        <Heading size="sm" mb={4} textAlign="center">
          {newsItem.title}
        </Heading>
        <Flex direction={{ base: "column", md: "row" }}>
          <Image src={newsItem.imageurl} alt={newsItem.title} boxSize={{ base: "full", md: "100px" }} objectFit="cover" mr={4} borderRadius="8px"/>
          <Text fontSize="sm" noOfLines={5} align="left">
            {truncateText(`${newsItem.body}`, 150)}
          </Text>
        </Flex>
      </Box>
    </Card>
  );
};

export default NewsCard;
