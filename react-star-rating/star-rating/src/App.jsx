import './App.css';
import StarRating from './StarRating';
import Stars from './Stars';

function App() {
  // const defaultRating = localStorage.getItem("starRating");
  const defaultRating = 0;
  return (
    <div>
      <div>Alex</div>
    <Stars iconSize={50} defaultRating={defaultRating} />
    <Stars iconSize={50} icon="❤" color="red" defaultRating={defaultRating} />
    <Stars
      iconSize={45}
      icon="😍"
      color="red"
      defaultRating={defaultRating}
    />
    <Stars
      iconSize={45}
      icon="🌷"
      color="red"
      defaultRating={defaultRating}
    />
    <div>Eric</div>
    <StarRating/>
  </div>
  );
}

export default App;
