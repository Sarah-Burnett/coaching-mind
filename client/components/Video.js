import React from "react";
import { GreySection } from "../styles/components";
import styled from "styled-components";

export default function VideoContainer({ text, img }) {
	return (
		<GreySection>
			<h2>{text.heading}</h2>
			<Video width="800" height="400" autoplay controls>
				<source
					src="https://temp.media/video/?height=400&width=800&length=10"
					type="video/mp4"
				/>
			</Video>
		</GreySection>
	);
}

const Video = styled.video`
    max-height: 100%;
    max-width: 100%;
    outline: none;
`
