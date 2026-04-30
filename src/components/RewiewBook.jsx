import { Component } from "react";

class RewiewBook extends Component {
  state = {
    comments: [],
  };

  fetchRewiew = () => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OWYzMzkxZmYwNDIwZDAwMTUxNTVhNjAiLCJpYXQiOjE3Nzc1NDc1NTIsImV4cCI6MTc3ODc1NzE1Mn0.AiHKfDnUd-mPb2h72mXZazlQE1y8thjSuEBvJye6xhs",
        },
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore di chiamata");
        }
      })
      .then((data) => {
        console.log(data);
        this.setState({
          comments: data,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.fetchRewiew();
  }

  render() {
    return (
      <div>
        {this.state.comments.map((rew) => (
          <p key={rew._id}>{rew.comment}</p>
        ))}
      </div>
    );
  }
}

export default RewiewBook;
