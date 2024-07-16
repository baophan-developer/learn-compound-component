import {CSSProperties, useCallback, useMemo, useState} from "react";

enum StylesListEnum {
	SHOPPING_CART_LIST = "shoppingCartList",
	VERTICAL_LIST = "verticalList",
	HORIZONTAL_LIST = "horizontalList",
}

enum StylesItemEnum {
	SHOPPING_CART_LIST_ITEM = "shoppingCartListItem",
	VERTICAL_LIST_ITEM = "verticalListItem",
	HORIZONTAL_LIST_ITEM = "horizontalListItem",
}

const styles = {
	[StylesListEnum.SHOPPING_CART_LIST]: {
		display: "inline-flex",
		listStyle: "none",
		padding: "0px",
		border: "1px solid black",
	},
	[StylesListEnum.VERTICAL_LIST]: {
		flexWrap: "wrap",
		borderBottom: "0px",
	},
	[StylesListEnum.HORIZONTAL_LIST]: {
		flexWrap: "nowrap",
		borderRight: "0px",
	},
	[StylesItemEnum.SHOPPING_CART_LIST_ITEM]: {
		cursor: "pointer",
		display: "inline-flex",
		justifyContent: "center",
		minWidth: "100px",
		width: "100%",
		padding: "10px",
	},
	[StylesItemEnum.VERTICAL_LIST_ITEM]: {
		borderBottom: "1px solid black",
	},
	[StylesItemEnum.HORIZONTAL_LIST_ITEM]: {
		borderRight: "1px solid black",
	},
};

type CartProps = {
	items: unknown[];
	direction: {
		vertical: `${StylesListEnum}`;
		horizontal: `${StylesItemEnum}`;
	};
};
const Cart = (props: CartProps) => {
	const {
		items,
		direction = {
			vertical: StylesListEnum.SHOPPING_CART_LIST,
			horizontal: StylesItemEnum.SHOPPING_CART_LIST_ITEM,
		},
	} = props;
	const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

	const handleItemClick = useCallback((index: number) => {
		setActiveItemIndex(index);
	}, []);

	const style = useMemo(
		() => ({
			list: styles[direction.vertical] as CSSProperties,
			item: styles[direction.horizontal] as CSSProperties,
		}),
		[direction],
	);

	return <ul style={{...style.list}}>{}</ul>;
};
