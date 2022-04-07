import { useEffect } from 'react';
import { useLocation } from 'react-router';
interface Props {
	children?: React.ReactNode;
}
const ScrollTopWhenChangeUrl = (props: Props) => {
	const location = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location]);

	return props.children as JSX.Element;
};

export default ScrollTopWhenChangeUrl;
