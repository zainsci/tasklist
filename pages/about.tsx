import React from "react"

import Container from "@components/Container"

const About = () => {
	return (
		<Container title="About" className="p-[0px]">
			<div className="flex-1 overflow-y-scroll p-4">
				<h1 className="h1">About</h1>
				<p className="p">
					This app is based on the <strong>Ivy Lee method</strong> which is
					considered to be one of the best productivity techniques out there.
				</p>
				<p className="p">Following is how the Ivy Lee method works.</p>
				<ol className="list-decimal list-outside space-y-2 ml-8 mb-4">
					<li>
						At the end of each day's work write down six tasks that you want to
						complete the next day. Make sure to only write down six things and
						no more.
					</li>
					<li>Now reorder the list in order of their importance.</li>
					<li>
						The next day focus on the first task and only on that until you
						finish it. Do not move to next task until you finish the first one.
					</li>
					<li>Do the same with the rest of the tasks in order.</li>
					<li>
						Move all the unfinished tasks at the end of the day to the new list
						for the next day.
					</li>
					<li>Repeat these steps every day. </li>
				</ol>

				<h3 className="h3">How this app works?</h3>
				<p className="p">
					This app works the same way as any other todo list app. But it do have
					the following features.
				</p>
				<ul className="list-disc list-outside ml-8">
					<li>You can only add Six Tasks at a time.</li>
					<li>You can order them around the way you like.</li>
					<li>
						All of the tasks are stored on your local machine like on your
						mobile phone.
					</li>
				</ul>
			</div>
		</Container>
	)
}

export default About
