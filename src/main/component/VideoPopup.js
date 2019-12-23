import React, { Component } from 'react'
import {Button, Embed, Header, Icon, Modal} from 'semantic-ui-react'
import Container from "react-bootstrap/Container";

 class VideoPopup extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    render() {
        return (
            // eslint-disable-next-line react/jsx-no-undef
            <Modal
                trigger={<Button onClick={this.handleOpen}>Trailer</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
                basic = 'true'
                size='small'>

                <Header icon='browser' content='Movie Trailer' />
                <Modal.Content>
                    <Embed
                        id='O6Xo21L0ybE'
                        placeholder='/images/image-16by9.png'
                        source='youtube'
                    />
                </Modal.Content>
                <Modal.Actions>
                    <Button color='green' onClick={this.handleClose} inverted>
                        <Icon name='checkmark' /> Close
                    </Button>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default VideoPopup;
