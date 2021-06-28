import React from 'react';
import classes from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,  
        status: this.props.status     
    }

    // activeEditMode = () => {
    //     this.state.editMode = true;
    // }


    activeEditMode () {
        // this.state.editMode = true;
        // this.forceUpdate();
        this.setState ({
            editMode : true
        })
    }

    deactiveEditMode () {
        this.setState ({
            editMode : false
        });
        this.props.updateStatus(this.state.status);
    }


    onStatusChange = (e) => {

        this.setState ({
            status: e.currentTarget.value
        })

    }


componentDidUpdate () {
    debugger;
    console.log("componentDidUpdate")

}



    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activeEditMode.bind(this)}>{this.props.status || "---------"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactiveEditMode.bind(this)} value={this.state.status} />
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus