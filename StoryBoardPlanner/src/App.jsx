import React, { useState } from "react";
import "./App.css";

function App() {
  const [scenes, setScenes] = useState([]);
  const [characters, setCharacters] = useState([]);

  const [newScene, setNewScene] = useState({ title: "", description: "", img: "" });
  const [newCharacter, setNewCharacter] = useState({ name: "", description: "", img: "" });

  const addScene = () => {
    setScenes([...scenes, { ...newScene, id: scenes.length + 1 }]);
    setNewScene({ title: "", description: "", img: "" });
  };

  const addCharacter = () => {
    setCharacters([...characters, { ...newCharacter, id: characters.length + 1 }]);
    setNewCharacter({ name: "", description: "", img: "" });
  };

  const removeScene = (id) => {
    setScenes(scenes.filter((scene) => scene.id !== id));
  };

  const removeCharacter = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  const getImage = (img, alt) => (img && img.trim() !== "" ? img : "https://via.placeholder.com/250x150?text=No+Image");

  return (
    <div className="App">
      <header className="header">
        <h1>Storyboard Planner</h1>
      </header>

      <div className="toolbar">
        <button onClick={addScene}>Add Scene</button>
        <button onClick={addCharacter}>Add Character</button>
      </div>

      {/* Add Scene Form */}
      <div className="form">
        <h3>Add a New Scene</h3>
        <input
          type="text"
          value={newScene.title}
          onChange={(e) => setNewScene({ ...newScene, title: e.target.value })}
          placeholder="Scene Title"
        />
        <textarea
          value={newScene.description}
          onChange={(e) => setNewScene({ ...newScene, description: e.target.value })}
          placeholder="Scene Description"
        />
        <input
          type="text"
          value={newScene.img}
          onChange={(e) => setNewScene({ ...newScene, img: e.target.value })}
          placeholder="Image URL"
        />
      </div>

      {/* Add Character Form */}
      <div className="form">
        <h3>Add a New Character</h3>
        <input
          type="text"
          value={newCharacter.name}
          onChange={(e) => setNewCharacter({ ...newCharacter, name: e.target.value })}
          placeholder="Character Name"
        />
        <textarea
          value={newCharacter.description}
          onChange={(e) => setNewCharacter({ ...newCharacter, description: e.target.value })}
          placeholder="Character Description"
        />
        <input
          type="text"
          value={newCharacter.img}
          onChange={(e) => setNewCharacter({ ...newCharacter, img: e.target.value })}
          placeholder="Image URL"
        />
      </div>

      {/* Scenes Section */}
      <h2>Scenes</h2>
      <div className="grid">
        {scenes.map((scene) => (
          <div className="card" key={scene.id}>
            <img src={getImage(scene.img, scene.title)} alt={scene.title} />
            <h3>{scene.title}</h3>
            <p>{scene.description}</p>
            <button className="delete-btn" onClick={() => removeScene(scene.id)}>Delete</button>
          </div>
        ))}
      </div>

      {/* Characters Section */}
      <h2>Characters</h2>
      <div className="grid">
        {characters.map((character) => (
          <div className="card" key={character.id}>
            <img src={getImage(character.img, character.name)} alt={character.name} />
            <h3>{character.name}</h3>
            <p>{character.description}</p>
            <button className="delete-btn" onClick={() => removeCharacter(character.id)}>Delete</button>
          </div>
        ))}
      </div>

      <footer className="footer">© 2025 Storyboard Planner</footer>
    </div>
  );
}

export default App;
