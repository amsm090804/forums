import React, { Component} from 'react';

class FullArticle extends Component {

    componentDidMount () {
        console.log('hiiiii');
        this.loadData();
    }

    componentDidUpdate() {
        console.log(this.props);
        this.loadData();
    }

    loadData () {
        if ( this.props.match.params.id ) {
            // if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id) ) {
            //     axios.get( '/posts/' + this.props.match.params.id )
            //         .then( response => {
            //             // console.log(response);
            //             this.setState( { loadedPost: response.data } );
            //         } );
            // }
            console.log(this.props.match.params.id);
        }
    }

    render() {
        return <div> { 'hello1111 from' + this.props.match.params.id } </div>

    }
}

export default FullArticle;