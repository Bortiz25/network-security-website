import { useNavigate } from 'react-router-dom';

export default function Invincible() {
  const navigate = useNavigate();

    return (
      <div className="story-page">
        <h1>The Invincible Adventure</h1>
        <p>Your story content goes here...</p>
        <button rel="noreferrer" onClick={() => navigate(-1)}>Go back home!</button>
      </div>
    );
  }