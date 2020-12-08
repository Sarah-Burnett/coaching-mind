import { useTransition } from "react-spring";

export default function useHeightTransition(state) {
	return useTransition(state, null, {
		from: { height: 0, opacity: 0 },
		enter: [{ height: "auto" }, { opacity: 1 }],
		leave: [{ opacity: 0 }, { height: 0 }],
		config: { duration: 150 },
	});
}
