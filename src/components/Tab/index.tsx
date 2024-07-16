import {
	createContext,
	Dispatch,
	PropsWithChildren,
	SetStateAction,
	useContext,
	useState,
} from "react";

type TypeTabContext = [number, Dispatch<SetStateAction<number>>];

const TabContext = createContext<TypeTabContext>([0, () => null]);

type TabProps = {
	id: number;
};
const Tab = (props: PropsWithChildren<TabProps>) => {
	const {id, children} = props;
	const [, setActiveTabID] = useContext(TabContext);
	return (
		<div>
			<div onClick={() => setActiveTabID(id)}>{children}</div>
		</div>
	);
};

type TabPenalProps = {
	whenActive: number;
};
const TabPenal = (props: PropsWithChildren<TabPenalProps>) => {
	const {whenActive, children} = props;
	const [activeTabID] = useContext(TabContext);
	return <div>{activeTabID === whenActive ? children : null}</div>;
};

type TabSwitcherProps = {
	defaultTab: number;
};
const TabSwitcher = (props: PropsWithChildren<TabSwitcherProps>) => {
	const {defaultTab = 1, children} = props;
	const [activeTabID, setActiveTabID] = useState<number>(defaultTab);
	return (
		<TabContext.Provider value={[activeTabID, setActiveTabID]}>
			{children}
		</TabContext.Provider>
	);
};

TabSwitcher.Tab = Tab;
TabSwitcher.TabPenal = TabPenal;
export {TabSwitcher};
