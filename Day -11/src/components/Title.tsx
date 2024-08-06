import { FC } from "react"
import '../styles/Title.style.css'

const Title: FC = (): JSX.Element => {
	return(
		<>
			<div className="titleContainer">
				<div className="mainTitle">
					Git Stare Clone
				</div>
				<div className="subTitle">
					Snoop at GitHub Users! 🤫
				</div>
			</div>
		</>
	)
}

export default Title