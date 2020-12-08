import { useTransition } from "react-spring";

export default function useFadeTransition(state) {
	return useTransition(state, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});
}
