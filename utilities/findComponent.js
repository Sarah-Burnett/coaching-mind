import { A, TransparentButton } from "../styles/components";
import TwoGrid from "../components/TwoGrid";
import FullImg from "../components/FullImg";
import Video from "../components/Video";
import ThreeGrid from "../components/ThreeGrid";

export default function findComponent(component) {
	switch (component) {
		case "A":
			return A;
		case "TransparentButton":
			return TransparentButton;
		case "TwoGrid":
			return TwoGrid;
		case "FullImg":
			return FullImg;
		case "Video":
            return Video;
        case "ThreeGrid":
            return ThreeGrid;
		default:
			break;
	}
}
