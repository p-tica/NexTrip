import './App.css'
import { Link, Redirect, Route, Router, Switch } from "wouter";
import { TabNav, Heading } from '@radix-ui/themes'
import Browse from './browseTmp/Browse';
import Plan from './planTmp/Plan';


function App() {

	return (
		<>
			<Router base='/'>
				<Route path="~/" children={<Redirect to="/" />} />
				<div className="App">
					<TabNav.Root >
						<nav className='appNav'>
							<div className='links'>
								<TabNav.Link href="/" asChild>
									<Link href="/">Home</Link>
								</TabNav.Link>
								<TabNav.Link href="/browse" asChild>
									<Link href="/browse">Browse</Link>
								</TabNav.Link>
								<TabNav.Link href="/plan" asChild>
									<Link href="/plan">Plan</Link>
								</TabNav.Link>
							</div>
							<Heading size='8'>NexTrip</Heading>
							<div className='help'>
								<TabNav.Link href="/help" asChild>
										<Link href="/help">Help</Link>
								</TabNav.Link>
							</div>
						</nav>
					</TabNav.Root>
					<main>
						<Switch>
							<Route path="/">This is the home page</Route>
							<Route path="/browse"> <Browse /> </Route>
							<Route path="/plan"> <Plan /> </Route>
							<Route path="/help">Google it!</Route>
						</Switch>
					</main>
				</div>
			</Router>
		</>
	)
}

export default App
