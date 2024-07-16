import "./App.css";
import {List} from "./components/List";
import {TabSwitcher} from "./components/Tab";

function App() {
	return (
		<div>
			<TabSwitcher defaultTab={1}>
				<TabSwitcher.Tab id={1}>
					<button>Tab 1</button>
				</TabSwitcher.Tab>
				<TabSwitcher.Tab id={2}>
					<button>Tab 2</button>
				</TabSwitcher.Tab>

				<TabSwitcher.TabPenal whenActive={1}>
					<div>Show tab penal 1</div>
					<div>
						<List>
							<List.Item>1</List.Item>
							<List.Item>2</List.Item>
							<List.Item>3</List.Item>
						</List>
					</div>
				</TabSwitcher.TabPenal>
				<TabSwitcher.TabPenal whenActive={2}>
					<div>Show tab penal 2</div>
				</TabSwitcher.TabPenal>
			</TabSwitcher>
		</div>
	);
}

export default App;
