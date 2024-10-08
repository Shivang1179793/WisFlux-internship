import { FC, KeyboardEventHandler, KeyboardEvent, useState } from "react"
import "../styles/Content.style.css"
import axios, { AxiosResponse } from "axios"
import Avatar from "./Avatar"
import { User, Event } from "../types"
import { separateEventProps } from "../Utils"
import Events from "./Events"

const Content: FC = (): JSX.Element => {
	const [eventResponse, setEventResponse] = useState<Event[]>([])
	const [userResponse, setUserResponse] = useState<User>()
	const [username, setUsername] = useState('')

	const handleEnter: KeyboardEventHandler<HTMLInputElement> = async (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code !== "Enter") return
		const inputElement = e.target as HTMLInputElement
		const inputUserName: string = inputElement.value
		inputElement.value = ""
		setUsername(inputUserName)
		try {
			const myEventResponse: AxiosResponse<Event[]> = await axios.get(`https://api.github.com/users/${inputUserName}/events`)
			const myUserResponse: AxiosResponse<User> = await axios.get(`https://api.github.com/users/${inputUserName}`)

			setEventResponse(myEventResponse.data)
			setUserResponse(myUserResponse.data)

		} catch (e) {
			if (axios.isAxiosError(e)) {
				console.log('Bad username')
			} else {
				console.log('Unknown error occurred')
			}
		}
	}

	const avatarProps = {
		displayName: userResponse?.name,
		userName: username,
		imgUrl: userResponse?.avatar_url,
		repos: userResponse?.public_repos,
		followers: userResponse?.followers,
		following: userResponse?.following
	}

	const finalEvents = separateEventProps(eventResponse)
	console.log(finalEvents)

	return (
		<>
			<div className="container">
				<div className="profile">
					<input
						type="text"
						placeholder="Enter The GitHub Username and Press Enter!"
						onKeyDown={handleEnter}
						className="input"
					/>

					{username && <Avatar {...avatarProps} />}
				</div>
				<div className="activity">
					<Events arr={eventResponse} />
				</div>
			</div>
		</>
	)
}

export default Content
