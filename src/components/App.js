import SongsList from './SongsList';
import SongDetail from './SongDetail';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column four wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
