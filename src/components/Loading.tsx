import Modal from 'react-modal'

import Container, {modalStyle} from '../styles/components/Loading'

Modal.setAppElement('#__next')

interface LoadingProps {
	isOpen: boolean
}

const Loading: React.FC<LoadingProps> = ({isOpen}) => {
	return (
		<Modal isOpen={isOpen} style={modalStyle}>
			<Container>
				<svg>
					<circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
				</svg>
			</Container>
		</Modal>
	)
}

export default Loading
