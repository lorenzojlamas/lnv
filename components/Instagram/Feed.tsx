import React, { Component } from "react";
import Media from "./Media";
import Instagram from "../../utils/Instagram";

class Feed extends Component {
  static defaultProps = {
    className: "",
    loadingClassName: "",
    getFeedFn: Instagram.getFeed,
  };

  constructor(props) {
    super(props);

    this.state = { loading: true, media: [] };
  }

  componentDidMount() {
    this.props
      .getFeedFn(this.props.username)
      .then((media) => this.setState({ loading: false, media: media }))
      .catch(() => this.setState({ loading: false, media: [] }));
  }

  render() {
    if (this.state.loading)
      return (
        <div
          className={[this.props.className, this.props.loadingClassName].join(
            " "
          )}
        ></div>
      );
    const asdadsd = this.state.media.slice(0,3); 
    return (
      <div className={this.props.className}>

        {asdadsd.map((media, index) => (
          <Media key={index} src={media.src} url={media.url} alt={media.alt} />
        ))}
      </div>
    );
  }
}

export default Feed;