import React, {PropsWithChildren, ReactElement, useState} from "react";

type ListItemProps = {
	onClick?: () => void;
	selected?: boolean;
};
const ListItem = (props: PropsWithChildren<ListItemProps>) => {
	const {onClick, selected, children} = props;
	return (
		<li style={{background: selected ? "green" : "inherit"}} onClick={onClick}>
			{children}
		</li>
	);
};

const List = (props: PropsWithChildren) => {
	const {children} = props;
	const [selected, setSelected] = useState(0);
	return (
		<ul>
			{React.Children.map(children, (child, index) =>
				React.cloneElement(child as ReactElement<ListItemProps>, {
					onClick: () => setSelected(index),
					selected: index === selected,
				}),
			)}
		</ul>
	);
};

List.Item = ListItem;
export {List};
